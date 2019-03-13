/* global Adequa */
"use strict";
Adequa.process.cookie = {};

Adequa.process.cookie.getProspectCookie = function (callback) {
    Adequa.API.cookies.getAll({name: "adequa-wait-for-return"}, function (cookies) {
        if (cookies[0]) return callback(cookies[0]);
        callback();
    });
};

Adequa.process.cookie.remove = function (cookie) {

    const url = "http" + (cookie.secure ? "s" : "") + "://" + (cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain) + cookie.path;

    Adequa.API.cookies.remove({"url": url, "name": cookie.name});
};

Adequa.process.cookie.sortByPurpose = function (cookies, callback) {
    let purposes = {};
    for (let cookie of cookies) {
        const domain = (Adequa.storage.cookiePurposes.default[Adequa.domain(cookie.domain.startsWith('.') ? cookie.domain.substr(1) : cookie.domain)] || {});
        let purpose = domain.purpose || 1;

        if (purpose === 'unknown') purpose = 1;

        if (!purposes[purpose]) purposes[purpose] = [];
        cookie.website = domain.website;
        purposes[purpose].push(cookie)
    }

    callback(purposes)
};

Adequa.process.cookie.getCurrentCookies = function (callback) {
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

Adequa.process.cookie.getCurrentDomains = function (cookies, callback) {
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
                cookie.active = currentDomains.indexOf(Adequa.domain(cookie.domain)) !== -1;
                return cookie;
            })
        );
    });
};

Adequa.process.cookie.getCookieCountByDomains = function(callback){
    Adequa.API.cookies.getAll({}, function (cookies) {
        Adequa.process.cookie.getCurrentDomains(cookies, function (cookies) {
            Adequa.process.cookie.sortByPurpose(cookies, function (cookies) {
                const result = {};
                Object.entries(cookies)
                    .forEach(purpose => {
                        purpose[1] = purpose[1]
                            .map(cookie => {
                                return {domain: Adequa.domain(cookie.domain), active: cookie.active, website: cookie.website}
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

Adequa.process.cookie.stripCookieHeaders = function(headers){
    return headers.filter(header => header.name.toLowerCase().indexOf("cookie") === -1);
};

Adequa.process.cookie.shouldDelete = function(url, tabId, initiator){
  console.log(url, Adequa.domain(initiator))
    if(Adequa.storage.userBrokenWebsites && Adequa.storage.userBrokenWebsites.indexOf(Adequa.domain(initiator)) !== -1) return false;
    if(tabId === -1) return true;
    if(!Adequa.storage.cookiePurposes) return false;
    const hostname = Adequa.domain(url);
    const website = (Adequa.storage.tabs[tabId] || {}).hostname;
    if(website === hostname) return false;

    const purpose = (((Adequa.storage.cookiePurposes[website] || Adequa.storage.cookiePurposes['default'])[hostname] || Adequa.storage.cookiePurposes['default'][hostname]) || {}).purpose || 'unknown';
    // const purpose = ((Adequa.storage.cookiePurposes['default'])[domain] || {}).purpose || '1';

    if(purpose === '1') return false;
    if(purpose === 'unknown') return false;
    if(purpose === 'deleted') return true;
    const allowedPurposes = Adequa.model.consent.cmp.getConsentData(website);
    const purposesToDelete = Adequa.storage.adequaPurposeList.map(purpose => purpose.id).filter(purposeId => allowedPurposes.indexOf(purposeId) === -1);

    return purposesToDelete.indexOf(parseInt(purpose)) !== -1;
};

Adequa.process.cookie.logCookies = function(headers, tabId, url){
    if(!Adequa.storage.tabs[tabId]) return;
    const cookies = headers.filter(header => header.name.toLowerCase().indexOf("set-cookie") !== -1).map(header => header.value.split('=')[0]);

    cookies.forEach(cookie => {
        Adequa.storage.tabs[tabId].cookies.push(cookie);
        Adequa.storage.tabs[tabId].domains.push(Adequa.domain(url));
    });

    Adequa.storage.tabs[tabId].cookies = Array.from(new Set(Adequa.storage.tabs[tabId].cookies));
    Adequa.storage.tabs[tabId].domains = Array.from(new Set(Adequa.storage.tabs[tabId].domains));
};
