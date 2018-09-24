/* global Adequa */
"use strict";
Adequa.messaging = {};

Adequa.messaging.onMessage = function(request, sender, callback) {
    let tabId = sender && sender.tab ? sender.tab.id : 0;

    switch ( request.what ) {
        case 'pageLoadTime':
            Adequa.pagestore.pageLoaded(tabId, request.loadTime, request.consultTime);
            return;
        case 'fetchTotalStats':
            const trackersBlocked = Adequa.storage.db.queryColumnSum('page_views', 'nb_trackers_blocked') || 0;
            const adsBlocked = Adequa.storage.db.queryColumnSum('page_views', 'nb_ads_blocked') || 0;
            const timeWon = Adequa.storage.db.queryColumnSum('page_views', 'load_time') || 0;

            callback({
                trackersBlocked,
                adsBlocked,
                timeWon,
            });
            return;
        case 'fetchAdsViewed':
            if(!Adequa.current.tabs)
                return;
            callback((Adequa.current.tabs[request.tabId] || {}).nbAdsViewed);
            return;
        case 'fetchTotalNumberAdsViewed':
            callback(Adequa.current.totalNbAdsViewed || 0);
            return;
        case 'fetchAdsViewedStats':
            const viewedToday = Adequa.current.adsViewedToday;
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
            if(!Adequa.current.tabs)
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
            Adequa.storage.setCurrent({firstInstall: false, adsViewedToday: 0, totalNbAdsViewed: 0});
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
            Adequa.cookies.getAdsCookies(function(cookies){
                callback(cookies.length || 0);
            });
            return;
        case 'getNbCompanies':
            callback(Adequa.current.yocCookies.length || 0);
            return;
        case 'setNbAdsPerDay':
            if(parseInt(request.selected)){
                Adequa.storage.setCurrent({nbMaxAdsPerDay: parseInt(request.selected)});
                const data = {
                    addon_id: Adequa.current.addonID,
                    nb_ads: request.selected
                };
                Adequa.request.put(Adequa.uri + 'api/update/nb-ads-per-day', Adequa.request.encoreUrlParams(data)).catch(console.warn);
            } else {
                Adequa.storage.setCurrent({nbMaxAdsPerDay: '∞'});
                const data = {
                    addon_id: Adequa.current.addonID,
                    nb_ads: 0
                };
                Adequa.request.put(Adequa.uri + 'api/update/nb-ads-per-day', Adequa.request.encoreUrlParams(data)).catch(console.warn);
            }
            return;
        case 'setThemesChoosed':
            Adequa.current.passions = request.selected;
            Adequa.storage.setCurrent({});

            const data = {
                addon_id: Adequa.current.addonID,
                themes: request.selected.toString()
            };
            Adequa.request.post(Adequa.uri + 'api/store/themes', Adequa.request.encoreUrlParams(data));
            return;
        case 'getAvailableThemes':
            callback(Adequa.current.availableThemes);
            return;
        default:
            break;
    }
};
