'use strict';


vAPI.messaging.send('adequa', {
    what: 'isFirstInstall'
}, function(isFirstInstall){
    if(isFirstInstall === false)
        return;

    vAPI.messaging.send('adequa', {
        what: 'fetchInstallState'
    }, function (state) {
        const iframe = document.querySelector('iframe');

        switch (state) {
            case 1:
                iframe.setAttribute('src', 'installation-cookies.html');
                break;

            case 2:
                iframe.setAttribute('src', 'installation-ads.html');
                break;

            case 3:
                iframe.setAttribute('src', 'installation-themes.html');
                break;

            case 4:
                vAPI.messaging.send('adequa', {what: 'firstInstallFinished'});
                break;

            default:
                iframe.setAttribute('src', 'installation-presentation.html');
                break;
        }
    });
});
