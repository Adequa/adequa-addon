"use strict";
const env = 'dev';

let Adequa = {
    uri: env.match('dev') ? 'https://dev.admin-equa.com/' : env.match('prod') ? 'https://admin-equa.com/' : 'http://localhost:8000/',
    actions: {
        init: {},
        cookie: {},
        interface: {},
        navigation: {},
        page: {},
        request: {}
    }
};

Adequa.hostname = function (url) {
    if(!url)
        return false;

    let hostname = url;

    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0)
        hostname = match[2];

    let domain = hostname;

    if (hostname !== '') {
        let parts = hostname.split('.').reverse();

        if (parts !== null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostname.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }
    return domain;
};

Adequa.shouldRemoveCookie = function(cookie){
    Adequa.storage.cookieRules = Adequa.storage.cookieRules || {};
    const rules = Adequa.storage.cookieRules;

    const domain = Adequa.hostname(cookie.domain);
    if(!rules[domain]){
        Adequa.actions.cookie.updateCookieRules(cookie.domain);
        return Adequa.storage.cookieRules[domain];
    }
    return (rules[domain] || {}).disabled || false;
};

Adequa.getCookieRule = function(cookie){
    const rules = Adequa.storage.cookieRules;
    if(!rules) return false;

    const domain = Adequa.hostname(cookie.domain);

    return rules[domain] || false;
};
