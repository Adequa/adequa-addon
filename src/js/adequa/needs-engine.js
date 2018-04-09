'use strict';
(function() {

    var µb = µBlock;
    vAPI.adequa = vAPI.adequa || {};
    vAPI.adequa.needsEngine = vAPI.adequa.needsEngine || {};


    vAPI.adequa.needsEngine.evaluatePage = function(tabId, url, head, body, callback) {
        var now = (new Date()).getTime();
        var asyncJobs = 1;

        var checkForASyncCompletion = function() {
            if (asyncJobs <= 0) {
                vAPI.adequa.storage.fetchNeeds(function(allNeeds) {
                    callback(allNeeds);
                });
            }
        };

        vAPI.adequa.needsEngine.fetchRules(function(rules) {
            var decreaseAsyncCounter = function() {
                asyncJobs -= 1;
                checkForASyncCompletion();
            };

            for (var rule of rules) {

                var regexp = new RegExp(rule.regex, 'i');

                if (url.match(regexp)) {
                    asyncJobs += 1;

                    vAPI.adequa.storage.addNeed(
                        {
                            title: rule.title,
                            id: rule.id,
                            time: now,
                        },
                        decreaseAsyncCounter
                    );
                }
            }

            asyncJobs -= 1;

            if (asyncJobs <= 0) {
                vAPI.adequa.storage.fetchNeeds(function(allNeeds) {
                    callback(allNeeds);
                });
            }
        });
    };

    vAPI.adequa.needsEngine.needsForTabId = function(tabId, callback) {
        vAPI.adequa.storage.fetchNeeds(callback);
    };

    vAPI.adequa.needsEngine.needsForTabId = function(tabId, callback) {
        vAPI.adequa.storage.fetchNeeds(callback);
    };

    vAPI.adequa.needsEngine.fetchRules = function(callback) {
        var onRulesFetched = function(response) {
            if (response.statusCode === 200) {
                try {
                    callback(JSON.parse(response.content));
                } catch(e) {
                    callback([]);
                }
            } else {
                callback([]);
            }
        };

        µBlock.assets.fetchText(
            µb.userSettings.adequaNeedsRulesUrl,
            onRulesFetched
        );

    };
})();
