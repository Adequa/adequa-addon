Adequa.messaging = {};

const pageMessaging = function (request, sender, callback) {
    switch (request.what) {
        case 'getWebsiteRules':
            if(!(sender && sender.tab && sender.tab.url)) return;

            const hostname = Adequa.hostname(sender.tab.url);
            callback(Adequa.current.cookieRules[hostname] || {});
            return;
        case 'getConsent':
            const message = Adequa.actions.consent.getConsentData(Adequa.getWebsiteId((sender.tab || {}).url || "nourl"));
            message.what = "consentInfos";
            callback(message);
            return;
        default:
            console.log('Page event not handled : ' + request.what);
            break;
    }
};

const messaging = function (request, sender, callback) {
    switch (request.what) {
        case 'setOrUpdateSetting':
            Adequa.actions.consent.setOrUpdateSetting(request.setting);

            Adequa.API.tabs.query({}, function(tabs) {
                const message = Adequa.actions.consent.getConsentData(Adequa.getWebsiteId((sender.tab || {}).url || "nourl"));
                message.what = "consentInfos";
                for (const tab of tabs) {
                    Adequa.API.tabs.sendMessage(tab.id, message);
                }
            });
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
            callback(Adequa.actions.consent.getDefaultPurposeSettings());
            return;
        case 'getWebsitePurposeSettings':
            Adequa.actions.consent.getCurrentWebsitePurposeSettings(function(settings){
                callback(settings);
            });
            return true;
        case 'getDefaultVendorSettings':
            callback(Adequa.actions.consent.getDefaultVendorSettings());
            return;
        case 'getWebsiteVendorSettings':
            Adequa.actions.consent.getCurrentWebsiteVendorSettings(function(settings){
                callback(settings);
            });
            return true;
        case 'getPurposeList':
            callback(Adequa.current.purposeList);
            return;
        case 'getVendorList':
            callback(Adequa.current.vendorList);
            return;
        case 'fetchCookieDomainBlocked':
            const domainBlocked = [];
            for (const domain in Adequa.current.cookieRules) {
                if (Adequa.current.cookieRules[domain].disabled)
                    domainBlocked.push(domain);
            }
            callback(domainBlocked);
            return;
        case 'adequaStart':
            Adequa.actions.init.start();
            return;
        case 'disableCookieType':
            for (const rule in Adequa.current.adequaCookieRules) {
                if (Adequa.current.adequaCookieRules[rule].type === request.type)
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
            callback(Adequa.current.typeCookieRules || {});
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
            callback(Adequa.current.cookieRules);
            return;
        case 'getCookieByType':
            const cookieByType = {};

            for (const hostname in Adequa.current.cookieRules) {
                const rule = Adequa.current.cookieRules[hostname];
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

Adequa.API.onMessage(Adequa.messaging.receive);
