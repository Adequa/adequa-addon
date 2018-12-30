/* global Adequa */

"use strict";
Adequa.actions.navigation = {};

Adequa.actions.navigation.updatePageViewFromCurrent = function (tabId) {
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

Adequa.actions.navigation.resetTab = function (tabId, url) {
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
            nb_ads_viewed: tabs[tabId].nbAdsViewed,
            hostname: Adequa.hostname(tabs[tabId].url),
        };
        let body = Adequa.current.server;
        body.data = data;

        Adequa.request.post(Adequa.uri + 'api/partner/pageview', JSON.stringify(body), true)
            .then(function (res) {
                tabs[tabId].pageviewId = JSON.parse(res.response).id;
                Adequa.storage.setCurrent({tabs});
            })
            .catch(console.warn);
    }
};
