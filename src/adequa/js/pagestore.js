/* global Adequa */

"use strict";
Adequa.pagestore = {};

Adequa.pagestore.updateRequestBlockedForTab = function (tabId, url) {
    setTimeout(function () {
        const type = Adequa.getRequestType(url);
        let tabs = Adequa.current.tabs || {};
        tabs[tabId] = tabs[tabId] || {};

        if (type === "advertising") {
            tabs[tabId].nbAdsBlocked = (tabs[tabId].nbAdsBlocked || 0) + 1;
        }
        else if (type === "site_analytics" || type === "essential") {
            tabs[tabId].nbTrackersBlocked = (tabs[tabId].nbTrackersBlocked || 0) + 1;
        }
        Adequa.storage.setCurrent({tabs});
        Adequa.pagestore.updatePageViewFromCurrent(tabId);
    }, 500);
};

Adequa.pagestore.updateAdsViewedForTab = function (tabId, nbAdsViewed, partnerAds) {
    let tabs = Adequa.current.tabs || {};

    let diff = (nbAdsViewed - (tabs[tabId].nbAdsViewed || 0)) || 0;

    if (((Adequa.getNumberAdsViewedToday() || 0) + diff) > Adequa.current.nbMaxAdsPerDay)
        diff = Adequa.current.nbMaxAdsPerDay - (Adequa.getNumberAdsViewedToday() || 0);

    if(tabs[tabId].nbAdsViewed > ((tabs[tabId].nbAdsPostRefresh || 0) + nbAdsViewed))
        tabs[tabId].nbAdsPostRefresh = tabs[tabId].nbAdsViewed;
    else
        tabs[tabId].nbAdsViewed = (tabs[tabId].nbAdsPostRefresh || 0) + nbAdsViewed;

    Adequa.storage.setCurrent({
        adsViewedToday: (Adequa.getNumberAdsViewedToday() || 0) + diff,
        totalNbAdsViewed: (Adequa.current.totalNbAdsViewed || 0) + diff,
        tabs: tabs
    });

    savePartnerHistoryToServer(tabId);
    Adequa.pagestore.updatePageViewFromCurrent(tabId);
    Adequa.pagestore.updateAdPrintsFromCurrent(tabId, partnerAds);
};

Adequa.pagestore.updatePageViewFromCurrent = function (tabId) {
    const tab = Adequa.current.tabs[tabId];
    if (!tab || !tab.url)
        return;
    if (!(tab.url.startsWith('http://') || tab.url.startsWith('https://')))
        return;

    if (tab.dbId === 0) {
        const id = Adequa.storage.db.insert("page_views", {
            url: tab.url || '',
            hostname: Adequa.hostname(tab.url || ''),
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
            tabs: {}[tabId || 0] = tab
        });
    }
    else {
        Adequa.storage.db.update("page_views", {ID: tab.dbId}, function (row) {
            row.url = tab.url || '';
            row.hostname = Adequa.hostname(tab.url || '');
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

Adequa.pagestore.updateAdPrintsFromCurrent = function (tabId, partnerAds) {
    const tab = Adequa.current.tabs[tabId];
    if (!tab)
        return;

    if (!partnerAds)
        return;

    Adequa.storage.db.deleteRows('ad_prints', {
        page_view_id: tab.dbId,
        viewed_at: tab.consultTime,
    });

    for (let ad of partnerAds) {
        Adequa.storage.db.insert('ad_prints', {
            page_view_id: tab.dbId,
            passion: ad.passion,
            viewed_at: tab.consultTime,
            ad_id: ad.id
        });
    }
};

Adequa.pagestore.pageLoaded = function (tabId, loadTime, consultTime) {
    let tabs = Adequa.current.tabs || {};
    tabs[tabId] = tabs[tabId] || {};

    if (tabs[tabId].loadTime !== 0)
        return;


    tabs[tabId].loadTime = loadTime;
    tabs[tabId].consultTime = consultTime;

    Adequa.storage.setCurrent({tabs});
    Adequa.pagestore.updatePageViewFromCurrent(tabId);
};

Adequa.pagestore.resetTab = function (tabId, url) {
    let tabs = Adequa.current.tabs || {};
    if (tabs[tabId] && tabs[tabId].url === url && tabs[tabId].consultTime === 0)
        return;
    if (tabs[tabId] && tabs[tabId].url === url && Date.now() < (tabs[tabId].consultTime + 30 * 60 * 1000))
        return;
    if (tabs[tabId])
        savePartnerHistoryToServer(tabId);

    tabs[tabId] = {
        url: url,
        nbAdsBlocked: 0,
        nbTrackersBlocked: 0,
        nbAdsViewed: 0,
        consultTime: 0,
        loadTime: 0,
        nbAdsPostRefresh: 0,
        isPartner: Adequa.isPartner(url),
        dbId: 0,
        pageviewId: 0
    };

    Adequa.storage.setCurrent({tabs});
};

const savePartnerHistoryToServer = function (tabId) {
    let tabs = Adequa.current.tabs;
    if (!tabs[tabId])
        return;
    if (Adequa.isPartner(tabs[tabId].url)) {
        let data = {
            id: tabs[tabId].pageviewId || undefined,
            url: tabs[tabId].url,
            nbAdsViewed: tabs[tabId].nbAdsViewed,
            hostname: Adequa.hostname(tabs[tabId].url),
            addonID: Adequa.current.addonID,
            addonToken: Adequa.current.addonToken,
        };
        let body = Adequa.request.encoreUrlParams(data);

        Adequa.request.post(Adequa.uri + 'api/partner/pageview', body)
            .then(function (res) {
                tabs[tabId].pageviewId = JSON.parse(res.response).id;
                Adequa.storage.setCurrent({tabs});
            })
            .catch(console.warn);
    }
};
