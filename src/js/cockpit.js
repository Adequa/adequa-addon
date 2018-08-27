'use strict';

(function() {
    var messaging = vAPI.messaging;

    var render = function() {
        let popupData = {};
        let toggleButton = document.getElementById('toggleNetFilteringSwitch');
        let statsSwitch = document.getElementsByTagName('input')[0];
        let trackersBlockedElement = uDom('#trackers_blocked').nodes[0];
        let adsBlockedElement = uDom('#ads_blocked').nodes[0];
        let timeWonElement = uDom('#time_won').nodes[0];
        let generatedElement = uDom('#generated').nodes[0];
        let adPrintsElement = uDom('#ad-on-page').nodes[0];

        const renderNetFilteringSwitch = function () {
            if(toggleButton == null)
                return;

            if (!uDom('body').hasClass('off')) {
                toggleButton.innerHTML = `
                <img src="img/icon_pause.png" height="30"/>
                Désactiver l'AdFilter sur ce site
                `;
            } else {
                toggleButton.innerHTML = `
                <img src="img/icon_start.png" height="30"/>
                Réactiver l'AdFilter sur ce site
                `;
            }
        };

        const setNbTrackersBlocked = function (nbTrackersBlocked){
            if(trackersBlockedElement !== undefined)
                trackersBlockedElement.innerText = nbTrackersBlocked || 0
        };
        const setNbAdsBlocked = function (nbAdsBlocked){
            if(adsBlockedElement !== undefined)
                adsBlockedElement.innerText = nbAdsBlocked || 0
        };
        const setTimeWon = function (timeWon){
            if(timeWonElement !== undefined)
                timeWonElement.innerText = (timeWon || 0).toFixed(2) + ' mins'
        };
        const setGenerated = function (adsCount){
            if(generatedElement !== undefined)
                generatedElement.innerText = ((adsCount || 0) * 0.005).toFixed(2) + '€'
        };
        const setAdsViewedOnPage = function (adsViewed){
            if(adPrintsElement !== undefined)
                adPrintsElement.innerText = adsViewed || 0
        };

        const renderTotalStats = function(){
            messaging.send(
                'adequa',
                {
                    what: 'fetchTotalStats'
                },
                function(stats){
                    setNbTrackersBlocked(stats.trackersBlocked);
                    setNbAdsBlocked(stats.adsBlocked);
                    setTimeWon(stats.timeWon / 1000 / 60);
                });
        };

        const renderPageStats = function(){
            messaging.send(
                'adequa',
                {
                    what: 'fetchCurrentStats',
                    tabId: popupData.tabId
                },
                function(current){
                    // if(!current.loadTime) {
                    //     renderTotalStats();
                    //     statsSwitch.checked = false;
                    //     return;
                    // }
                    setNbTrackersBlocked(current.nbTrackersBlocked);
                    setNbAdsBlocked(current.nbAdsBlocked);
                    setTimeWon(current.loadTime / 1000 / 60);
                });
        };

        const renderAdsViewed = function(){
            messaging.send(
                'adequa',
                {
                    what: 'fetchAdsViewed',
                    tabId: popupData.tabId
                },
                function(adsViewedOnPage) {
                    setAdsViewedOnPage(adsViewedOnPage);

                    messaging.send('adequa', {what: 'fetchTotalNumberAdsViewed'}, function(adsViewed){
                        adsViewed = adsViewed + adsViewedOnPage;
                        var totalAdsNumber = uDom('#total-ad-number').nodes[0];
                        totalAdsNumber.innerText = adsViewed + '';
                        setGenerated(adsViewed);
                    });
                    messaging.send('adequa', {what: 'fetchAdsViewedStats'}, function(adsViewed){
                        var adsViewedToday = uDom('#ads-viewed-today').nodes[0];
                        adsViewed.sawToday = adsViewed.sawToday + adsViewedOnPage;
                        adsViewedToday.innerText = (adsViewed.sawToday > adsViewed.NbMaxAdsPerDay ? adsViewed.NbMaxAdsPerDay : adsViewed.sawToday) + '/' + adsViewed.NbMaxAdsPerDay
                    })
                });
        };

        messaging.send('popupPanel', {
            what: 'getPopupData'
        }, function(response) {
            popupData = response;
            let elem = document.body;
            elem.classList.toggle(
                'off',
                popupData.pageURL === '' ||
                !popupData.netFilteringSwitch ||
                popupData.pageHostname === 'behind-the-scene' && !popupData.advancedUserEnabled
            );
            renderNetFilteringSwitch();
            renderAdsViewed();
        });

        messaging.send('adequa', {
            what: 'fetchStatSwitchState'
        }, function(state){
            if(state === 'total') {
                renderTotalStats();
                statsSwitch.checked = false;
            }
            else {
                renderPageStats();
                statsSwitch.checked = true;
            }
        });

        var toggleNetFilteringSwitch = function(event) {
            if ( !popupData || !popupData.pageURL ) { return; }
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
            renderNetFilteringSwitch()
        };

        var toggleStatsDisplayed = function(event) {
            if(!event.target.checked)
                renderTotalStats();
            else
                renderPageStats();

            messaging.send('adequa', {
                what: 'toggleStatSwitch',
                state: event.target.checked
            })
        };
        if(toggleButton != null)
            toggleButton.addEventListener('click', toggleNetFilteringSwitch);
        if(statsSwitch != undefined)
            statsSwitch.addEventListener('change', toggleStatsDisplayed);
    };
    render();
})();
