const env = 'dev';

let Adequa = {
    uri: env.match('dev') ? 'https://dev.adequa.me/' : env.match('prod') ? 'https://adequa.me/' : 'http://localhost:8000/',
    adminUri: env.match('dev') ? 'https://dev.admin-equa.com/' : env.match('prod') ? 'https://admin-equa.com/' : 'http://localhost:8008/',
    googleId: env.match('prod') ? 'UA-134079678-1' : 'UA-134079678-1',
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
    sync: {}
};
