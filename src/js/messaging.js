Adequa.messaging = {};

const pageMessaging = function (request, sender, callback) {
    switch (request.what) {
        case 'getConsent':
            const message = Adequa.actions.consent.cmp.getConsentData(Adequa.getWebsiteId((sender.tab || {}).url || "nourl"));
            message.what = "consentInfos";
            callback(message);
            return;
        case 'setConsent':
            for(const purpose of request.purposeList){
                const setting = {
                    id: {
                        website_id: Adequa.getWebsiteId((sender.tab || {}).url || "nourl"),
                        vendor_id: "all",
                        purpose_id: purpose
                    },
                    value: -1
                };
                Adequa.actions.consent.setSetting(setting);
            }
            const msg = Adequa.actions.consent.cmp.getConsentData(Adequa.getWebsiteId((sender.tab || {}).url || "nourl"));
            msg.what = "requiredConsentInfos";
            callback(msg);
            return;
        default:
            console.log('Page event not handled : ' + request.what);
            break;
    }
};

const messaging = function (request, sender, callback) {
    switch (request.what) {
        case 'setSetting':
            Adequa.actions.consent.setSetting(request.setting);

            const message = Adequa.actions.consent.cmp.getConsentData(Adequa.getWebsiteId((sender.tab || {}).url || "nourl"));
            message.what = "consentInfos";
            Adequa.messaging.sendAllTabs(message);
            return;
        case 'getWebsiteId':
            Adequa.API.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, (tabs) => {
                const tab = tabs[0] || {};
                callback(Adequa.getWebsiteId(tab.url || "nourl"));
            });
            return true;
        case 'getDefaultPurposeSettings':
            callback(Adequa.actions.consent.view.mapSettings(
                Adequa.actions.consent.getSettings({
                    website_id: "all",
                    vendor_id: "all"
                }),
                "purpose_id") || {});
            return;
        case 'getWebsitePurposeSettings':
            Adequa.actions.consent.view.getCurrentWebsiteSettingsMapped(function(settings){
                callback(settings);
            }, "purpose_id");
            return true;
        case 'getDefaultVendorSettings':
            callback(Adequa.actions.consent.view.mapSettings(
                Adequa.actions.consent.getSettings({
                    website_id: "all",
                    purpose_id: "all"
                }),
                "vendor_id") || {});
            return;
        case 'getWebsiteVendorSettings':
            Adequa.actions.consent.view.getCurrentWebsiteSettingsMapped(function(settings){
                console.log(settings)
                callback(settings);
            }, "vendor_id");
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

Adequa.messaging.receive = function (request, sender, callback) {
    if (sender.tab) {
        return pageMessaging(request, sender, callback);
    } else {
        return messaging(request, sender, callback);
    }
};

Adequa.messaging.send = function (request, callback) {
    Adequa.messaging.receive(request, {}, callback)
};

Adequa.messaging.sendAllTabs = function(message){
    Adequa.API.tabs.query({}, function(tabs) {
        for (const tab of tabs) {
            Adequa.API.tabs.sendMessage(tab.id, message);
        }
    });
};

Adequa.API.onMessage(Adequa.messaging.receive);
