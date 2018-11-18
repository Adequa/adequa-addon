'use strict';
const messaging = vAPI.messaging;

setTimeout(function(){
    document.body.style.opacity = '1';
}, 100);

const link = document.querySelector('footer a');

const onNextScreen = function(e){
    e.preventDefault();

    document.body.style.opacity = '0';

    messaging.send('adequa', {
        what: 'saveInstallState',
        state: 1
    });

    setTimeout(function(){
        location.href = 'installation-cookies.html';
    }, 500);
};
link.addEventListener('click', onNextScreen);
