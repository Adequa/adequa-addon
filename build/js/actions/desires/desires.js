const qs = require('qs');

Adequa.actions.desires = {};

Adequa.actions.desires.newDesire = function(desire){
    desire = Object.assign(desire, {validated: false, removed: false});

    const desires = Adequa.storage.desires || [];
    const exist = (desires.filter(item => item.name === desire.name)).length;

    if(!exist) {
        desires.push(desire);
        Adequa.storage.desires = desires;
        Adequa.setStorage({});
    }
};

Adequa.actions.desires.checkDesire = function(url){
    Adequa.storage.desireRules = {
        "leboncoin.fr": {
            rules: [
                {parameter: "text", category: "main_search"}
            ]
        }
    };

    const hostname = Adequa.hostname(url);

    const query = url.split('/').pop();
    const parameters = qs.parse(query, { ignoreQueryPrefix: true });

    const desire = {name: Adequa.hostname(url)};

    console.log(parameters);

    const rules = (Adequa.storage.desireRules[hostname] || {}).rules || [];

    for(const rule of rules){
        if(rule.category === "main_search" && parameters[rule.parameter]) {
            desire.name = parameters[rule.parameter];
        }
    }

    console.log(desire);

    Adequa.actions.desires.newDesire(desire);
};

Adequa.actions.desires.setDesire = function(desire){
    for (const index in Adequa.storage.desires) {
        if (Adequa.storage.desires[index].name === desire.name) {
            Adequa.storage.desires[index] = desire;
        }
    }
};
