import Consent from 'model/consent';
import Interest from 'model/interest';
import Utils from 'process/utils/utils';
import Cookies from 'process/cookies';
import Analytics from 'process/utils/analytics';
import Tabs from 'process/tabs';
import Constants from './constants';
import Storage from './storage';
import Resources from './resource';

const pageEventHandler = function pageEventHandler(msg, port) {
  const sender = port.sender || {};
  switch (msg.what) {
    case 'getFilters': {
      port.postMessage({ what: 'filters', filters: Resources.bannerFilters.hide });
      return false;
    }
    case 'bannerRemoved': {
      if ((Storage.bannerShowed || []).indexOf(Utils.domain(sender.tab.url)) !== -1) return;
      Logger.debug(`Banner removed on ${Utils.domain(sender.tab.url)}`);
      Storage.bannerShowed = [Utils.domain(sender.tab.url), ...(Storage.bannerShowed || [])];
      return;
    }
    case 'getConsent': {
      const consent = {
        allowedPurposes: Consent.get(Utils.domain((sender.tab || {}).url || 'default') || 'default'),
        allowedVendors: Array.from({ length: 600 }, (v, k) => k + 1),
      };
      port.postMessage({ what: 'consent', requestId: msg.requestId, consent });
      return true;
    }
    case 'getInterests': {
      Interest.getAllCategories().then(interests => {
        port.postMessage({ what: 'interests', requestId: msg.requestId, interests });
      });
      return true;
    }
    case 'getDimensions': {
      const consent = Consent.get();
      const purposes = [];
      for (const id of consent) {
        purposes.push(Resources.adequaPurposes[id - 1].shortname);
      }
      let defaultAllowedPurposes = purposes.join(', ');
      if (defaultAllowedPurposes === '') defaultAllowedPurposes = 'Aucun';

      const d = new Date(Storage.installDate);
      const installDate = `${d.getFullYear()}-${`0${d.getMonth() + 1}`.slice(-2)}-${`0${d.getDate()}`.slice(-2)}`;

      const customDimensions = {
        cd2: defaultAllowedPurposes,
        cd3: installDate,
      };

      port.postMessage({ what: 'dimensions', requestId: msg.requestId, dimensions: customDimensions });

      return true;
    }
    case 'setConsent': {
      Consent.set(msg.allowedPurposes, Utils.domain((sender.tab || {}).url || 'default') || 'default');
      Resources.persist();
      return false;
    }
    default:
      console.log(`Page event not handled : ${msg.what}`);
      break;
  }
  return false;
};

