/* global Adequa */
"use strict";
Adequa.messaging = {};

Adequa.messaging.onMessage = function (request, sender, callback) {
    let tabId = sender && sender.tab ? sender.tab.id : 0;

    switch (request.what) {
        case 'toggleNetFiltering':
            Adequa.actions.site.updateUserRules(Adequa.hostname(request.url), !request.state);
            return;
        case 'fetchCookieDomainBlocked':
            const domainBlocked = [];
            for(const domain in Adequa.current.cookieRules){
                if(Adequa.current.cookieRules[domain].disabled)
                    domainBlocked.push(domain);
            }
            callback(domainBlocked);
            return;
        case 'adequaStart':
            Adequa.actions.init.start();
            return;
        case 'disableCookieType':
            for(const rule in Adequa.current.adequaCookieRules){
                if(Adequa.current.adequaCookieRules[rule].type === request.type)
                    Adequa.actions.cookie.updateUserRules(rule, request.disabled);
            }
            return;
        case 'updateUserCookieRules':
            if(request.domain)
                Adequa.actions.cookie.updateUserRules(request.domain, !request.accept);
            if(request.type)
                Adequa.actions.cookie.updateTypeRules(request.type, !request.accept);
            return;
        case 'updateUserSiteRules':
            Adequa.actions.site.updateUserRules(Adequa.hostname(request.hostname), request.support);
            return;
        case 'fetchTypeCookieRules':
            callback(Adequa.current.typeCookieRules || {});
            return;
        case 'cookieChanged':
            if (request.changeInfo.removed) return;

            let yoc = false;

            if (Adequa.shouldRemoveCookie(request.changeInfo.cookie))
                Adequa.actions.cookie.remove(request.changeInfo.cookie);
            else {

                for (let cookie of (Adequa.current.yocCookies || [])) {
                    if (((request.changeInfo.cookie.domain === cookie.domain) || (request.changeInfo.cookie.domain === '.' + cookie.domain)) && (request.changeInfo.cookie.name === cookie.name)) {
                        yoc = true;
                        break;
                    }
                }
                if (!yoc)
                    Adequa.actions.cookie.logCookie(request.changeInfo.cookie);
            }
            return;
        case 'getCookieHistoric':
            callback(Adequa.current.cookieRules);
            return;
        case 'getCookieByType':
            const cookieByType = {};

            for(const hostname in Adequa.current.cookieRules){
                const rule = Adequa.current.cookieRules[hostname];
                rule.domain = hostname;
                if(!rule.type) {
                    if(!cookieByType["non categorisé"])
                        cookieByType["non categorisé"] = [];
                    cookieByType["non categorisé"].push(rule);
                }
                else {
                    if(!cookieByType[rule.type])
                        cookieByType[rule.type] = [];
                    cookieByType[rule.type].push(rule);
                }
            }
            callback(cookieByType);
            return;
        case 'pageLoadTime':
            Adequa.actions.navigation.pageLoaded(tabId, request.loadTime, request.consultTime);
            return;
        case 'fetchAdsViewed':
            if (!Adequa.current.tabs)
                return;
            callback((Adequa.current.tabs[request.tabId] || {}).nbAdsViewed);
            return;
        case 'fetchTotalNumberAdsViewed':
            callback(Adequa.getTotalNumberAdsViewed() || 0);
            return;
        case 'fetchAdsViewedStats':
            const viewedToday = Adequa.getNumberAdsViewedToday();
            const maxPerDay = Adequa.current.nbMaxAdsPerDay;
            callback({sawToday: viewedToday, NbMaxAdsPerDay: maxPerDay});
            return;
        case 'fetchAllPageViewed':
            const page_views = Adequa.storage.db.queryAll('page_views');
            callback(page_views);
            return;
        case 'toggleStatSwitch':
            Adequa.storage.setCurrent({statSwitchState: request.state ? 'page' : 'total'});
            return;
        case 'fetchStatSwitchState':
            callback(Adequa.current.statSwitchState);
            return;
        case 'fetchCurrentStats':
            if (!Adequa.current.tabs)
                return;
            callback(Adequa.current.tabs[request.tabId] || {});
            return;
        case 'getCurrent':
            callback(Adequa.current);
            return;
        case 'isNotConfigured':
            if(Adequa.current.postInstallOpened) callback(false);
            callback(Adequa.current.isNotConfigured);
            return;
        case 'firstInstallFinished':
            Adequa.storage.setCurrent({isNotConfigured: false});
            callback();
            return;

        case 'saveInstallState':
            Adequa.storage.setCurrent({installState: request.state});
            callback();
            return;

        case 'fetchInstallState':
            callback(Adequa.current.installState);
            return;

        case 'savePassions':
            Adequa.current.passions = request.passions;
            Adequa.storage.setCurrent({});
            callback();
            return;

        case 'getPassions':
            callback(Adequa.current.passions || {});
            return;
        case 'getAddonID':
            callback(Adequa.current.addonID || 0);
            return;
        case 'saveNbMaxAdsPerDay':
            Adequa.storage.setCurrent({nbMaxAdsPerDay: request.nbMaxAdsPerDay});
            callback();
            return;
        case 'isSitePartner':
            callback(Adequa.isPartner(request.url || sender.url));
            return;
        case 'getQuerySelectors':
            const hostname = Adequa.hostname(request.url || sender.url);
            callback((Adequa.current.partnerList[hostname] || []));
            return;
        case 'setAdsViewed':
            Adequa.actions.navigation.updateAdsViewedForTab(tabId, request.nbAdsViewed, request.partnerAds);
            return;
        case 'getAddonInfo':
            const addonID = Adequa.current.addonID;
            const addonToken = Adequa.current.addonToken;

            callback({addonID, addonToken});
            return;
        case 'openTab':
            vAPI.tabs.open({url: request.url});
            return;
        case 'cookiesOptout':
            Adequa.actions.cookie.optout(true);
            return;
        case 'getNbAdsCookies':
            Adequa.actions.cookie.getAdsCookies(function (cookies) {
                callback(cookies.length || 0);
            });
            return;
        case 'getNbCompanies':
            Adequa.actions.cookie.getYocDomains(function (domains) {
                callback(domains.length || 0);
            });
            return;
        case 'setNbAdsPerDay':
            if (parseInt(request.selected)) {
                Adequa.storage.setCurrent({nbMaxAdsPerDay: parseInt(request.selected)});
            } else {
                Adequa.storage.setCurrent({nbMaxAdsPerDay: '∞'});
            }
            return;
        case 'setThemesChoosed':
            Adequa.current.passions = request.selected;
            Adequa.storage.setCurrent({});
            return;
        case 'themesChanged':
            let data = Object.assign({}, Adequa.current.server);
            data.new = {
                themes: Adequa.current.passions || []
            };
            Adequa.request.post(Adequa.uri + 'api/store/themes', JSON.stringify(data), true).then(() => {
                Adequa.current.server.themes = JSON.parse(JSON.stringify(Adequa.current.passions));
                Adequa.storage.setCurrent({});
            }).catch(console.warn);

            if (typeof callback === "function")
                callback(Adequa.current.passions || []);
            return;
        case 'nbAdsPerDayChanged':
            let body = Object.assign({}, Adequa.current.server);
            body.new = {
                nb_ads_per_day: parseInt(Adequa.current.nbMaxAdsPerDay || 25) ? Adequa.current.nbMaxAdsPerDay || 25 : 0
            };

            Adequa.request.put(Adequa.uri + 'api/update/nb-ads-per-day', JSON.stringify(body), true).then(() => {
                Adequa.storage.setCurrent({
                    server: {
                        nb_ads_per_day: Adequa.current.nbMaxAdsPerDay
                    }
                });
            }).catch(console.warn);

            return;
        case 'getAvailableThemes':
            callback(Adequa.current.availableThemes);
            return;
        case 'getCockpitData':
            const hostnameData = Adequa.storage.db.queryAll('page_views', {
                query: {hostname: Adequa.hostname(request.url || '')}
            });

            let firstVisit;
            let nbPages;

            if (!hostnameData.length) {
                firstVisit = Date.now();
                nbPages = 1;
            } else {
                firstVisit = hostnameData[0].consulted_at;
                nbPages = hostnameData.length;
            }

            let nbAdsBlocked = 0;
            let nbTrackersBlocked = 0;
            let nbAdsViewed = 0;
            let loadTime = 0;

            for (let row of hostnameData) {
                nbAdsBlocked = nbAdsBlocked + row.nb_ads_blocked;
                nbTrackersBlocked = nbTrackersBlocked + row.nb_trackers_blocked;
                nbAdsViewed = nbAdsViewed + row.nb_ads_viewed;
                loadTime = loadTime + row.load_time;
            }

            const trackersBlocked = Adequa.storage.db.queryColumnSum('page_views', 'nb_trackers_blocked') || 0;
            const adsBlocked = Adequa.storage.db.queryColumnSum('page_views', 'nb_ads_blocked') || 0;

            callback({
                hostname: Adequa.hostname(request.url || ''),
                firstVisit: firstVisit || Date.now(),
                nbPages: nbPages || 1,
                nbAdsBlocked: nbAdsBlocked || 0,
                nbTrackersBlocked: nbTrackersBlocked || 0,
                nbAdsViewed: nbAdsViewed || 0,
                loadTime: loadTime || 0,
                nbAdsViewedToday: Adequa.getNumberAdsViewedToday() || 0,
                nbMaxAdsPerDay: Adequa.current.nbMaxAdsPerDay || 0,
                totalAdsBlocked: adsBlocked || 0,
                totalTrackersBlocked: trackersBlocked || 0,
                siteIsPartner: Adequa.isPartner(request.url || ''),
                whitelisted: (Adequa.current.siteRules[Adequa.hostname(request.url || '')] || {}).support,
                totalNbAdsViewed: Adequa.getTotalNumberAdsViewed() || 0
            });
            return;
        case 'getWhitelist':
            let whitelist = [];

            for (let item in Adequa.current.siteRules) {
                if((Adequa.current.siteRules[item] || {}).support)
                    whitelist.push(item);
            }

            callback(whitelist);
            return;
        case 'getUserWhitelist':
            let userWhitelist = [];

            for (let item in Adequa.current.userSiteRules) {
                if((Adequa.current.userSiteRules[item] || {}).support)
                    userWhitelist.push(item);
            }

            callback(userWhitelist);
            return;
        case 'disableFiltering':
            if (request.url)
                Adequa.actions.site.updateUserRules(Adequa.hostname(request.url), false);
            return;
        case 'setSendStatistics':
            Adequa.storage.setCurrent({sendStatistics: request.accept});
            return;
        default:
            break;
    }
};

Adequa.messaging.send = Adequa.messaging.onMessage;
