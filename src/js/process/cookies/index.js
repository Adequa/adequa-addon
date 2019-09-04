import Consent from 'model/consent';
import Utils from 'process/utils/utils';
import Resources from '../../resource';

const Cookies = {
  async getProspectCookie(callback) {
    const cookies = await browser.cookies.getAll({ name: 'adequa-wait-for-return' });
    if (cookies[0]) return callback(cookies[0]);
    return callback();
  },
  remove(cookie) {
    const url = `http${cookie.secure ? 's' : ''}://${cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain}${cookie.path}`;
    browser.cookies.remove({ url, name: cookie.name });
  },
  sortByPurpose(cookies, callback) {
    const purposes = {};
    for (const cookie of cookies) {
      const domain = Resources.cookiesDefault[Utils.domain(cookie.domain.startsWith('.') ? cookie.domain.substr(1) : cookie.domain)] || {};
      let purpose = domain.purpose || 1;

      if (purpose === 'unknown') purpose = 1;

      if (!purposes[purpose]) purposes[purpose] = [];
      cookie.website = domain.website;
      purposes[purpose].push(cookie);
    }
    console.log(purposes);
    callback(purposes);
  },
  async getCurrentCookies(callback) {
    const tabs = browser.tabs.query({
      active: true,
    });
    const tab = tabs[0] || {};
    const cookies = await browser.cookies.getAll({});
    if (!Storage.tabs[tab.id])
      return callback(
        cookies.map(cookie => {
          cookie.active = false;
          return cookie;
        })
      );

    const currentCookies = Storage.tabs[tab.id].cookies;

    callback(
      cookies.map(cookie => {
        cookie.active = currentCookies.indexOf(cookie.name) !== -1;
        return cookie;
      })
    );
  },
  async getCurrentDomains(cookies, callback) {
    const tabs = await browser.tabs.query({
      active: true,
    });
    const tab = tabs[0] || {};
    if (!Storage.tabs[tab.id])
      return callback(
        cookies.map(cookie => {
          cookie.active = false;
          return cookie;
        })
      );

    const currentDomains = Storage.tabs[tab.id].domains;

    callback(
      cookies.map(cookie => {
        cookie.active = currentDomains.indexOf(Utils.domain(cookie.domain)) !== -1;
        return cookie;
      })
    );
  },
  async getCookieCountByDomains(callback) {
    const cookies = await browser.cookies.getAll({});

    Cookies.getCurrentDomains(cookies, cookies => {
      Cookies.sortByPurpose(cookies, cookies => {
        const result = {};
        Object.entries(cookies).forEach(purpose => {
          purpose[1] = purpose[1]
            .map(cookie => ({ domain: Utils.domain(cookie.domain), active: cookie.active, website: cookie.website }))
            .reduce((collector, item) => {
              if (collector.has(item.domain)) {
                const current = collector.get(item.domain);
                current.count++;
                current.active = item.active || current.active;
                collector.set(item.domain, current);
              } else {
                item.count = 1;
                collector.set(item.domain, item);
              }
              return collector;
            }, new Map());
          result[purpose[0]] = Array.from(purpose[1].values()).sort((a, b) =>
            a.domain
              .toString()
              .toLowerCase()
              .localeCompare(b.domain.toString().toLowerCase())
          );
        });

        callback(result);
      });
    });
  },
  stripCookieHeaders(headers, initiator, tabId) {
    const cookies = headers.filter(header => header.name.toLowerCase().indexOf('set-cookie') !== -1);
    if (cookies.length) {
      const domain = Utils.domain(initiator);
      if (Storage.tabs[tabId]) {
        Storage.tabs[tabId].removed = (Storage.tabs[tabId].removed || 0) + cookies.length;
        browser.browserAction.setBadgeText({
          text: `${Storage.tabs[tabId].removed}`,
          tabId,
        });
      }
      Storage.trackerCount = Storage.trackerCount || {};
      Storage.trackerCount[domain] = (Storage.trackerCount[domain] || 0) + cookies.length;
    }
    return headers.filter(header => header.name.toLowerCase().indexOf('cookie') === -1);
  },
  logCookies(headers, tabId, url) {
    if (!Storage.tabs[tabId]) return;
    const cookies = headers.filter(header => header.name.toLowerCase().indexOf('set-cookie') !== -1).map(header => header.value.split('=')[0]);

    cookies.forEach(cookie => {
      Storage.tabs[tabId].cookies.push(cookie);
      Storage.tabs[tabId].domains.push(Utils.domain(url));
    });

    Storage.tabs[tabId].cookies = Array.from(new Set(Storage.tabs[tabId].cookies));
    Storage.tabs[tabId].domains = Array.from(new Set(Storage.tabs[tabId].domains));
  },
  shouldDelete(url, tabId, initiator) {
    const hostname = Utils.domain(url);
    if (Resources.userBrokenWebsites && Resources.userBrokenWebsites.indexOf(Utils.domain(initiator)) !== -1) {
      Logger.debug(`${Utils.domain(initiator)} is whitelisted - Cookies not deleted`);
      return false;
    }
    if (Resources.userBrokenWebsites && Resources.userBrokenWebsites.indexOf(hostname) !== -1) {
      Logger.debug(`${hostname} is whitelisted - Cookies not deleted`);
      return false;
    }

    if (!Resources.cookiePurposes && !Resources.cookiesDefault) {
      Logger.debug(`Resources not loaded - Cookies not deleted on ${hostname}`);
      return false;
    }

    const website = (Storage.tabs[tabId] || {}).hostname;
    if (website === hostname) {
      Logger.debug(`First-party request on ${website} - Cookies not deleted on ${hostname}`);
      return false;
    }
    const purpose = (((Resources.cookiePurposes || {})[website] || Resources.cookiesDefault)[hostname] || Resources.cookiesDefault[hostname] || {}).purpose || 'unknown';

    if (purpose === '1') {
      Logger.debug(`${hostname} is a critical domain - Cookies not deleted on ${hostname}`);
      return false;
    }
    if (purpose === 'unknown') {
      Logger.debug(`${hostname} is an unknown domain - Cookies not deleted on ${hostname}`);
      return false;
    }
    if (purpose === 'deleted') {
      Logger.debug(`${hostname} is a deleted domain - Cookies deleted on ${hostname}`);
      return true;
    }

    if (tabId === -1) {
      Logger.debug(`Unknown tab id - Cookies not deleted on ${hostname}`);
      return false;
    }

    const allowedPurposes = Consent.get(website);
    const purposesToDelete = Resources.adequaPurposes.map(purpose => purpose.id).filter(purposeId => allowedPurposes.indexOf(purposeId) === -1);

    if (purposesToDelete.indexOf(parseInt(purpose, 10)) !== -1) {
      Logger.debug(`Purpose ${purpose} not accepted on ${website} - Cookies deleted on ${hostname}`);
      return true;
    }

    Logger.debug(`Purpose ${purpose} accepted on ${website} - Cookies not deleted on ${hostname}`);
    return false;
  },
};

export default Cookies;
