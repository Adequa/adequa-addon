/* global Adequa */
"use strict";

Adequa.actions.cookie.updateUserRules = function (domain, blacklist) {
    domain = Adequa.hostname(domain);
    const rule = {};
    rule[domain] = {disabled: blacklist};
    Adequa.storage.setCurrent({userCookieRules: rule});
    Adequa.actions.cookie.updateCookieRules(domain);
};

Adequa.actions.cookie.updateAdequaRules = function (domain, rule) {
    domain = Adequa.hostname(domain);
    const newrule = {};
    newrule[domain] = rule;
    Adequa.storage.setCurrent({adequaCookieRules: newrule});
    Adequa.actions.cookie.updateCookieRules(domain);
};

Adequa.actions.cookie.updateCookieRules = function (domain) {
    domain = Adequa.hostname(domain);
    const adequaRules = Adequa.current.adequaCookieRules || {};
    const adequaRule = adequaRules[domain] || false;

    const userRules = Adequa.current.userCookieRules || {};
    const userRule = userRules[domain] || false;


    const rule = {};
    rule[domain] = Object.assign({}, adequaRule, userRule);
    // {
    //     disabled: (userRule || adequaRule).disabled,
    //         type: (userRule || adequaRule).type
    // }
    Adequa.storage.setCurrent({cookieRules: rule});
};
