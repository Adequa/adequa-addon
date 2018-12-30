/* global Adequa */
"use strict";

Adequa.actions.cookie.updateUserRules = function (domain, blacklist) {
    domain = Adequa.hostname(domain);
    const rule = {};
    rule[domain] = {disabled: blacklist};
    Adequa.current.userCookieRules = rule;
    Adequa.actions.cookie.updateCookieRules(domain);
};

Adequa.actions.cookie.updateTypeRules = function (type, blacklist) {
    const rule = Adequa.current.typeCookieRules || {};
    rule[type] = {disabled: blacklist};
    Adequa.current.typeCookieRules = rule;
    Adequa.actions.cookie.updateTypeCookieRules(type);
};

Adequa.actions.cookie.updateAdequaRules = function (domain, rule) {
    domain = Adequa.hostname(domain);
    const newrule = {};
    newrule[domain] = rule;
    Adequa.current.adequaCookieRules = newrule;
    Adequa.actions.cookie.updateCookieRules(domain);
};

Adequa.actions.cookie.updateTypeCookieRules = function (type) {
    Adequa.current.userCookieRules = Adequa.current.userCookieRules || {};
    Adequa.current.typeCookieRules = Adequa.current.typeCookieRules || {};
    for (const domain in Adequa.current.cookieRules) {
        const currentRule = Adequa.current.cookieRules[domain] || {};
        const userRule = Adequa.current.userCookieRules[domain] || {};
        const typeRule = Adequa.current.typeCookieRules[type] || {};

        Adequa.current.cookieRules[domain] = Object.assign({}, currentRule, typeRule, userRule);
    }
    Adequa.storage.setCurrent({});
};

Adequa.actions.cookie.updateCookieRules = function (domain) {
    domain = Adequa.hostname(domain);
    if (!domain) return;
    const adequaRules = Adequa.current.adequaCookieRules || {};
    const adequaRule = adequaRules[domain] || false;

    const userRules = Adequa.current.userCookieRules || {};
    const userRule = userRules[domain] || false;

    const typeRules = Adequa.current.typeCookieRules || {};
    const typeRule = typeRules[(adequaRule || {}).type || "non categorisé"] || false;

    Adequa.current.cookieRules[domain] = Object.assign({}, adequaRule, typeRule, userRule);
    Adequa.storage.setCurrent({});
};
