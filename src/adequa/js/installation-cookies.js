'use strict';
const messaging = vAPI.messaging;

setTimeout(function(){
    document.body.style.opacity = '1';
}, 100);

const cookies = document.querySelector('#cookies');
const link = document.querySelector('footer a');
const companies = document.querySelector('#companies');

messaging.send('adequa', {
    what: 'getNbAdsCookies'
}, function(nbAdsCookies){
    let number = 0;
    const timer = 3000 / nbAdsCookies;
    const interval = setInterval(function() {
        cookies.innerText = number + '';
        if (number >= nbAdsCookies) clearInterval(interval);
        number++;
    }, timer);
});

messaging.send('adequa', {
    what: 'getNbCompanies'
}, function(nbCompanies){
    let number = 0;
    const timer = 3000 / nbCompanies;
    const interval = setInterval(function() {
        companies.innerText = number + '';
        if (number >= nbCompanies) clearInterval(interval);
        number++;
    }, timer);
});

const onNextScreen = function(e){
    e.preventDefault();

    document.body.style.opacity = '0';

    messaging.send('adequa', {what: 'cookiesOptout'});

    messaging.send('adequa', {
        what: 'saveInstallState',
        state: 2
    });

    setTimeout(function(){
        location.href = 'installation-ads.html';
    }, 500);
};
link.addEventListener('click', onNextScreen);
