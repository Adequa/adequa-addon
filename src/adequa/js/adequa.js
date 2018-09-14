"use strict";
const env = 'dev';

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
    return Adequa.isPartner(url) && ((Adequa.current.adsViewedToday || 0) < (Adequa.current.nbMaxAdsPerDay || 25));
};

Adequa.getRequestType = function (url) {
    const types = Adequa.current.requestsType;
    const domain = Adequa.hostname(url);

    const subType = types.domains[domain];

    if (!subType)
        return "other";

    const type = types.apps[subType] || types.apps[(types.bugs[subType] || "")] || {};
    return type.cat || "misc";
};
