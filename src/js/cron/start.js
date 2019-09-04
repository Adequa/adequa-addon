import Utils from 'process/utils/utils';
import Analytics from 'process/utils/analytics';
import Cookies from 'process/cookies';
import Interests from 'process/interests';
import Tabs from 'process/tabs';
import Requests from 'process/requests';
import Poll from './poll';
import Storage from '../storage';
import Resources from '../resource';

const firstInstall = function firstInstall() {
  Storage.installDate = Date.now();

  setTimeout(() => {
    Utils.updateUninstallUrl();
    Analytics.sendAnonymousEvent(Storage.convertedFrom || 'nourl', 'basic', 'addon_install', undefined, 1);
  }, 5000);

  Cookies.getProspectCookie(async prospect => {
    if (!prospect) {
      return;
    }

    const updateTab = function updateTab(tab) {
      browser.tabs.update(tab.id, { active: true });
    };

    const reloadTab = function reloadTab(tabId) {
      browser.tabs.reload(tabId);
    };

    const checkTabs = function checkTabs(tabs) {
      for (const tab of tabs) {
        if (tab.url.indexOf(prospect.domain) !== -1) {
          updateTab(tab);
          reloadTab(tab.id);

          Storage.convertedFrom = Utils.hostname(tab.url);
        }
      }
    };

    const tabs = await browser.tabs.query({});
    checkTabs(tabs);
  });

  Storage.firstinstall = false;
};

const registerCheckRequests = function registerCheckRequests() {
  if (!Resources.websiteRequests) return setTimeout(registerCheckRequests, 1000);
  const websites = [];
  for (const website in Resources.websiteRequests) {
    websites.push(`${website}*`);
  }

  browser.webRequest.onBeforeRequest.addListener(Interests.checkRequest, { urls: websites }, ['requestBody']);
  return true;
};

const registerListeners = function() {
  browser.webNavigation.onCommitted.addListener(Requests.onCommitted);

  browser.tabs.onUpdated.addListener(Tabs.onUpdated);

  const extraInfoSpec = ['blocking'];
  if (browser.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty('EXTRA_HEADERS')) extraInfoSpec.push('extraHeaders');

  browser.webRequest.onBeforeSendHeaders.addListener(Requests.onBeforeSendHeaders, { urls: ['<all_urls>'] }, ['requestHeaders', ...extraInfoSpec]);
  browser.webRequest.onHeadersReceived.addListener(Requests.onHeadersReceived, { urls: ['<all_urls>'] }, ['responseHeaders', ...extraInfoSpec]);
  browser.webRequest.onBeforeRequest.addListener(Requests.onBeforeRequest, { urls: ['<all_urls>'] });
  registerCheckRequests();
};

export default async function() {
  await Storage.loadPersisted();
  await Resources.loadPersisted();

  if (Storage.firstInstall !== false) {
    firstInstall();
  }

  if (!Storage.consent) Storage.consent = { default: [1] };

  Poll.setup();
  browser.browserAction.setBadgeBackgroundColor({ color: '#64a19d' });

  const tabs = await browser.tabs.query({});
  Storage.tabs = {};
  tabs.forEach(tab => {
    const hostname = Utils.domain(tab.url);
    Storage.tabs[tab.id] = {
      hostname,
      domains: [hostname],
      cookies: [],
    };
  });

  registerListeners();
}
