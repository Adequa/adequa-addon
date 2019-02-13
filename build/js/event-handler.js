Adequa.event = {};

const pageEventHandler = function (msg, port) {
    const sender = port.sender || {};
    switch (msg.what) {
        case 'getConsent':
            Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function (consent) {
                port.postMessage({what: "consent", requestId: msg.requestId, consent});
            });
            return true;
        case 'getDimensions':
            Adequa.model.consent.cmp.getConsentData("all", (consent) => {
                const purposes = [];
                for (const id of consent.allowedPurposes) {
                    purposes.push(Adequa.storage.adequaPurposeList[id - 1].shortname);
                }
                let defaultAllowedPurposes = purposes.join(", ");
                if (defaultAllowedPurposes === "") defaultAllowedPurposes = "Aucun";

                const d = new Date(Adequa.storage.installDate);
                const installDate = (d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2));

                const customDimensions = {
                    "cd2": defaultAllowedPurposes,
                    "cd3": installDate
                };

                port.postMessage({what: "dimensions", requestId: msg.requestId, dimensions: customDimensions});
            });

            return true;
        // case 'getVendorConsents':
        //     Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function (consent) {
        //         const vendorConsents = {};
        //         const purposeConsents = {};
        //
        //         if (!(msg.vendorIds && msg.vendorIds.length > 0))
        //             msg.vendorIds = Adequa.storage.vendorList.map(vendor => vendor.id);
        //
        //         for (const id of msg.vendorIds)
        //             vendorConsents[id] = consent.allowedVendors.indexOf(id) !== -1;
        //
        //         for (const id of Adequa.storage.purposeList.map(purpose => purpose.id))
        //             purposeConsents[id] = consent.allowedPurposes.indexOf(id) !== -1;
        //
        //         port.postMessage({what: "vendorConsents", requestId: msg.requestId, vendorConsents: {
        //                 metadata: consent.consentString,
        //                 gdprApplies: true,
        //                 hasGlobalScope: false,
        //                 purposeConsents: consent.purposeConsents,
        //                 vendorConsents: consent.vendorConsents,
        //             }});
        //     });
        //     return true;
        // case 'getConsentData':
        //     Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function (consent) {
        //         port.postMessage({what: "consentData", requestId: msg.requestId, consentData: {
        //                 consentData: consent.consentString,
        //                 gdprApplies: true,
        //                 hasGlobalScope: false,
        //             }});
        //     });
        //     return true;
        // case 'setSettings':
        //     for (const [_, setting_id] of Object.entries(msg.settings)) {
        //         const setting = {id: setting_id, value: -1};
        //         setting.id.website_id = Adequa.hostname((sender.tab || {}).url || "nourl");
        //         Adequa.model.consent.setSetting(setting);
        //     }
        //     port.postMessage({requestId: msg.requestId});
        //     return true;
        // case 'getSettings':
        //     const settings = Adequa.model.consent.getSettings({website_id: Adequa.hostname((sender.tab || {}).url || "nourl")});
        //     port.postMessage({what: "settings", requestId: msg.requestId, settings});
        //     return;
        case 'setConsent':
            Adequa.model.consent.setConsent(msg.allowedPurposes, msg.allowedVendors, (sender.tab || {}).url || "nourl");
            return;
        // case 'sendVendorConsents':
        //     for (const purpose in msg.vendorConsents.purposeConsents) {
        //         Adequa.model.consent.setSetting({
        //             id: {
        //                 website_id: Adequa.hostname((sender.tab || {}).url || "nourl"),
        //                 purpose_id: purpose,
        //                 vendor_id: "all"
        //             },
        //             value: msg.vendorConsents.purposeConsents[purpose] ? -1 : 1
        //         })
        //     }
        //     for (const vendor in msg.vendorConsents.vendorConsents) {
        //         Adequa.model.consent.setSetting({
        //             id: {
        //                 website_id: Adequa.hostname((sender.tab || {}).url || "nourl"),
        //                 purpose_id: "all",
        //                 vendor_id: vendor
        //             },
        //             value: msg.vendorConsents.vendorConsents[vendor] ? -1 : 1
        //         })
        //     }
        //     return;
        case 'getSiteViews':
            const hostname = Adequa.hostname((sender.tab || {}).url);
            if (!hostname) port.postMessage({what: "siteViews", views: 0});
            else {
                port.postMessage({
                    what: "siteViews",
                    requestId: msg.requestId,
                    views: (Adequa.storage.siteViews || {})[hostname] || 0
                });
            }
            return;
        default:
            console.log('Page event not handled : ' + msg.what);
            break;
    }
};

