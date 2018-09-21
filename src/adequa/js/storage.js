/* global Adequa, localStorageDB */
"use strict";

  Adequa.current = {
    tabs: {},
      partnerList: [
          'lequipe.fr'
      ],
      requestsType: {}
  };

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

if (!Adequa.storage.db) { Adequa.storage.db = new localStorageDB('adequa', localStorage); }

if (Adequa.storage.db.isNew()) {
  Adequa.storage.db.createTable('page_views', ['url', 'consulted_at', 'nb_trackers_blocked', 'nb_ads_blocked', 'nb_ads_viewed', 'is_partner', 'load_time']);
  Adequa.storage.db.createTable('ad_prints', ['passion', 'page_view_id', 'viewed_at', 'ad_id']);
  Adequa.storage.db.createTable('user_choices', ['made_at', 'choice', 'choice_feature']);

  Adequa.storage.db.commit();
}

Adequa.storage.setCurrent = function (newCurrent) {
  const oldCurrent = Adequa.current || {};
  const current = mergeDeep(oldCurrent, newCurrent);

  Adequa.current = current;
  vAPI.storage.set({ current });
};
