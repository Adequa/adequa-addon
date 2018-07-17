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
                render()
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
                uDom('#trackers_blocked').nodes[0].innerHTML = stats.trackersBlocked
                uDom('#ads_blocked').nodes[0].innerHTML = stats.adsBlocked
                uDom('#time_won').nodes[0].innerHTML = Math.round(stats.timeWon/60) + ' mins'

                var adPrints = uDom('#ad-prints');
                var content = '';

                console.log(stats)

                for(var item in stats.passions){
                    item = stats.passions[item]
                    content = content + '<div class="stat"><p>' + item.passion.toUpperCase() + '</p><p>' + item.count + '</p></div>'
                }
                if(content === '')
                    adPrints.nodes[0].innerHTML = '<p align="center">Aucune pub visionnée</p>';
                else
                    adPrints.nodes[0].innerHTML = content;

            })
        // registerAsyncCall(true);
        // messaging.send(
        //     'adequa',
        //     {
        //         what: 'fetchNeeds',
        //     },
        //     function(needs) {
        //         // if (needs.length === 0) {
        //         //     window.close();
        //         //     return;
        //         // }
        //         var needsParent = uDom.nodeFromId('needs');
        //
        //         pendingChanges.push(function() {
        //             while (needsParent.firstChild) {
        //                 needsParent.removeChild(needsParent.firstChild);
        //             }
        //         });
        //
        //         needs.sort(function(need1, need2) {
        //             if (need1.time > need2.time) {
        //                 return -1;
        //             }
        //
        //             if (need1.time < need2.time) {
        //                 return 1;
        //             }
        //
        //             return 0;
        //         });
        //
        //         var createTender = function(need) {
        //             return function() {
        //                 registerAsyncCall(true);
        //                 messaging.send(
        //                     'adequa',
        //                     {
        //                         what: 'createTender',
        //                         need: need
        //                     },
        //                     function() {
        //                         registerAsyncCall(false);
        //                         render();
        //                     }
        //                 );
        //             };
        //         };
        //
        //         var destroyTender = function(tender) {
        //             return function() {
        //                 registerAsyncCall(true);
        //
        //                 messaging.send(
        //                     'adequa',
        //                     {
        //                         what: 'destroyTender',
        //                         needId: tender.need.id
        //                     },
        //                     function() {
        //                         registerAsyncCall(false);
        //                         render();
        //                     }
        //                 );
        //             };
        //         };
        //
        //         var displayNeed = function(need) {
        //
        //             return function() {
        //                 registerAsyncCall(true);
        //
        //                 var newNeedEl = document.createElement('li');
        //                 newNeedEl.textContent = need.title;
        //                 messaging.send(
        //                     'adequa',
        //                     {
        //                         what: 'fetchTenderForNeed',
        //                         need: need
        //                     },
        //                     function(tender) {
        //                         if (tender) {
        //                             newNeedEl.className = "active";
        //                             uDom(newNeedEl).on('click', destroyTender(tender));
        //                         } else {
        //                             uDom(newNeedEl).on('click', createTender(need));
        //                         }
        //                         pendingChanges.push(function() {
        //                             console.log("loop");
        //                             needsParent.appendChild(newNeedEl);
        //                         });
        //                         registerAsyncCall(false);
        //                     }
        //                 );
        //             };
        //
        //
        //         };
        //
        //         for (var need of needs) {
        //             displayNeed(need)();
        //         }
        //
        //         registerAsyncCall(false);
        //     }
        // );
    };

    render();

})();
