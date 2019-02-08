/* global Adequa */
"use strict";

Adequa.actions.cookie.updateUserRules = function (domain, blacklist) {
    domain = Adequa.hostname(domain);
    const rule = {};
    rule[domain] = {disabled: blacklist};
    Adequa.storage.userCookieRules = rule;
    Adequa.actions.cookie.updateCookieRules(domain);
};

Adequa.actions.cookie.updateTypeRules = function (type, blacklist) {
    const rule = Adequa.storage.typeCookieRules || {};
    rule[type] = {disabled: blacklist};
    Adequa.storage.typeCookieRules = rule;
    Adequa.actions.cookie.updateTypeCookieRules(type);
};

Adequa.actions.cookie.updateAdequaRules = function (domain, rule) {
    domain = Adequa.hostname(domain);
    const newrule = {};
    newrule[domain] = rule;
    Adequa.storage.adequaCookieRules = newrule;
    Adequa.actions.cookie.updateCookieRules(domain);
};

Adequa.actions.cookie.updateTypeCookieRules = function (type) {
    Adequa.storage.userCookieRules = Adequa.storage.userCookieRules || {};
    Adequa.storage.typeCookieRules = Adequa.storage.typeCookieRules || {};
    for (const domain in Adequa.storage.cookieRules) {
        const currentRule = Adequa.storage.cookieRules[domain] || {};
        const userRule = Adequa.storage.userCookieRules[domain] || {};
        const typeRule = Adequa.storage.typeCookieRules[type] || {};

        Adequa.storage.cookieRules[domain] = Object.assign({}, currentRule, typeRule, userRule);
    }
    Adequa.setStorage({});
};

Adequa.actions.cookie.updateCookieRules = function (domain) {
    domain = Adequa.hostname(domain);
    if (!domain) return;
    const adequaRules = Adequa.storage.adequaCookieRules || {};
    const adequaRule = adequaRules[domain] || false;

    const userRules = Adequa.storage.userCookieRules || {};
    const userRule = userRules[domain] || false;

    const typeRules = Adequa.storage.typeCookieRules || {};
    const typeRule = typeRules[(adequaRule || {}).type || "non categorisé"] || false;

    Adequa.storage.cookieRules[domain] = Object.assign({}, adequaRule, typeRule, userRule);
    Adequa.setStorage({});
};
