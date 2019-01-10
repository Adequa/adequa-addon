const env = 'dev';

let Adequa = {
    uri: env.match('dev') ? 'https://dev.admin-equa.com/' : env.match('prod') ? 'https://admin-equa.com/' : 'http://localhost:8000/',
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
