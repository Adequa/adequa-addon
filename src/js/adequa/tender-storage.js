'use script';
(function() {
    vAPI.adequa = vAPI.adequa || {};
    vAPI.adequa.tenderStorage = vAPI.adequa.tenderStorage || {};

    vAPI.adequa.tenderStorage.createTender = function(need, callback) {
        var newTender = {
            time: (new Date()).getTime(),
            need: need
        };

        vAPI.adequa.storage.addTender(newTender, function() {
            callback();
        });
    };

    vAPI.adequa.tenderStorage.destroyTender = function(needId, callback) {
        vAPI.adequa.storage.destroyTenderForNeedId(needId, callback);
    };
})();
