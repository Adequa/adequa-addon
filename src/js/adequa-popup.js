'use strict';

(function() {
    var messaging = vAPI.messaging;

    var render = function() {
        //Disabled useless stylesheets
        toggleStyle('adequa-popup.css', false);

        let popupData = {};
        let toggleButton = document.getElementById('toggleNetFilteringSwitch');
        let statsSwitch = document.getElementsByTagName('input')[0];
        const renderNetFilteringSwitch = function () {
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
            uDom('#trackers_blocked').nodes[0].innerHTML = nbTrackersBlocked || 0
        };
        const setNbAdsBlocked = function (nbAdsBlocked){
            uDom('#ads_blocked').nodes[0].innerHTML = nbAdsBlocked || 0
        };
        const setTimeWon = function (timeWon){
            uDom('#time_won').nodes[0].innerHTML = (timeWon || 0).toFixed(2) + ' mins'
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
                    var adPrints = uDom('#ad-prints');
                    var content = '';

                    for (var item in passions) {
                        item = passions[item]
                        content = content + '<div class="stat"><p>' + item.passion.toUpperCase() + '</p><p>' + item.count + '</p></div>'
                    }
                    if (content === '')
                        adPrints.nodes[0].innerHTML = '<p align="center">Aucune pub visionnée</p>';
                    else
                        adPrints.nodes[0].innerHTML = content;
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

        toggleButton.addEventListener('click', toggleNetFilteringSwitch);
        statsSwitch.addEventListener('change', toggleStatsDisplayed);
    };
    if(uDom('body').hasClass('adequa-popup'))
        render();
})();
