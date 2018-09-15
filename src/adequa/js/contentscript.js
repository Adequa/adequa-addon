"use strict";

const checkIfLoaded = function(){
    if(window.performance.getEntriesByType('navigation')[0].duration !== 0) {
        const loadTime = Math.round(window.performance.getEntriesByType('navigation')[0].duration);
        const consultTime = window.performance.timing.responseStart;
        vAPI.messaging.send('adequa', {what: "pageLoadTime", loadTime, consultTime});
        clearInterval(ADinterval);
    }
};

const ADinterval = setInterval(checkIfLoaded, 200);

const isElementInViewport = function(elem) {
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

const addAd = function(element){
    if(!element.hasAttribute('data-adequa'))
        element.setAttribute('data-adequa', '');
};

const countAds = function () {
    vAPI.messaging.send('adequa', {
        what: 'getQuerySelectors',
        url: location.href
    }, function(querySelectors){
        if(!querySelectors)
            return;
        for (let selector of querySelectors) {
            let elements = document.querySelectorAll(selector);
            if (elements.length !== 0) {
                elements.forEach(function (elem) {
                    if(elem.hasAttribute('data-adequa'))
                        return;

                    if(window.getComputedStyle(elem, null).display === 'none')
                        return false;
                    if (elem.clientHeight >= 45 && isElementInViewport(elem)) {
                        const iframe = elem.querySelector('iframe');
                        if(iframe){
                            try {
                                var doc = (iframe.contentWindow || iframe.contentDocument);
                                if (doc.document) doc = doc.document;
                                if (!(doc && doc.documentElement.scrollHeight <= 40))
                                    addAd(elem);
                            } catch(e) {}
                        }
                        else
                            addAd(elem);
                    }
                });
            }
        }

        const ads = document.querySelectorAll('[data-adequa]').length || 0;
        vAPI.messaging.send('adequa', {
            what: 'setAdsViewed',
            nbAdsViewed: ads
        });
    });
};

let scrollTimer = -1;

const onScroll = function() {
    if (scrollTimer !== -1)
        clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout(onScrollFinished, 500);
};

const onScrollFinished = function() {
    countAds();
    setTimeout(countAds, 4000);
};

const domWatcherInterface = {
    onDOMCreated: function() {
        setTimeout(countAds, 2000);
    },
    onDOMChanged: function() {
        setTimeout(countAds, 2000);
    }
};

vAPI.messaging.send('adequa', {
    what: 'isSitePartner',
    url: location.href
}, function(isSitePartner){
    if(isSitePartner){
        window.addEventListener("scroll", onScroll);
        if ( vAPI.domWatcher instanceof Object ) {
            vAPI.domWatcher.addListener(domWatcherInterface);
        }
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
