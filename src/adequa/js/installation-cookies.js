'use strict';
const messaging = vAPI.messaging;

const cookies = document.querySelector('#cookies');
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
