Adequa.catalogs = {};

Adequa.actions.interests.poll = function (callback) {
    console.log("poll")
    const interests = Adequa.storage.interests.filter(interest => interest.validated && !interest.removed);
    for (const interest of interests) {
        for (const catalog of Object.values(Adequa.catalogs)) {
            if (catalog.category === interest.category) {
                catalog.poll(interest, function () {
                    console.log("catalog poll")
                    catalog.generateAds(20, function () {
                        console.log("ads generated")
                        if(typeof callback === "function") {
                            console.log("callback")
                            callback();
                        }
                        else {
                            Adequa.db.ads.query(function (doc, emit) {
                                if(!doc.notified)
                                    emit(doc.generated_at);
                            }, {include_docs : true, limit: 50}).then(data => {
                                Adequa.actions.interests.notifyAds(data.rows);
                            });
                        }
                    });
                });
            }
        }
    }
};