const backEventHandler = function (request, sender, callback) {
    switch (request.what) {
        case 'openModal':
            Adequa.actions.analytics.sendAnonymousEvent("nourl", 'basic', 'addon_open');
            Adequa.API.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, (tabs) => {
                const tab = tabs[0] || {};

                Adequa.actions.tabs.emit(tab, {what: "openModal"});
                callback();
            });
            return true;
        case 'addToWhitelist':
            Adequa.API.tabs.query({
                active: true
            }, (tabs) => {
                const tab = tabs[0] || {};
                if (!tab.url) return;
                Adequa.setStorage({userBrokenWebsites: [Adequa.hostname(tab.url)]});
                fetch(Adequa.uri + 'api/website/broken', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        url: tab.url,
                        hostname: Adequa.hostname(tab.url)
                    })
                });
                callback({
                    hostname: Adequa.hostname(tab.url),
                    whitelisted: Adequa.storage.userBrokenWebsites.indexOf(Adequa.hostname(tab.url)) !== -1
                })
            });
            return true;
        case 'removeFromWhitelist':
            Adequa.API.tabs.query({
                active: true
            }, (tabs) => {
                const tab = tabs[0] || {};
                if (!tab.url) return;
                let userBrokenWebsites = new Set(Adequa.storage.userBrokenWebsites);
                userBrokenWebsites.delete(Adequa.hostname(tab.url));
                userBrokenWebsites = Array.from(userBrokenWebsites);
                Adequa.storage.userBrokenWebsites = userBrokenWebsites;
                Adequa.setStorage({});

                callback({
                    hostname: Adequa.hostname(tab.url),
                    whitelisted: Adequa.storage.userBrokenWebsites.indexOf(Adequa.hostname(tab.url)) !== -1
                })
            });
            return true;
        case 'getCurrentWebsite':
            Adequa.API.tabs.query({
                active: true
            }, (tabs) => {
                const tab = tabs[0] || {};
                if (!tab.url || !Adequa.storage.userBrokenWebsites) return;
                callback({
                    hostname: Adequa.hostname(tab.url),
                    whitelisted: Adequa.storage.userBrokenWebsites.indexOf(Adequa.hostname(tab.url)) !== -1
                })
            });
            return true;
        case 'pageView':
            // Adequa.actions.stats.newView(request.url);
            return;
        case 'getCookiePurposes':
            callback(Adequa.storage.adequaPurposeList);
            return true;
        case 'getCookieDomainsByPurpose':
            Adequa.actions.cookie.getCookieCountByDomains(callback);
            return true;
        case 'getCookies':
            Adequa.actions.cookie.getCurrentCookies(callback);
            return true;
        case 'getCookiesByPurpose':
            Adequa.actions.cookie.getCurrentCookies(function (cookies) {
                Adequa.actions.cookie.sortByPurpose(cookies, callback);
            });
            return true;
        case 'deleteCookiesByPurpose':
            if (request.purpose) {
                Adequa.actions.cookie.getCurrentCookies(function (cookies) {
                    Adequa.actions.cookie.sortByPurpose(cookies, function (cookies) {
                        for (const cookie of cookies[request.purpose])
                            Adequa.actions.cookie.remove(cookie);

                        Adequa.actions.analytics.sendAnonymousEvent("nourl", 'tracking', 'addon_cookie_delete', Adequa.storage.adequaPurposeList[request.purpose-1].shortname, cookies.length);
                        callback();
                    });
                });
            }
            return true;
        case 'deleteCookiesByDomain':
            if (request.domain) {
                Adequa.API.cookies.getAll({domain: request.domain}, cookies => {
                    cookies.forEach(Adequa.actions.cookie.remove);
                    Adequa.actions.analytics.sendAnonymousEvent("nourl", 'tracking', 'addon_cookie_delete', request.domain, cookies.length);
                    callback();
                });
            }
            return true;
        case 'setSetting':
            Adequa.model.consent.setSetting(request.setting);
            Adequa.updateUninstallUrl();
            Adequa.API.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, (tabs) => {
                const tab = tabs[0] || {};

                Adequa.actions.analytics.sendAnonymousEvent((tab || {}).url || "nourl", 'consent', 'default_parameter_change', Adequa.storage.adequaPurposeList[request.setting.id.purpose_id-1].shortname, request.setting.value === 1 ? 0 : 1);

                Adequa.model.consent.cmp.getConsentData(Adequa.hostname((tab || {}).url || "nourl"), function (consent) {
                    Adequa.actions.tabs.emitAllTabs({what: "consent", consent});
                });
            });
            return;
        case 'getWebsiteId':
            Adequa.API.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, (tabs) => {
                const tab = tabs[0] || {};
                callback(Adequa.hostname(tab.url || "nourl"));
            });
            return true;
        case 'getDefaultPurposeSettings':
            callback(Adequa.model.consent.getAllSettings({
                    website_id: "all",
                    vendor_id: "all"
                },
                "purpose_id") || {});
            return;
        case 'getWebsitePurposeSettings':
            Adequa.API.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, (tabs) => {
                const tab = tabs[0] || {};
                const websiteSettings = Adequa.model.consent.getAllSettings({website_id: Adequa.hostname(tab.url || "nourl")}, "purpose_id") || {};

                const settings = Adequa.model.consent.getAllSettings({
                        website_id: "all",
                        vendor_id: "all"
                    },
                    "purpose_id") || {};

                for (const [_, setting] of Object.entries(websiteSettings))
                    settings[setting.id["purpose_id"]] = setting;

                callback(settings);
            });
            return true;
        case 'getDefaultVendorSettings':
            callback(Adequa.model.consent.getAllSettings({
                    website_id: "all",
                    purpose_id: "all"
                },
                "vendor_id") || {});
            return;
        case 'getWebsiteVendorSettings':
            Adequa.API.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, (tabs) => {
                const tab = tabs[0] || {};
                const websiteSettings = Adequa.model.consent.getAllSettings({website_id: Adequa.hostname(tab.url || "nourl")}, "vendor_id") || {};

                const settings = Adequa.model.consent.getAllSettings({
                        website_id: "all",
                        purpose_id: "all"
                    },
                    "vendor_id") || {};

                for (const [_, setting] of Object.entries(websiteSettings))
                    settings[setting.id["vendor_id"]] = setting;

                callback(settings);
            });
            return true;
        case 'getPurposeList':
            callback(Adequa.storage.adequaPurposeList);
            return;
        case 'getVendorList':
            callback(Adequa.storage.vendorList);
            return;
        case 'fetchCookieDomainBlocked':
            const domainBlocked = [];
            for (const domain in Adequa.storage.cookieRules) {
                if (Adequa.storage.cookieRules[domain].disabled)
                    domainBlocked.push(domain);
            }
            callback(domainBlocked);
            return;
        case 'adequaStart':
            Adequa.actions.init.start();
            return;
        case 'disableCookieType':
            for (const rule in Adequa.storage.adequaCookieRules) {
                if (Adequa.storage.adequaCookieRules[rule].type === request.type)
                    Adequa.actions.cookie.updateUserRules(rule, request.disabled);
            }
            return;
        case 'updateUserCookieRules':
            if (request.domain)
                Adequa.actions.cookie.updateUserRules(request.domain, !request.accept);
            if (request.type)
                Adequa.actions.cookie.updateTypeRules(request.type, !request.accept);
            return;
        case 'fetchTypeCookieRules':
            callback(Adequa.storage.typeCookieRules || {});
            return;
        case 'cookieChanged':
            if (request.changeInfo.removed) return;

            if (Adequa.shouldRemoveCookie(request.changeInfo.cookie))
                Adequa.actions.cookie.remove(request.changeInfo.cookie);
            else {
                Adequa.actions.cookie.logCookie(request.changeInfo.cookie);
            }
            return;
        case 'getCookieHistoric':
            callback(Adequa.storage.cookieRules);
            return;
        case 'getCookieByType':
            const cookieByType = {};

            for (const hostname in Adequa.storage.cookieRules) {
                const rule = Adequa.storage.cookieRules[hostname];
                rule.domain = hostname;
                if (!rule.type) {
                    if (!cookieByType["non categorisé"])
                        cookieByType["non categorisé"] = [];
                    cookieByType["non categorisé"].push(rule);
                } else {
                    if (!cookieByType[rule.type])
                        cookieByType[rule.type] = [];
                    cookieByType[rule.type].push(rule);
                }
            }
            callback(cookieByType);
            return;
        case 'openTab':
            Adequa.API.tabs.open({url: request.url});
            return;
        default:
            console.log('Event not handled : ' + request.what);
            break;
    }
};

Adequa.event.handler = function (request, sender, callback) {
    if (sender.tab) {
        // return pageEventHandler(request, sender, callback);
    } else {
        return backEventHandler(request, sender, callback);
    }
};

Adequa.event.emit = function (request, callback) {
    Adequa.event.handler(request, {}, callback)
};

Adequa.API.onMessage(Adequa.event.handler);

Adequa.API.runtime.onConnect.addListener(function (port) {
    if (port.name === "contentscript") {
        port.onMessage.addListener(function (msg) {
            console.log(msg)
            pageEventHandler(msg, port);
        });

        const hostname = Adequa.hostname(((port.sender || {}).tab || {}).url);
        if (!hostname) return port.postMessage({what: "siteViews", views: 0});
        const siteViews = Adequa.storage.siteViews || {};
        siteViews[hostname] = (siteViews[hostname] || 0) + 1;
        Adequa.setStorage({siteViews});
    }
});
