"use strict";
Adequa.pagestore = {};

Adequa.pagestore.updateRequestBlockedForTab = function(tabId, url) {
    setTimeout(function () {
        const type = Adequa.getRequestType(url);
        let tabs = Adequa.current.tabs || {};
        tabs[tabId] = tabs[tabId] || {};//todo remove

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

Adequa.pagestore.updatePageViewFromCurrent = function(tabId){
    const tab = Adequa.current.tabs[tabId];
    if(!tab)
        return;
    if(!(tab.url.startsWith('http://') || tab.url.startsWith('https://')))
        return;

    if(tab.dbId === 0){
        const id = Adequa.storage.db.insert("page_views", {
            url: tab.url || '',
            consulted_at: tab.consultTime || 0,
            nb_trackers_blocked: tab.nbTrackersBlocked || 0,
            nb_ads_blocked: tab.nb_ads_blocked || 0,
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
            row.is_partner = tab.isPartner || false;
            row.load_time = tab.loadTime || 0;
            return row;
        });
        Adequa.storage.db.commit();
    }
    if((tab.nbAdsViewed || 0) > 0){
        Adequa.updateAdPrintsFromCurrent(tabId);
    }
};

Adequa.updateAdPrintsFromCurrent = function(tabId){
    const tab = Adequa.current.tabs[tabId];
    if(!tab)
        return;

    const ads = Adequa.storage.db.queryAll('ad_prints', {
        query: {
            page_view_id: tab.ID
        }
    });

    const diff = (tab.nbAdsViewed || 0) - ads.length;
    for(let i = 0; i < diff; i++){
        Adequa.storage.db.insert('ad_prints', {
            page_view_id: tab.dbId,
            passion: 'passion',
            viewed_at: tab.consultTime,
            ad_id: 0
        });
    }
};

Adequa.pagestore.pageLoaded = function(tabId, loadTime, consultTime){
    let tabs = Adequa.current.tabs || {};
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
