"use strict";
(function(){
    const stats = document.querySelector('label');

    stats.addEventListener('click', function(){
        vAPI.messaging.send('adequa', {
            what: 'setSendStatistics',
            accept: stats.checked
        });
    });
})();
