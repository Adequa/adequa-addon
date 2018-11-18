'use strict';

vAPI.messaging.send('adequa', {
    what: 'isNotConfigured'
}, function(isNotConfigured){
    if(isNotConfigured === false)
        return;

    vAPI.messaging.send('adequa', {
        what: 'fetchInstallState'
    }, function (state) {
        const iframe = document.querySelector('iframe');
        if(!state) {
            iframe.setAttribute('src', 'installation-presentation.html');
            return;
        }

        if(state === 6) {
            vAPI.messaging.send('adequa', {what: 'firstInstallFinished'});
            return;
        }

        iframe.setAttribute('src', `installation.html#${state}`);
    });
});
