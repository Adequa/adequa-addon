/* global Adequa */
"use strict";
Adequa.actions.cookie = {};

Adequa.actions.cookie.optout = function (shouldRemoveCookies) {
    if (shouldRemoveCookies)
        removeYocCookies();

    addYocCookies();
};

Adequa.actions.cookie.logCookie = function (cookie) {
    Adequa.current.cookieList = Adequa.current.cookieList || [];
    cookie.date = Date.now();
    Adequa.current.cookieList.push(cookie);
    Adequa.storage.setCurrent({});
};

Adequa.actions.cookie.getProspectCookie = function (callback) {
    vAPI.cookies.getAll({}, function (cookies) {
        for (let cookie of cookies) {
            if (cookie.name === "adequa_prospect") {
                return callback(cookie);
            }
        }
        callback();
    });
};

const removeCookie = function (cookie) {
    const url = "http" + (cookie.secure ? "s" : "") + "://" + (cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain) +
        cookie.path;
    vAPI.cookies.remove({"url": url, "name": cookie.name});
    vAPI.cookies.set({"url": url, "name": cookie.name});
};

const removeYocCookies = function () {
    Adequa.actions.cookie.getAdsCookies(function (adsCookies) {
        for (let cookie of adsCookies) {
            removeCookie(cookie);
        }
    });
};

const addYocCookies = function () {
    for (let cookie of Adequa.current.yocCookies) {
        if (vAPI.firefox)
            cookie.storeId = "firefox-default";
        vAPI.cookies.set(cookie);
    }
};

Adequa.actions.cookie.getAdsCookies = function (callback) {
    let adsCookies = [];
    vAPI.cookies.getAll({}, function (cookies) {
        for (let cookie of Adequa.current.yocCookies) {
            for (let c of cookies) {
                if (((c.domain === cookie.domain) || (c.domain === '.'+cookie.domain)) && ((c.name !== cookie.name) || (c.name === cookie.name && c.value !== cookie.value))) {
                    adsCookies.push(c);
                }
            }
        }
        callback(adsCookies);
    });

};

Adequa.actions.cookie.getYocDomains = function (callback) {
    let domains = [];
    for (let cookie of Adequa.current.yocCookies) {
        const domain = cookie.domain.startsWith('.') ? cookie.domain.substring(1) : cookie.domain;
        if (domains.indexOf(domain) === -1) {
            domains.push(domain);
        }
    }
    callback(domains);
};
