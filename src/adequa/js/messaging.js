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
            callback((Adequa.current.tabs[request.tabId] || {}).nbAdsAllowed);
            return;
        case 'fetchTotalNumberAdsViewed':
            callback(Adequa.storage.db.rowCount('ad_prints'));
            return;
        case 'fetchAdsViewedStats':
            const viewedToday = Adequa.current.adsViewedToday;
            const maxPerDay = Adequa.current.nbMaxAdsPerDay;
            callback({sawToday: viewedToday, NbMaxAdsPerDay: maxPerDay});
            return;
        case 'fetchAllPageViewed':
            const page_views = Adequa.storage.db.queryAll('page_views');
            let allPageData = [];

            for(let page of page_views){
                const ads = Adequa.storage.db.queryAll('ad_prints', {
                    query: {
                        page_view_id: page.ID
                    }
                });

                page.ads_allowed = ads.length;
                allPageData[page.ID] = page;
            }
            callback(allPageData);
            return;
        case 'toggleStatSwitch':
            Adequa.storage.setCurrent({statSwitchState: request.state ? 'page' : 'total'});
            return;
        case 'fetchStatSwitchState':
            callback(Adequa.current.statSwitchState);
            return;
        case 'fetchCurrentStats':
            console.log(request)
            callback(Adequa.current.tabs[request.tabId] || {});
            return;
        case 'getCurrent':
            callback(Adequa.current);
            return;
        case 'isFirstInstall':
            callback(Adequa.current.firstInstall);
            return;
        case 'firstInstallFinished':
            Adequa.storage.setCurrent({firstInstall: false, adsViewedToday: 0});
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
            Adequa.storage.setCurrent({passions: request.passions});
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
            callback(Adequa.isPartner(request.url));
            return;
        case 'getQuerySelectors':
            const hostname = Adequa.hostname(request.url);
            callback(Adequa.current.partnerList[hostname] || []);
            return;
        case 'setAdsViewed':
            console.log(request.nbAdsViewed);
            return;
        default:
            break;
    }
};
