Adequa.event = {};

const pageEventHandler = function (msg, port) {
    const sender = port.sender || {};
    switch (msg.what) {
        case 'getConsent':
            Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function (consent) {
                port.postMessage({what: "consent", requestId: msg.requestId, consent});
            });
            return true;
        case 'getVendorConsents':
            Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function (consent) {
                const vendorConsents = {};
                const purposeConsents = {};

                if (!(msg.vendorIds && msg.vendorIds.length > 0))
                    msg.vendorIds = Adequa.storage.vendorList.map(vendor => vendor.id);

                for (const id of msg.vendorIds)
                    vendorConsents[id] = consent.allowedVendors.indexOf(id) !== -1;

                for (const id of Adequa.storage.purposeList.map(purpose => purpose.id))
                    purposeConsents[id] = consent.allowedPurposes.indexOf(id) !== -1;

                port.postMessage({what: "vendorConsents", requestId: msg.requestId, vendorConsents: {
                        metadata: consent.consentString,
                        gdprApplies: true,
                        hasGlobalScope: false,
                        purposeConsents: consent.purposeConsents,
                        vendorConsents: consent.vendorConsents,
                    }});
            });
            return true;
        case 'getConsentData':
            Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function (consent) {
                port.postMessage({what: "consentData", requestId: msg.requestId, consentData: {
                        consentData: consent.consentString,
                        gdprApplies: true,
                        hasGlobalScope: false,
                    }});
            });
            return true;
        case 'setSettings':
            for (const [_, setting_id] of Object.entries(msg.settings)) {
                const setting = {id: setting_id, value: -1};
                setting.id.website_id = Adequa.hostname((sender.tab || {}).url || "nourl");
                Adequa.model.consent.setSetting(setting);
            }
            port.postMessage({requestId: msg.requestId});
            return true;
        case 'getSettings':
            const settings = Adequa.model.consent.getSettings({website_id: Adequa.hostname((sender.tab || {}).url || "nourl")});
            port.postMessage({what: "settings", requestId: msg.requestId, settings});
            return;
        case 'setConsent':
                Adequa.model.consent.setConsentString(msg.consentString, (sender.tab || {}).url || "nourl");
            return;
        case 'sendVendorConsents':
            for (const purpose in msg.vendorConsents.purposeConsents) {
                Adequa.model.consent.setSetting({
                    id: {
                        website_id: Adequa.hostname((sender.tab || {}).url || "nourl"),
                        purpose_id: purpose,
                        vendor_id: "all"
                    },
                    value: msg.vendorConsents.purposeConsents[purpose] ? -1 : 1
                })
            }
            for (const vendor in msg.vendorConsents.vendorConsents) {
                Adequa.model.consent.setSetting({
                    id: {
                        website_id: Adequa.hostname((sender.tab || {}).url || "nourl"),
                        purpose_id: "all",
                        vendor_id: vendor
                    },
                    value: msg.vendorConsents.vendorConsents[vendor] ? -1 : 1
                })
            }
            return;
        case 'getSiteViews':
            const hostname = Adequa.hostname((sender.tab || {}).url);
            if(!hostname) port.postMessage({what: "siteViews", views: 0});
            else {
                port.postMessage({what: "siteViews", requestId: msg.requestId, views: (Adequa.storage.siteViews || {})[hostname] || 0});
            }
            return;
        default:
            console.log('Page event not handled : ' + msg.what);
            break;
    }
};

const backEventHandler = function (request, sender, callback) {
    switch (request.what) {
        case 'setSetting':
            Adequa.model.consent.setSetting(request.setting);
            Adequa.API.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, (tabs) => {
                const tab = tabs[0] || {};

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
            callback(Adequa.storage.purposeList);
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

Adequa.API.runtime.onConnect.addListener(function(port) {
    if(port.name === "contentscript"){
        port.onMessage.addListener(function(msg){
            console.log(msg)
            pageEventHandler(msg, port);
        });

        const hostname = Adequa.hostname(((port.sender || {}).tab || {}).url);
        if(!hostname) return port.postMessage({what: "siteViews", views: 0});
        const siteViews = Adequa.storage.siteViews || {};
        siteViews[hostname] = (siteViews[hostname] || 0) + 1;
        Adequa.setStorage({siteViews});
    }
});
