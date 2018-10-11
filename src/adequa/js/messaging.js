/* global Adequa */
"use strict";
Adequa.messaging = {};

Adequa.messaging.onMessage = function (request, sender, callback) {
    let tabId = sender && sender.tab ? sender.tab.id : 0;

    switch (request.what) {
        case 'pageLoadTime':
            Adequa.pagestore.pageLoaded(tabId, request.loadTime, request.consultTime);
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
        case 'isFirstInstall':
            callback(Adequa.current.firstInstall);
            return;
        case 'firstInstallFinished':
            Adequa.storage.setCurrent({firstInstall: false});
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
            Adequa.pagestore.updateAdsViewedForTab(tabId, request.nbAdsViewed, request.partnerAds);
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
            Adequa.cookies.optout(true);
            return;
        case 'getNbAdsCookies':
            Adequa.cookies.getAdsCookies(function (cookies) {
                callback(cookies.length || 0);
            });
            return;
        case 'getNbCompanies':
            callback(Adequa.current.yocCookies.length || 0);
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
            const data = {
                addon_id: Adequa.current.addonID,
                themes: (Adequa.current.passions || []).toString()
            };
            Adequa.request.post(Adequa.uri + 'api/store/themes', Adequa.request.encoreUrlParams(data)).catch(console.warn);
            if(typeof callback === "function")
                callback(Adequa.current.passions || []);
            return;
        case 'nbAdsPerDayChanged':
            const body = {
                addon_id: Adequa.current.addonID,
                nb_ads: parseInt(Adequa.current.nbMaxAdsPerDay || 25) ? Adequa.current.nbMaxAdsPerDay || 25 : 0
            };
            Adequa.request.put(Adequa.uri + 'api/update/nb-ads-per-day', Adequa.request.encoreUrlParams(body)).catch(console.warn);
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

            if (!hostnameData.length){
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
                totalNbAdsViewed: Adequa.getTotalNumberAdsViewed() || 0
            });
            return;
        case 'getWhitelist':
            const ubWhitelist = µBlock.netWhitelist;
            const defaultWhitelist = µBlock.netWhitelistDefault;

            let whitelist = [];

            for(let item in ubWhitelist) {
                let push = true;
                for(let entry of defaultWhitelist.split('\n'))
                    if(item === entry)
                        push = false;
                for(let entry in Adequa.current.partnerList)
                    if(item === entry)
                        push = false;

                if(push && item !== "#" && item !== "0") whitelist.push(item);
            }

            callback(whitelist);
            return;
        case 'disableFiltering':
            if(request.url)
            µBlock.toggleNetFilteringSwitch('https://' + request.url);
            return;
        default:
            break;
    }
};
