"use strict";
const env = 'prod';

let Adequa = {
    uri: env.match('dev') ? 'http://localhost:3000/' : 'https://admin-equa.com/'
};

Adequa.hostname = function (url) {
    if(!url)
        return false;

    let hostname = url;

    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0)
        hostname = match[2];

    let domain = hostname;

    if (hostname !== '') {
        let parts = hostname.split('.').reverse();

        if (parts !== null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostname.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }
    return domain;
};

Adequa.isPartner = function (url) {
    let partner = false;
    const hostname = Adequa.hostname(url);

    for (let item in Adequa.current.partnerList)
        if (item === hostname)
            partner = true;
    return partner;
};

Adequa.shouldShowAds = function (url) {
    return Adequa.isPartner(url) && ((((Adequa.current.adsViewedToday || 0) < (Adequa.current.nbMaxAdsPerDay || 25))) || (Adequa.current.nbMaxAdsPerDay === '∞'));
};

Adequa.getRequestType = function (url) {
    const types = Adequa.current.requestsType;
    const domain = Adequa.hostname(url);
    if(!types)
        return "other";

    const subType = types.domains[domain];

    if (!subType)
        return "other";

    const type = types.apps[subType] || types.apps[(types.bugs[subType] || "")] || {};
    return type.cat || "misc";
};

Adequa.updateBadge = function(tabId){
    const tab = Adequa.current.tabs[tabId] || {};
    let state = 0;

    let pageStore = µBlock.pageStoreFromTabId(tabId);
    if ( pageStore !== null ) {
        state = pageStore.getNetFilteringSwitch() ? 1 : 0;
    }

    if(tab.isPartner)
        state = 2;

    const totalRequestsBlocked = (tab.nbAdsBlocked || 0) + (tab.nbTrackersBlocked || 0);
    const badge = totalRequestsBlocked !== 0 ? totalRequestsBlocked + '' : '';

    vAPI.setIcon(tabId, state, badge);
};
