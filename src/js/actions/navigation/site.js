/* global Adequa */

"use strict";
Adequa.actions.site = {};


Adequa.actions.site.updateUserRules = function (hostname, support) {
    const rule = {};
    rule[hostname] = {support};
    Adequa.storage.setCurrent({userSiteRules: rule});
    Adequa.actions.site.updateSiteRules(hostname);
};

Adequa.actions.site.updateAdequaRules = function (hostname, support) {
    const rule = {};
    rule[hostname] = {support};
    Adequa.storage.setCurrent({adequaSiteRules: rule});
    Adequa.actions.site.updateSiteRules(hostname);
};

Adequa.actions.site.updateSiteRules = function (hostname) {
    const adequaRules = Adequa.current.adequaSiteRules || {};
    const adequaRule = adequaRules[hostname] || false;

    const userRules = Adequa.current.userSiteRules || {};
    const userRule = userRules[hostname] || false;


    const rule = {};
    rule[hostname] = {
        support: (userRule || adequaRule).support
    };
    Adequa.storage.setCurrent({siteRules: rule});

    if (µBlock.getNetFilteringSwitch('https://' + hostname) && rule[hostname].support) {
        µBlock.toggleNetFilteringSwitch('https://' + hostname);
    } else if (!rule[hostname].support) {
        µBlock.toggleNetFilteringSwitch('https://' + hostname);
    }
};
