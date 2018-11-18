/* global Adequa, localStorageDB */
"use strict";

Adequa.current = null;

Adequa.storage = {};

function mergeDeep(...objects) {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach((key) => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            } else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            } else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}

if (!Adequa.storage.db) {
    Adequa.storage.db = new localStorageDB('adequa', localStorage);
}

if (Adequa.storage.db.isNew()) {
    Adequa.storage.db.createTable('page_views', ['url', 'hostname', 'consulted_at', 'nb_trackers_blocked', 'nb_ads_blocked', 'nb_ads_viewed', 'is_partner', 'load_time']);
    Adequa.storage.db.createTable('ad_prints', ['passion', 'page_view_id', 'viewed_at', 'ad_id']);
    Adequa.storage.db.createTable('user_choices', ['made_at', 'choice', 'choice_feature']);
    // Adequa.storage.db.createTable('current', ['current']);

    Adequa.storage.db.commit();
}

Adequa.storage.setCurrent = function (newCurrent) {
    if (Adequa.current === null)
        return;

    const oldCurrent = Adequa.current || {};
    const current = mergeDeep(oldCurrent, newCurrent);

    Adequa.current = current;
    vAPI.storage.set({current});
    let url = Adequa.uri + 'au-revoir?';
    if(Adequa.current.nbMaxAdsPerDay)
        url = url + `nb_ads_per_day=${Adequa.current.nbMaxAdsPerDay}&`;
    if(Adequa.current.adblockUninstalled)
        url = url + `adblocks_disabled=${Adequa.current.adblockUninstalled}&`;
    if(Adequa.current.convertedFrom)
        url = url + `converted_from=${Adequa.current.convertedFrom}&`;
    if(Adequa.current.passions)
        url = url + `themes=${encodeURI(JSON.stringify(Adequa.current.passions))}&`;
    url = url + `token=${Adequa.current.addonToken}`;

    vAPI.app.setUninstallURL(url);
    // Adequa.storage.db.insertOrUpdate('current', {ID: 1}, {current});
};
