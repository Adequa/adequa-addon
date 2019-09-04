import browser from 'webextension-polyfill';
import EventHandler from './event-handler';
import Storage from './storage';
import Resources from './resource';
import Start from './cron/start';
import Constants from './constants';
import Logger from './lib/logger';

Logger.setLevel(Constants.env === 'dev' ? Logger.DEBUG : Logger.ERROR);

global.Logger = Logger;

global.browser = browser;

global.Storage = Storage;
global.Resources = Resources;

(async () => {
  await Start();
  Logger.debug('Add-on initializated');
  // Storage.userBrokenWebsites = [...new Set([...(Storage.userBrokenWebsites || []), ...['google.fr', 'google.com', 'hubspot.fr']])];
  EventHandler();
})();
