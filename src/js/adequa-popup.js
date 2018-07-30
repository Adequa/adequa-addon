'use strict';

(function() {
    var messaging = vAPI.messaging;
    var pendingChanges = [];
    var asyncCalls = 0;

    var commitChanges = function() {
        for (var pendingChange of pendingChanges) {
            pendingChange();
        }
        pendingChanges = [];
        setTimeout(function() {
            resizePopup();
        }, 200);
    };

    var resizePopup = function() {
        var height = uDom("body").offsetHeight;
        var style = getComputedStyle(uDom("body"));
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        alert(height);
        uDom("body").style.height = height;
    };

    var registerAsyncCall = function(isStarting) {
        if (isStarting) {
            asyncCalls += 1;
        } else {
            asyncCalls -= 1;
        }

        if (asyncCalls <= 0) {
            commitChanges();
        }
    };

    uDom("#debug").on('click', function() {
        messaging.send(
            'adequa',
            {
                what: 'resetForDebug',
            },
            function() {
                render();
            }
        );
    });

    var render = function() {
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

            }
        );

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
        };

    };
    render();
})();
