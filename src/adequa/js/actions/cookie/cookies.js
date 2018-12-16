/* global Adequa */
"use strict";
Adequa.actions.cookie = {};

Adequa.actions.cookie.logCookie = function (cookie) {
    Adequa.current.cookieList = Adequa.current.cookieList || [];
    cookie.date = Date.now();
    Adequa.current.cookieList.push(cookie);
    Adequa.storage.setCurrent({});
};

Adequa.actions.cookie.getProspectCookie = function (callback) {
    vAPI.cookies.getAll({}, function (cookies) {
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
    if(!Array.isArray(Adequa.current.cookieRemovedList)) Adequa.current.cookieRemovedList = [];

    Adequa.current.cookieRemovedList.push(Object.assign({}, cookie));

    const url = "http" + (cookie.secure ? "s" : "") + "://" + (cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain) +
        cookie.path;
    cookie.url = url;
    cookie.value = "";
    delete cookie.session;
    delete cookie.hostOnly;
    vAPI.cookies.remove({"url": url, "name": cookie.name});
    vAPI.cookies.set(cookie);
};
