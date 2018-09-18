'use strict';

(function () {
    var messaging = vAPI.messaging;

    var render = function () {
        let popupData = {};
        let toggleButton = document.getElementById('toggleNetFilteringSwitch');
        let statsSwitch = document.getElementsByTagName('input')[0];
        let trackersBlockedElement = uDom('#trackers_blocked').nodes[0];
        let adsBlockedElement = uDom('#ads_blocked').nodes[0];
        let timeWonElement = uDom('#time_won').nodes[0];
        let generatedElement = uDom('#generated').nodes[0];
        let adPrintsElement = uDom('#ad-on-page').nodes[0];
        let settingsButton = uDom('#settings').nodes[0];

        const renderNetFilteringSwitch = function () {
            if (toggleButton == null)
                return;
            messaging.send('adequa', {
                what: 'isSitePartner',
                url: popupData.pageURL
            }, function (siteIsPartner) {
                if (siteIsPartner) {
                    toggleButton.innerHTML = `
                    <img src="img/icon_32.png" height="30"/>
                    Vous soutenez cet éditeur !`;
                }
                else if (!uDom('body').hasClass('off')) {
                    toggleButton.innerHTML = `
                    <img src="img/icon_pause.png" height="30"/>
                    Désactiver l'AdOpter sur ce site`;
                }
                else {
                    toggleButton.innerHTML = `
                    <img src="img/icon_start.png" height="30"/>
                    Réactiver l'AdOpter sur ce site`;
                }
            });

        };

        const setNbTrackersBlocked = function (nbTrackersBlocked) {
            if (trackersBlockedElement !== undefined)
                trackersBlockedElement.innerText = nbTrackersBlocked || 0;
        };
        const setNbAdsBlocked = function (nbAdsBlocked) {
            if (adsBlockedElement !== undefined)
                adsBlockedElement.innerText = nbAdsBlocked || 0;
        };
        const setTimeWon = function (timeWon) {
            if (timeWonElement !== undefined)
                timeWonElement.innerText = (timeWon || 0).toFixed(2) + ' mins';
        };
        const setGenerated = function (adsCount) {
            if (generatedElement !== undefined)
                generatedElement.innerText = ((adsCount || 0) * 0.005).toFixed(2) + '€';
        };
        const setAdsViewedOnPage = function (adsViewed) {
            if (adPrintsElement !== undefined)
                adPrintsElement.innerText = adsViewed || 0;
        };

        const renderTotalStats = function () {
            messaging.send(
                'adequa',
                {
                    what: 'fetchTotalStats'
                },
                function (stats) {
                    setNbTrackersBlocked(stats.trackersBlocked);
                    setNbAdsBlocked(stats.adsBlocked);
                    setTimeWon(stats.timeWon / 1000 / 60);
                });
        };

        const renderPageStats = function () {
            messaging.send(
                'adequa',
                {
                    what: 'fetchCurrentStats',
                    tabId: popupData.tabId
                },
                function (current) {
                    setNbTrackersBlocked(current.nbTrackersBlocked);
                    setNbAdsBlocked(current.nbAdsBlocked);
                    setTimeWon(current.loadTime / 1000 / 60);
                });
        };

        const renderAdsViewed = function () {
            messaging.send(
                'adequa',
                {
                    what: 'fetchAdsViewed',
                    tabId: popupData.tabId
                },
                function (adsViewedOnPage) {
                    setAdsViewedOnPage(adsViewedOnPage);
                });

            messaging.send('adequa', {what: 'fetchTotalNumberAdsViewed'}, function (adsViewed) {
                let totalAdsNumber = uDom('#total-ad-number').nodes[0];
                totalAdsNumber.innerText = adsViewed + '';
                setGenerated(adsViewed);
            });
            messaging.send('adequa', {what: 'fetchAdsViewedStats'}, function (adsViewed) {
                let adsViewedToday = uDom('#ads-viewed-today').nodes[0];
                adsViewedToday.innerText = (adsViewed.sawToday > adsViewed.NbMaxAdsPerDay ? adsViewed.NbMaxAdsPerDay : adsViewed.sawToday) + '/' + adsViewed.NbMaxAdsPerDay;
            });
        };

        messaging.send('popupPanel', {
            what: 'getPopupData'
        }, function (response) {
            popupData = response;
            let elem = document.body;
            elem.classList.toggle(
                'off',
                popupData.pageURL === '' ||
                !popupData.netFilteringSwitch ||
                popupData.pageHostname === 'behind-the-scene' && !popupData.advancedUserEnabled
            );

            messaging.send('adequa', {
                what: 'isSitePartner',
                url: popupData.pageURL
            }, function (siteIsPartner) {
                if (!siteIsPartner) {
                    if (toggleButton != null)
                        toggleButton.addEventListener('click', toggleNetFilteringSwitch);
                }
            });

            messaging.send('adequa', {
                what: 'fetchStatSwitchState'
            }, function (state) {
                if (state === 'total') {
                    renderTotalStats();
                    statsSwitch.checked = false;
                }
                else {
                    renderPageStats();
                    statsSwitch.checked = true;
                }
            });

            renderNetFilteringSwitch();
            renderAdsViewed();
        });

        var toggleNetFilteringSwitch = function (event) {
            if (!popupData || !popupData.pageURL) {
                return;
            }
            messaging.send(
                'popupPanel',
                {
                    what: 'toggleNetFiltering',
                    url: popupData.pageURL,
                    scope: event.ctrlKey || event.metaKey ? 'page' : '',
                    state: !uDom('body').toggleClass('off').hasClass('off'),
                    tabId: popupData.tabId
                }
            );
            renderNetFilteringSwitch();
        };

        const toggleStatsDisplayed = function (event) {
            if (!event.target.checked)
                renderTotalStats();
            else
                renderPageStats();

            messaging.send('adequa', {
                what: 'toggleStatSwitch',
                state: event.target.checked
            });
        };

        if (statsSwitch != undefined)
            statsSwitch.addEventListener('change', toggleStatsDisplayed);
        if (settingsButton)
            settingsButton.addEventListener('click', function () {
                location.href = "/adequa/popup-settings.html";
            });

    };
    render();
})();