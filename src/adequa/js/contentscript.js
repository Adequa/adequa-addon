"use strict";
(function () {
    if (!vAPI)
        return;

    const domFilterer = new vAPI.DOMFilterer();
    const messaging = vAPI.messaging;
    const checkIfLoaded = function () {
        if (window.performance.getEntriesByType('navigation')[0].duration !== 0) {
            const loadTime = Math.round(window.performance.getEntriesByType('navigation')[0].duration);
            const consultTime = window.performance.timing.responseStart;
            vAPI.messaging.send('adequa', {what: "pageLoadTime", loadTime, consultTime});//TODO check vAPI undefined
            clearInterval(ADinterval);
        }
    };

    const ADinterval = setInterval(checkIfLoaded, 200);

    const isElementInViewport = function (elem) {
        let x = elem.getBoundingClientRect().left;
        let y = elem.getBoundingClientRect().top;
        let ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let w = elem.clientWidth;
        let h = elem.clientHeight;
        return (
            (y < hw &&
                y + h > 0) &&
            (x < ww &&
                x + w > 0)
        );
    };

    const addAd = function (element) {
        if (element.hasAttribute('data-adequa'))
            return;

        element.setAttribute('data-adequa', '');
    };

    const countAds = function () {
        messaging.send('adequa', {
            what: 'getQuerySelectors',
            url: location.href
        }, function (querySelectors) {
            if (!querySelectors)
                return;

            for (let selector of querySelectors.allowed) {
                let elements = document.querySelectorAll(selector);
                if (elements.length !== 0) {
                    elements.forEach(function (elem) {
                        if (elem.hasAttribute('data-adequa'))
                            return;

                        if (window.getComputedStyle(elem, null).display === 'none')
                            return false;

                        if (elem.clientHeight >= 35 && isElementInViewport(elem)) {
                            addAd(elem);
                        }
                    });
                }
            }

            const ads = document.querySelectorAll('[data-adequa]');
            let partnerAds = [];
            for (let element of ads) {
                if (!element.classList.contains('adequa-ad'))
                    continue;
                const ins = element.querySelector('ins');
                if (!ins)
                    continue;

                partnerAds.push({
                    id: ins.getAttribute('data-revive-id'),
                    passion: ins.getAttribute('data-revive-themes')
                });
            }

            messaging.send('adequa', {
                what: 'setAdsViewed',
                nbAdsViewed: ads.length || 0,
                partnerAds
            });
        });
    };

    let scrollTimer = -1;

    const onScroll = function () {
        if (scrollTimer !== -1)
            clearTimeout(scrollTimer);

        scrollTimer = window.setTimeout(onScrollFinished, 500);
    };

    const onScrollFinished = function () {
        countAds();
        setTimeout(countAds, 4000);
    };

    const getBlockedSelectors = function (cfeDetails, callback) {
        messaging.send('adequa', {
            what: 'getQuerySelectors',
            url: location.href
        }, function (querySelectors) {
            let selectors = [];
            let allowed = (querySelectors.allowed || []).concat(['.AD-Rotate', '.adequa-ad']);
            for (let list of [cfeDetails.declarativeFilters, cfeDetails.highGenericHideSimple, cfeDetails.highGenericHideComplex, cfeDetails.injectedHideFilters, querySelectors.blocked]) {
                let allFilters = [];
                let newSelectors = [];
                if (list.indexOf(',\n') !== -1) {
                    allFilters = list.split(',\n');
                }
                else {
                    allFilters = list;
                }
                for (let filter of allFilters || [])
                    if (allowed.indexOf(filter) === -1)
                        newSelectors.push(filter);

                selectors.push(newSelectors.join(','));
            }
            callback(selectors);
        });
    };

    const removeUnneededElements = function () {
        messaging.send(
            'contentscript',
            {
                what: 'retrieveContentScriptParameters',
                url: window.location.href,
                isRootFrame: window === window.top,
                charset: document.characterSet
            },
            function (response) {
                const cfeDetails = response && response.specificCosmeticFilters;

                getBlockedSelectors(cfeDetails, function (selectors) {
                    domFilterer.addCSSRule(
                        selectors,
                        'display:none!important;'
                    );
                });
            }
        );
    };

    const domWatcherInterface = {
        onDOMCreated: function () {
            setTimeout(countAds, 2000);
        },
        onDOMChanged: function () {
            setTimeout(countAds, 2000);
        }
    };

    const injectCss = function () {
        messaging.send('adequa', {
            what: 'getQuerySelectors',
            url: location.href
        }, function (querySelectors) {
            for (let selector in querySelectors.css) {
                domFilterer.addCSSRule(
                    selector,
                    querySelectors.css[selector]
                );
            }
        });
    };

    messaging.send('adequa', {
        what: 'isSitePartner',
        url: location.href
    }, function (isSitePartner) {
        if (isSitePartner) {
            window.addEventListener("scroll", onScroll);
            if (vAPI.domWatcher instanceof Object) {
                vAPI.domWatcher.addListener(domWatcherInterface);
            }

            removeUnneededElements();
            injectCss();

            vAPI.messaging.send('adequa', {what: 'getAddonInfo'}, function (response) {
                setTimeout(function () {
                    window.postMessage(JSON.stringify({
                        token: response.addonToken,
                        id: response.addonID,
                    }), '*');
                }, 2000);
            });
        }
    });

    const onMessage = function (event) {
        if (event.source === window &&
            event.data &&
            event.data.direction === "AdequaContentScript") {
            vAPI.messaging.send('adequa', {what: 'getAddonInfo'}, function (response) {
                window.postMessage({
                    direction: "hasAdequa",
                    addonId: response.addonID
                }, "*");
            });
        }
    };
    window.addEventListener("message", onMessage);
})();
