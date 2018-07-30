'use strict';

(function() {

    vAPI.adequa = vAPI.adequa || {};
    vAPI.adequa.storage = vAPI.adequa.storage || {};

    if(!vAPI.adequa.storageDB)
        vAPI.adequa.storageDB = new localStorageDB("adequa", localStorage);

    if( vAPI.adequa.storageDB.isNew() ) {
        vAPI.adequa.storageDB.createTable("page_views", ["url", "consulted_at", "nb_trackers_blocked", "nb_ads_blocked", "is_partner", "load_time"]);
        vAPI.adequa.storageDB.createTable("ad_prints", ["passion", "page_view_id", "viewed_at", "ad_id"]);
        vAPI.adequa.storageDB.createTable("user_choices", ["made_at", "choice", "choice_feature"]);

        vAPI.adequa.storageDB.commit();
    }

    var filterOutOutdatedNeeds = function(needs) {
        var threshold = 7 * 24 * 60 * 60 * 1000;
        var now = (new Date()).getTime();

        var newNeeds = [];
        for (var need of needs) {
            var needDetectionTime = need.time;
            if (now - needDetectionTime < threshold) {
                newNeeds.push(need);
            }
        }

        return newNeeds;
    };

    vAPI.adequa.storage.fetchNeeds = function(callback) {
        callback = callback || function() {};
        vAPI.storage.get('needs', function(fetchedNeeds) {
            if (Array.isArray(fetchedNeeds.needs) && fetchedNeeds.needs.length > 0) {
                callback(filterOutOutdatedNeeds(fetchedNeeds.needs));
            } else {
                callback([]);
            }
        });
    };

    vAPI.adequa.storage.clearNeeds = function() {
        vAPI.storage.set({'needs': []});
    };

    vAPI.adequa.storage.addNeeds = function(needsToAppend, callback) {
        callback = callback || function() {};
        var needsIdsToAppend = [];
        needsToAppend = needsToAppend.slice();
        for (var need of needsToAppend) {
            needsIdsToAppend.push(need.id);
        }

        vAPI.adequa.storage.fetchNeeds(function(fetchedNeeds) {
            // remove already existing needs (so we update the detection date)
            fetchedNeeds = fetchedNeeds.slice().filter(function(need) {
                return needsIdsToAppend.indexOf(need.id) === -1;
            });

            var newNeedsArray = filterOutOutdatedNeeds(
                fetchedNeeds.concat(needsToAppend)
            );

            vAPI.storage.set({'needs': newNeedsArray});
            callback(newNeedsArray);
        });
    };

    vAPI.adequa.storage.addNeed = function(needToAppend, callback) {
        return vAPI.adequa.storage.addNeeds([needToAppend], callback);
    };


    vAPI.adequa.storage.fetchTenders = function(callback) {
        callback = callback || function() {};
        vAPI.storage.get('tenders', function(result) {
            if (Array.isArray(result.tenders) && result.tenders.length > 0) {
                callback(result.tenders);
            } else {
                callback([]);
            }
        });
    };

    vAPI.adequa.storage.tenderForNeed = function(need, callback) {
        vAPI.adequa.storage.fetchTenders(function(tenders) {
                for (var tender of tenders) {
                    if (tender.need.id === need.id) {
                        callback(tender);
                        return;
                    }
                }
                callback(null);
        });
    };

    vAPI.adequa.storage.addTenders = function(tendersToAppend, callback) {
        callback = callback || function() {};
        tendersToAppend = tendersToAppend.slice();
        var needsIdToBeAppend = [];
        for (var tenderToAppend of tendersToAppend) {
            needsIdToBeAppend.push(tenderToAppend.need.id);
        }

        vAPI.adequa.storage.fetchTenders(function(tenders) {
            tenders = tenders.slice().filter(function(tender) {
                return needsIdToBeAppend.indexOf(tender.need.id) === -1;
            });

            var newTendersArray = tenders.concat(tendersToAppend);

            vAPI.storage.set({'tenders': newTendersArray});
            callback(newTendersArray);
        });
    };

    vAPI.adequa.storage.addTender = function(tenderToAppend, callback) {
        return vAPI.adequa.storage.addTenders([tenderToAppend], callback);
    };

    vAPI.adequa.storage.resetForDebug = function(callback) {
        vAPI.storage.set({
            'tenders': [],
            'needs': []
        });
        callback();
    };

    vAPI.adequa.storage.destroyTenderForNeedId = function(needId, callback) {
        vAPI.adequa.storage.fetchTenders(function(tenders) {
            tenders = tenders.slice().filter(function(tender) {
                return tender.need.id !== needId;
            });
            vAPI.storage.set({'tenders': tenders});
            callback(tenders);
        });
    };

    vAPI.adequa.storage.setFirstInstall = function (value, callback) {
        callback = callback || function () {};

        vAPI.storage.set({firstInstall: value}, callback);
    };

    vAPI.adequa.storage.isFirstInstall = function (callback) {
        vAPI.storage.get('firstInstall', function(result) {
            callback(result.firstInstall);
        });
    };

    vAPI.adequa.storage.saveInstallState = function (state, callback) {
        callback = callback || function () {};

        vAPI.storage.set({installState: state}, callback);
    };

    vAPI.adequa.storage.fetchInstallState = function (callback) {
        vAPI.storage.get('installState', function (result) {
            callback(result.installState);
        });
    };
})();
