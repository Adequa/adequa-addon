/* global Adequa */
"use strict";
Adequa.pagestore = {};

Adequa.pagestore.updateRequestBlockedForTab = function(tabId, url) {
    setTimeout(function () {
        const type = Adequa.getRequestType(url);
        let tabs = Adequa.current.tabs || {};
        tabs[tabId] = tabs[tabId] || {};

        if (type === "advertising" || type === "essential") {
            tabs[tabId].nbAdsBlocked = (tabs[tabId].nbAdsBlocked || 0) + 1;
        }
        else if (type === "site_analytics") {
            tabs[tabId].nbTrackersBlocked = (tabs[tabId].nbTrackersBlocked || 0) + 1;
        }
        Adequa.storage.setCurrent({tabs});
        Adequa.pagestore.updatePageViewFromCurrent(tabId);
    }, 500);
};

Adequa.pagestore.updateAdsViewedForTab = function(tabId, nbAdsViewed, partnerAds){
    let tabs = Adequa.current.tabs || {};

    const totalNbAdsViewed = ((Adequa.current.totalNbAdsViewed || 0) + (nbAdsViewed - (tabs[tabId].nbAdsViewed || 0))) || 0;
    let diff = (nbAdsViewed - (tabs[tabId].nbAdsViewed || 0)) || 0;

    if(diff < 0)
        diff = 0;

    if(((Adequa.current.adsViewedToday || 0) + diff) > Adequa.current.nbMaxAdsPerDay)
        diff = Adequa.current.nbMaxAdsPerDay - (Adequa.current.adsViewedToday || 0);

    Adequa.storage.setCurrent({
        adsViewedToday: (Adequa.current.adsViewedToday || 0) + diff
    });
    tabs[tabId].nbAdsViewed = nbAdsViewed;

    Adequa.storage.setCurrent({tabs, totalNbAdsViewed});
    Adequa.pagestore.updatePageViewFromCurrent(tabId);
    Adequa.pagestore.updateAdPrintsFromCurrent(tabId, partnerAds);
};

Adequa.pagestore.updatePageViewFromCurrent = function(tabId){
    const tab = Adequa.current.tabs[tabId];
    if(!tab || !tab.url)
        return;
    if(!(tab.url.startsWith('http://') || tab.url.startsWith('https://')))
        return;

    if(tab.dbId === 0){
        const id = Adequa.storage.db.insert("page_views", {
            url: tab.url || '',
            consulted_at: tab.consultTime || 0,
            nb_trackers_blocked: tab.nbTrackersBlocked || 0,
            nb_ads_blocked: tab.nbAdsBlocked || 0,
            nb_ads_viewed: tab.nbAdsViewed || 0,
            is_partner: tab.isPartner || false,
            load_time: tab.loadTime || 0
        });
        Adequa.storage.db.commit();

        tab.dbId = id;
        Adequa.storage.setCurrent({
            tabs: {}[tabId] = tab
        });
    }
    else {
        Adequa.storage.db.update("page_views", {ID: tab.dbId}, function(row) {
            row.url = tab.url || '';
            row.consulted_at = tab.consultTime || 0;
            row.nb_trackers_blocked = tab.nbTrackersBlocked || 0;
            row.nb_ads_blocked = tab.nbAdsBlocked || 0;
            row.nb_ads_viewed = tab.nbAdsViewed || 0;
            row.is_partner = tab.isPartner || false;
            row.load_time = tab.loadTime || 0;
            return row;
        });
        Adequa.storage.db.commit();
    }
    Adequa.updateBadge(tabId);
};

Adequa.pagestore.updateAdPrintsFromCurrent = function(tabId, partnerAds){
    const tab = Adequa.current.tabs[tabId];
    if(!tab)
        return;

    if(!partnerAds)
        return;

    Adequa.storage.db.deleteRows('ad_prints', {
            page_view_id: tab.dbId,
            viewed_at: tab.consultTime,
        });

    for(let ad of partnerAds){
        Adequa.storage.db.insert('ad_prints', {
            page_view_id: tab.dbId,
            passion: ad.passion,
            viewed_at: tab.consultTime,
            ad_id: ad.id
        });
    }
};

Adequa.pagestore.pageLoaded = function(tabId, loadTime, consultTime){
    let tabs = Adequa.current.tabs || {};
    tabs[tabId] = tabs[tabId] || {};
    tabs[tabId].loadTime = loadTime;
    tabs[tabId].consultTime = consultTime;

    Adequa.storage.setCurrent({tabs});
    Adequa.pagestore.updatePageViewFromCurrent(tabId);
};

Adequa.pagestore.resetTab = function(tabId, url){
    let tabs = Adequa.current.tabs || {};
    if(tabs[tabId] && tabs[tabId].url === url && tabs[tabId].consultTime === 0)
        return;

    tabs[tabId] = {
        url: url,
        nbAdsBlocked: 0,
        nbTrackersBlocked: 0,
        nbAdsViewed: 0,
        consultTime: 0,
        loadTime: 0,
        isPartner: Adequa.isPartner(url),
        dbId: 0
    };

    Adequa.storage.setCurrent({tabs});
};
