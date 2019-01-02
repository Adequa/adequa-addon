/* global Adequa */
"use strict";
Adequa.actions.cookie = {};

Adequa.actions.cookie.logCookie = function (cookie) {
    Adequa.storage.cookieList = Adequa.storage.cookieList || [];
    cookie.date = Date.now();
    Adequa.storage.cookieList.push(cookie);
    Adequa.setStorage({});
};

Adequa.actions.cookie.getProspectCookie = function (callback) {
    Adequa.API.cookies.getAll({}, function (cookies) {
        for (let cookie of cookies) {
            if (cookie.name === "adequa-hasadblock") {
                return callback(cookie);
            }
        }
        callback();
    });
};

Adequa.actions.cookie.remove = function (cookie) {
    if(cookie.value === "") return;
    if(!Array.isArray(Adequa.storage.cookieRemovedList)) Adequa.storage.cookieRemovedList = [];

    Adequa.storage.cookieRemovedList.push(Object.assign({}, cookie));

    const url = "http" + (cookie.secure ? "s" : "") + "://" + (cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain) +
        cookie.path;
    cookie.url = url;
    cookie.value = "";
    delete cookie.session;
    delete cookie.hostOnly;
    Adequa.API.cookies.remove({"url": url, "name": cookie.name});
    Adequa.API.cookies.set(cookie);
};
