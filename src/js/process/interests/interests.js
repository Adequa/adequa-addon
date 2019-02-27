const qs = require('qs');

Adequa.actions.interests = {};

Adequa.actions.interests.createInterest = function (interest) {
    interest = Object.assign({validated: false, removed: false}, interest);

    const interests = Adequa.storage.interests || [];
    const exist = (interests.filter(item => item.name === interest.name)).length;

    if (!exist) {
        interests.push(interest);
        Adequa.storage.interests = interests;
        Adequa.setStorage({});
    } else {
        Adequa.actions.interests.setInterest(interest);
    }
};

Adequa.actions.interests.checkInterest = function (url, tabId) {
    console.log("check interest " + tabId, Object.assign({}, Adequa.storage.tabs[tabId]));
    if(!Adequa.storage.tabs[tabId].request) return;
    const catalogName = Adequa.hostname(url).split('.')[0];

    if (Adequa.catalogs[catalogName]) {
        const query = url.split('/').pop();
        const queryParameters = qs.parse(query, {ignoreQueryPrefix: true});


        const interest = {
            name: Adequa.storage.tabs[tabId].request.filters.keywords.text,
            request: Adequa.storage.tabs[tabId].request,
            category: "Immobilier",
            validated: true
        };
        Object.assign(interest, Adequa.catalogs[catalogName].parseQuery(queryParameters));

        return Adequa.actions.interests.createInterest(interest);
    }

    return false;
};

Adequa.actions.interests.setInterest = function (interest) {
    for (const index in Adequa.storage.interests) {
        if (Adequa.storage.interests[index].name === interest.name) {
            Adequa.storage.interests[index] = interest;
        }
    }
};

Adequa.actions.interests.notifyAds = function (rows) {
    for (const {doc} of rows) {
        Adequa.actions.tabs.notify(doc.title, doc.text, doc.link, doc.image, doc.price);

        Adequa.db.ads.put({
            ...doc,
            notified: true,
        }, {force: true}).catch();
    }
};

Adequa.actions.interests.getLastAdsByInterest = function (number, interest, callback) {
    Adequa.db.ads.query(function (doc, emit) {
        if(doc.interest === interest.name)
            emit(doc.generated_at);
    }, {include_docs : true, limit: number, descending: true}).then(data => {
        callback(data.rows);
    });
};
