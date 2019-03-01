const qs = require('qs');
Adequa.qs = qs;
Adequa.process.interests = {};


const parseCategory = function(object, result = ""){
    if(Object.keys(object).length === 0) return result;
    const [category, sub_categories] = Object.entries(object)[0];

    if(result !== "") result += "_";
    result += category;

    return parseCategory(sub_categories, result);
};

const getCategory = function (domain, parameters) {
    const domainCategories = Adequa.storage.websiteRequests[domain];
    if (!domainCategories) return false;

    for(const [param, value] of Object.entries(parameters)){
        const parametersList = domainCategories[param];
        if(!parametersList) continue;

        const categoriesList = parametersList[value];
        if(!categoriesList) continue;

        return parseCategory(categoriesList);
    }

    return false
};

const checkQueryParameters = function(url){
    const domain = Adequa.domain(url);

    const body = url.split('?').slice(-1)[0];
    const params = qs.parse(body);

    const category = getCategory(domain, params);
    if(!category) return false;

    Adequa.model.interest.saveOrUpdate({
        category: category,
        status: "active"
    }).then(id => {
        Adequa.model.actionWithInterest.save({
            action_type: "new_tab",
            action_url: url,
            action_timestamp: Date.now(),
            interest_id: id,
            interest_category: category
        });

        Adequa.process.analytics.sendAnonymousEvent(url, "advertising", "new_action_with_interest", "new_tab", undefined, {
            "cd5": encodeURI(id),
            "cd6": encodeURI(category),
            "dl": encodeURI(url)
        });
    });
};

const checkWebsite = function(url){
    for(const [website, category] of Object.entries(Adequa.storage.websiteCategory)){
        if(url.indexOf(website) !== -1) {
            Adequa.model.interest.saveOrUpdate({
                category: category,
                status: "active"
            }).then(id => {
                Adequa.model.actionWithInterest.save({
                    action_type: "new_tab",
                    action_url: url,
                    action_timestamp: Date.now(),
                    interest_id: id,
                    interest_category: category
                })
            });
            break;
        }
    }
};

Adequa.process.interests.checkUrl = function(url){
    checkWebsite(url);
    if(url.indexOf('?') !== -1) checkQueryParameters(url);
};
