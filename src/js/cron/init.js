const env = 'dev';

let Adequa = {
    uri: env.match('dev') ? 'https://dev.adequa.me/' : env.match('prod') ? 'https://adequa.me/' : 'http://localhost:8000/',
    adminUri: env.match('dev') ? 'https://dev.admin-equa.com/' : env.match('prod') ? 'https://admin-equa.com/' : 'http://localhost:8008/',
    googleId: env.match('prod') ? 'UA-127469955-2' : 'UA-134079678-1',
    actions: {
        init: {},
        cookie: {},
        interface: {},
        navigation: {},
        page: {},
        request: {}
    },
    cron: {},
    model: {},
    sync: {},
    db: {}
};

Adequa.db.adSources = new PouchDB('ad_sources');
Adequa.db.adSources.exists = function(id){
    return Adequa.db.adSources.get(id).then(function () {
        return Promise.resolve(true);
    }).catch(function () {
        return Promise.resolve(false);
    });
};
Adequa.db.ads = new PouchDB('ads');
