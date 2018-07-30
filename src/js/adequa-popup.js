'use strict';

(function() {
    var messaging = vAPI.messaging;

    var render = function() {
        let popupData = {};
        let toggleButton = document.getElementById('toggleNetFilteringSwitch');

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

        messaging.send(
            'adequa',
            {
                what: 'fetchStats',
            },
            function(stats){
                uDom('#trackers_blocked').nodes[0].innerHTML = stats.trackersBlocked;
                uDom('#ads_blocked').nodes[0].innerHTML = stats.adsBlocked;
                uDom('#time_won').nodes[0].innerHTML = Math.round(stats.timeWon/1000/60) + ' mins';

                var adPrints = uDom('#ad-prints');
                var content = '';

                for(var item in stats.passions){
                    item = stats.passions[item];
                    content = content + '<div class="stat"><p>' + item.passion.toUpperCase() + '</p><p>' + item.count + '</p></div>'
                }
                if(content === '')
                    adPrints.nodes[0].innerHTML = '<p align="center">Aucune pub visionnée</p>';
                else
                    adPrints.nodes[0].innerHTML = content;

            });

        var toggleNetFilteringSwitch = function(ev) {
            if ( !popupData || !popupData.pageURL ) { return; }
            messaging.send(
                'popupPanel',
                {
                    what: 'toggleNetFiltering',
                    url: popupData.pageURL,
                    scope: ev.ctrlKey || ev.metaKey ? 'page' : '',
                    state: !uDom('body').toggleClass('off').hasClass('off'),
                    tabId: popupData.tabId
                }
            );
            renderNetFilteringSwitch()
        };

        toggleButton.addEventListener('click', toggleNetFilteringSwitch)
    };
    render();
})();
