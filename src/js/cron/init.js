const env = 'dev';

let Adequa = {
  uri: env.match('dev') ? 'https://dev.adequa.me/' : env.match('prod') ? 'https://adequa.me/' : 'http://localhost:8000/',
  adminUri: env.match('dev') ? 'https://dev.admin-equa.com/' : env.match('prod') ? 'https://admin-equa.com/' : 'http://localhost:8008/',
  googleId: env.match('prod') ? 'UA-127469955-2' : 'UA-134079678-1',
  process: {
    init: {},
    cookie: {},
    interface: {},
    navigation: {},
    page: {},
    request: {},
  },
  cron: {},
  model: {},
  sync: {},
  db: {},
  showDevFeatures: !env.match('prod'),
};

Adequa.db.interests = new PouchDB('interests');
Adequa.db.actionsWithInterest = new PouchDB('actionsWithInterest');
