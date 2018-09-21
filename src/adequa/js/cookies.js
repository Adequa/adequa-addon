/* global Adequa */
"use strict";
Adequa.cookies = {};

Adequa.cookies.optout = function (shouldRemoveCookies) {
    if (shouldRemoveCookies)
        removeYocCookies();

    addYocCookies();
};

Adequa.cookies.getProspectCookie = function(callback){
    vAPI.cookies.getAll({}, function (cookies){
        for(let cookie of cookies){
            if(cookie.name === "adequa_prospect"){
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
};

const removeYocCookies = function () {
    Adequa.cookies.getAdsCookies(function(adsCookies){
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

Adequa.cookies.getAdsCookies = function(callback){
    let adsCookies = [];
    vAPI.cookies.getAll({}, function(cookies){
        for (let cookie of Adequa.current.yocCookies) {
            for (let c of cookies) {
                if(c.domain === cookie.domain){
                    adsCookies.push(c);
                }
            }
        }
        callback(adsCookies);
    });

};

const onCookieChanged = function (changeInfo) {
    if (changeInfo.removed)
        return;

    if (!(changeInfo.cookie.name && changeInfo.cookie.domain))
        return;

    const hostname = changeInfo.cookie.domain.split('.').slice(-2).join('.');
    if (!Adequa.isPartner(hostname))
        return;

    const hostnameWhitelist = ((Adequa.current.cookieWhitelist || {})[hostname] || []);

    if (hostnameWhitelist.indexOf(changeInfo.cookie.name) === -1)
        removeCookie(changeInfo.cookie);
};

vAPI.cookies.onChanged.addListener(onCookieChanged);
