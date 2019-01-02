/* global Adequa */

"use strict";
Adequa.actions.site = {};


Adequa.actions.site.updateUserRules = function (hostname, support) {
    const rule = {};
    rule[hostname] = {support};
    Adequa.setStorage({userSiteRules: rule});
    Adequa.actions.site.updateSiteRules(hostname);
};

Adequa.actions.site.updateAdequaRules = function (hostname, support) {
    const rule = {};
    rule[hostname] = {support};
    Adequa.setStorage({adequaSiteRules: rule});
    Adequa.actions.site.updateSiteRules(hostname);
};

Adequa.actions.site.updateSiteRules = function (hostname) {
    const adequaRules = Adequa.storage.adequaSiteRules || {};
    const adequaRule = adequaRules[hostname] || false;

    const userRules = Adequa.storage.userSiteRules || {};
    const userRule = userRules[hostname] || false;


    const rule = {};
    rule[hostname] = {
        support: (userRule || adequaRule).support
    };
    Adequa.setStorage({siteRules: rule});

    if (µBlock.getNetFilteringSwitch('https://' + hostname) && rule[hostname].support) {
        µBlock.toggleNetFilteringSwitch('https://' + hostname);
    } else if (!rule[hostname].support) {
        µBlock.toggleNetFilteringSwitch('https://' + hostname);
    }
};
