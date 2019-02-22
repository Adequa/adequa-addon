Adequa.catalogs = {};

Adequa.actions.interests.poll = function () {
    const interests = Adequa.storage.interests.filter(interest => interest.validated && !interest.removed);
    for (const interest of interests) {
        for (const catalog of Object.values(Adequa.catalogs)) {
            if (catalog.category === interest.category) {
                catalog.poll(interest, function () {
                    catalog.generateAds(10, function () {
                        notifyAd();
                    });
                });
            }
        }
    }
};

const notifyAd = function () {
    Adequa.db.ads.query(function (doc, emit) {
        if(!doc.notified)
            emit(doc.generated_at);
    }, {include_docs : true, limit: 50}).then(data => {
        for (const {doc} of data.rows) {
            console.log(doc.title, doc.text, doc.link, doc.image, doc.price);
            Adequa.actions.tabs.notify(doc.title, doc.text, doc.link, doc.image, doc.price);

            Adequa.db.ads.put({
                ...doc,
                notified: true,
            }, {force: true}).catch();
        }
    });
};
