'use strict';

(function() {
    var messaging = vAPI.messaging;

    var render = function() {
        //Disabled useless stylesheets
        toggleStyle('adequa-popup.css', false);

        let popupData = {};
        let toggleButton = document.getElementById('toggleNetFilteringSwitch');
        let statsSwitch = document.getElementsByTagName('input')[0];
        let trackersBlockedElement = uDom('#trackers_blocked').nodes[0];
        let adsBlockedElement = uDom('#ads_blocked').nodes[0];
        let timeWonElement = uDom('#time_won').nodes[0];

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
                trackersBlockedElement.innerHTML = nbTrackersBlocked || 0
        };
        const setNbAdsBlocked = function (nbAdsBlocked){
            if(adsBlockedElement !== undefined)
                adsBlockedElement.innerHTML = nbAdsBlocked || 0
        };
        const setTimeWon = function (timeWon){
            if(timeWonElement !== undefined)
                timeWonElement.innerHTML = (timeWon || 0).toFixed(2) + ' mins'
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
                    setNbTrackersBlocked(current.nbTrackersBlocked);
                    setNbAdsBlocked(current.nbAdsBlocked);
                    setTimeWon(current.loadTime / 1000 / 60);
                });
        };

        const renderAdsViewed = function(){
            messaging.send(
                'adequa',
                {
                    what: 'fetchAdsViewed'
                },
                function(passions) {
                    var adPrints = uDom('#ad-prints').nodes[0];
                    var content = '';

                    for (var item in passions) {
                        item = passions[item]
                        content = content + '<div class="stat"><p>' + item.passion.toUpperCase() + '</p><p>' + item.count + '</p></div>'
                    }

                    if(adPrints === undefined)
                        return;

                    if (content === '')
                        adPrints.innerHTML = '<p align="center">Aucune pub visionnée</p>';
                    else
                        adPrints.innerHTML = content;
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
            renderNetFilteringSwitch()
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

        renderAdsViewed();

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
    if(uDom('body').hasClass('adequa-popup'))
        render();
})();
