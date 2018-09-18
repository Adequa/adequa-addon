/* global Adequa */
"use strict";
Adequa.cookies = {};

Adequa.cookies.optout = function (shouldRemoveCookies) {
    if (shouldRemoveCookies)
        removeYocCookies();

    addYocCookies();
};

const removeCookie = function (cookie) {
    const url = "http" + (cookie.secure ? "s" : "") + "://" + (cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain) +
        cookie.path;
    vAPI.cookies.remove({"url": url, "name": cookie.name});
};

const removeYocCookies = function () {
    for (let cookie of Adequa.current.yocCookies) {
        vAPI.cookies.getAll({domain: cookie.domain}, function(cookies) {
            for (let c of cookies) {
                removeCookie(c);
            }
        });
    }
};

const addYocCookies = function () {
    for (let cookie of Adequa.current.yocCookies) {
        if (vAPI.firefox)
            cookie.storeId = "firefox-default";
        vAPI.cookies.set(cookie);
    }
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
