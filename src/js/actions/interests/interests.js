const qs = require('qs');

Adequa.actions.interests = {};

Adequa.actions.interests.createInterest = function (interest) {
    interest = Object.assign({validated: false, removed: false}, interest);

    const interests = Adequa.storage.interests || [];
    const exist = (interests.filter(item => item.name === interest.name)).length;
    console.log(exist, interest)
    if (!exist) {
        interests.push(interest);
        Adequa.storage.interests = interests;
        Adequa.setStorage({});
    } else {
        Adequa.actions.interests.setInterest(interest);
    }
};

Adequa.actions.interests.checkInterest = function (url, tabId) {
    console.log(url, tabId)
    console.log(Adequa.storage.tabs[tabId].request)
    console.log(Adequa.storage.tabs[tabId])
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

    // const parameters = (Adequa.storage.interestRules[hostname] || {}).parameters || [];
    // const interest = {category: (Adequa.storage.interestRules[hostname] || {}).interest_id};
    //
    // for (const index in parameters) {
    //     if (queryParameters[index]) {
    //         interest[parameters[index]] = queryParameters[index];
    //     }
    // }
    // interest.parameters = Object.assign(queryParameters);

    return false;
};

Adequa.actions.interests.setInterest = function (interest) {
    console.log(interest)
    for (const index in Adequa.storage.interests) {
        if (Adequa.storage.interests[index].name === interest.name) {
            Adequa.storage.interests[index] = interest;
        }
    }
};
