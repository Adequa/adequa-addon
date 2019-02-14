/* global Adequa */
"use strict";
Adequa.actions.cookie = {};

Adequa.actions.cookie.getProspectCookie = function (callback) {
    Adequa.API.cookies.getAll({name: "adequa-wait-for-return"}, function (cookies) {
        if (cookies[0]) return callback(cookies[0]);
        callback();
    });
};

Adequa.actions.cookie.remove = function (cookie) {

    const url = "http" + (cookie.secure ? "s" : "") + "://" + (cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain) + cookie.path;

    Adequa.API.cookies.remove({"url": url, "name": cookie.name});
};

Adequa.actions.cookie.sortByPurpose = function (cookies, callback) {
    let purposes = {};
    for (let cookie of cookies) {
        const domain = (Adequa.storage.cookiePurposes.default[cookie.domain.startsWith('.') ? cookie.domain.substr(1) : cookie.domain] || {});
        let purpose = domain.purpose || 1;

        if (purpose === 'unknown') purpose = 1;

        if (!purposes[purpose]) purposes[purpose] = [];
        cookie.website = domain.website;
        purposes[purpose].push(cookie)
    }

    callback(purposes)
};

Adequa.actions.cookie.getCurrentCookies = function (callback) {
    Adequa.API.tabs.query({
        active: true
    }, (tabs) => {
        const tab = tabs[0] || {};
        Adequa.API.cookies.getAll({}, function (cookies) {
            if (!Adequa.storage.tabs[tab.id])
                return callback(cookies.map(cookie => {
                    cookie.active = false;
                    return cookie;
                }));

            const currentCookies = Adequa.storage.tabs[tab.id].cookies;

            callback(
                cookies.map(cookie => {
                    cookie.active = currentCookies.indexOf(cookie.name) !== -1;
                    return cookie;
                })
            );
        });
    });
};

Adequa.actions.cookie.getCurrentDomains = function (cookies, callback) {
    Adequa.API.tabs.query({
        active: true
    }, (tabs) => {
        const tab = tabs[0] || {};
        if (!Adequa.storage.tabs[tab.id])
            return callback(cookies.map(cookie => {
                cookie.active = false;
                return cookie;
            }));

        const currentDomains = Adequa.storage.tabs[tab.id].domains;

        callback(
            cookies.map(cookie => {
                cookie.active = currentDomains.indexOf(Adequa.hostname(cookie.domain)) !== -1;
                return cookie;
            })
        );
    });
};

Adequa.actions.cookie.getCookieCountByDomains = function(callback){
    Adequa.API.cookies.getAll({}, function (cookies) {
        Adequa.actions.cookie.getCurrentDomains(cookies, function (cookies) {
            Adequa.actions.cookie.sortByPurpose(cookies, function (cookies) {
                const result = {};
                Object.entries(cookies)
                    .forEach(purpose => {
                        purpose[1] = purpose[1]
                            .map(cookie => {
                                return {domain: Adequa.hostname(cookie.domain), active: cookie.active, website: cookie.website}
                            })
                            .reduce((collector, item) => {
                                if (collector.has(item.domain)) {
                                    const current = collector.get(item.domain);
                                    current.count++;
                                    current.active = item.active || current.active;
                                    collector.set(item.domain, current)
                                } else {
                                    item.count = 1;
                                    collector.set(item.domain, item)
                                }
                                return collector;
                            }, new Map());
                        result[purpose[0]] = Array.from(purpose[1].values())
                            .sort((a, b) => a.domain.toString().toLowerCase().localeCompare(b.domain.toString().toLowerCase()));
                    });

                callback(result);
            });
        });
    });
};