const backEventHandler = function backEventHandler(request, sender, callback) {
  switch (request.what) {
    case 'getBannerRemoved': {
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
          lastFocusedWindow: true,
        });
        const tab = tabs[0] || {};
        const domain = Utils.domain(tab.url);
        callback({
          website: (Storage.bannerShowed || []).indexOf(domain) !== -1,
          total: (Storage.bannerShowed || []).length,
        });
      })();
      return true;
    }
    case 'getTrackerCount': {
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
          lastFocusedWindow: true,
        });
        const tab = tabs[0] || {};
        const domain = Utils.domain(tab.url);
        callback({
          website: (Storage.trackerCount || {})[domain] || 0,
          total: Object.values(Storage.trackerCount || {}).reduce((a, i) => a + i, 0),
        });
      })();
      return true;
    }
    case 'setInterest': {
      Interest.update(request.interest)
        .then(callback)
        .catch(console.warn);
      return true;
    }
    case 'getInterests': {
      Interest.getAll().then(console.log);
      Interest.getAll()
        .then(callback)
        .catch(console.warn);
      return true;
    }
    case 'openPopup': {
      Analytics.sendAnonymousEvent('nourl', 'basic', 'addon_open');
      callback(Constants.showDevFeatures);
      return false;
    }
    case 'openModal': {
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
          lastFocusedWindow: true,
        });
        const tab = tabs[0] || {};

        Tabs.emit(tab, { what: 'openModal' });
        callback();
      })();
      return true;
    }
    case 'addToWhitelist': {
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
        });
        const tab = tabs[0] || {};
        if (!tab.url) return;
        Storage.userBrokenWebsites = [...new Set([...(Storage.userBrokenWebsites || []), Utils.domain(tab.url)])];
        fetch(`${Constants.uri}api/website/broken`, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: tab.url,
            hostname: Utils.domain(tab.url),
          }),
        });
        callback({
          hostname: Utils.domain(tab.url),
          whitelisted: Storage.userBrokenWebsites.indexOf(Utils.domain(tab.url)) !== -1,
        });
      })();
      return true;
    }
    case 'removeFromWhitelist': {
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
        });
        const tab = tabs[0] || {};
        if (!tab.url) return;
        let userBrokenWebsites = new Set(Storage.userBrokenWebsites);
        userBrokenWebsites.delete(Utils.domain(tab.url));
        userBrokenWebsites = Array.from(userBrokenWebsites);
        Storage.userBrokenWebsites = userBrokenWebsites;

        callback({
          hostname: Utils.domain(tab.url),
          whitelisted: Storage.userBrokenWebsites.indexOf(Utils.domain(tab.url)) !== -1,
        });
      })();
      return true;
    }
    case 'getCurrentWebsite': {
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
          lastFocusedWindow: true,
        });
        const tab = tabs[0] || {};
        if (!tab.url || !Storage.userBrokenWebsites) return;
        callback({
          hostname: Utils.domain(tab.url),
          whitelisted: Storage.userBrokenWebsites.indexOf(Utils.domain(tab.url)) !== -1,
        });
      })();
      return true;
    }
    case 'pageView': {
      // Adequa.process.stats.newView(request.url);
      return false;
    }
    case 'getCookiePurposes': {
      callback(Resources.adequaPurposes);
      return true;
    }
    case 'getCookieDomainsByPurpose': {
      return new Promise(resolve => Cookies.getCookieCountByDomains(resolve));
    }
    case 'getCookies': {
      Cookies.getCurrentCookies(callback);
      return true;
    }
    case 'getCookiesByPurpose': {
      return new Promise(resolve => {
        Cookies.getCurrentCookies(cookies => {
          Cookies.sortByPurpose(cookies, resolve);
        });
      });
    }
    case 'deleteCookiesByPurpose': {
      if (request.purpose) {
        Cookies.getCurrentCookies(cookies => {
          Cookies.sortByPurpose(cookies, cookies => {
            for (const cookie of cookies[request.purpose]) Cookies.remove(cookie);

            Analytics.sendAnonymousEvent('nourl', 'tracking', 'addon_cookie_delete', Resources.adequaPurposes[request.purpose - 1].shortname, cookies.length);
            callback();
          });
        });
      }
      return true;
    }
    case 'deleteCookiesByDomain': {
      if (request.domain) {
        (async () => {
          const cookies = await browser.cookies.getAll({ domain: request.domain });
          cookies.forEach(Cookies.remove);
          Analytics.sendAnonymousEvent('nourl', 'tracking', 'addon_cookie_delete', request.domain, cookies.length);
          callback();
        })();
      }
      return true;
    }
    case 'setConsent': {
      Consent.set(request.consent);
      Utils.updateUninstallUrl();
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
          lastFocusedWindow: true,
        });
        const tab = tabs[0] || {};

        Analytics.sendAnonymousEvent(
          (tab || {}).url || 'nourl',
          'consent',
          'default_parameter_change',
          Resources.adequaPurposes[request.changed - 1].shortname,
          request.consent.indexOf(request.changed) !== -1 ? 1 : 0
        );

        const consent = Consent.get(Utils.domain((tab || {}).url || 'default'));
        Tabs.emitAllTabs({ what: 'consent', consent });
      })();
      return false;
    }
    case 'getWebsiteId': {
      (async () => {
        const tabs = await browser.tabs.query({
          active: true,
          lastFocusedWindow: true,
        });

        const tab = tabs[0] || {};
        callback(Utils.domain(tab.url || 'nourl'));
      })();
      return true;
    }
    case 'getDefaultConsent': {
      callback(Consent.get());
      return false;
    }
    case 'getPurposeList': {
      callback(Resources.adequaPurposes);
      return false;
    }
    case 'openTab': {
      browser.tabs.create({ url: request.url });
      return false;
    }
    default:
      console.log(`Event not handled : ${request.what}`);
      break;
  }
  return false;
};

const handler = function handler(request, sender, callback) {
  if (sender.tab) {
    return pageEventHandler(request, sender, callback);
  }
  return backEventHandler(request, sender, callback);
};

export default function() {
  browser.runtime.onMessage.addListener(handler);

  browser.runtime.onConnect.addListener(port => {
    if (port.name === 'contentscript') {
      port.onMessage.addListener(msg => {
        return pageEventHandler(msg, port);
      });
    }
  });
}
