Adequa.event = {};

const pageEventHandler = function (request, sender, callback) {
    switch (request.what) {
        case 'getConsent':
            Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function (message) {
                message.what = "consentInfos";
                callback(message);
            });

            return true;
        case 'setSettings':
            for(const [_, setting] of Object.entries(request.settings)){
                setting.id.website_id = Adequa.hostname((sender.tab || {}).url || "nourl");
                Adequa.model.consent.setSetting(setting);
            }
            Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function(message){
                message.what = "requiredConsentInfos";
                callback(message);
            });
            return true;
        case 'sendVendorConsents':
            console.log(request)
            for(const purpose in request.vendorConsents.purposeConsents){
                Adequa.model.consent.setSetting({
                    id: {
                            website_id: Adequa.hostname((sender.tab || {}).url || "nourl"),
                            purpose_id: purpose,
                            vendor_id: "all"
                        },
                    value: request.vendorConsents.purposeConsents[purpose] ? -1 : 1
                })
            }
            for(const vendor in request.vendorConsents.vendorConsents){
                Adequa.model.consent.setSetting({
                    id: {
                            website_id: Adequa.hostname((sender.tab || {}).url || "nourl"),
                            purpose_id: "all",
                            vendor_id: vendor
                        },
                    value: request.vendorConsents.vendorConsents[vendor] ? -1 : 1
                })
            }
            return;
        default:
            console.log('Page event not handled : ' + request.what);
            break;
    }
};

const backEventHandler = function (request, sender, callback) {
    switch (request.what) {
        case 'setSetting':
            Adequa.model.consent.setSetting(request.setting);

            Adequa.model.consent.cmp.getConsentData(Adequa.hostname((sender.tab || {}).url || "nourl"), function(message){
                message.what = "consentInfos";
                Adequa.actions.tabs.sendAllTabs(message);
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
        return pageEventHandler(request, sender, callback);
    } else {
        return backEventHandler(request, sender, callback);
    }
};

Adequa.event.emit = function (request, callback) {
    Adequa.event.handler(request, {}, callback)
};

Adequa.API.onMessage(Adequa.event.handler);
