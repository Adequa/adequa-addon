import store from '../../../../src/store';
import * as types from '../../../../src/store/mutation-types';
import Utils from '../../../addon-utils';
import Cookies from './cookies';

const Requests = {
  logCookies(headers, tabId, url) {
    if (!store.state.tabs[tabId]) return;
    const cookies = headers.filter(header => header.name.toLowerCase().indexOf('set-cookie') !== -1).map(header => header.value.split('=')[0]);

    store.commit(types.SET_TAB, {
      tabId,
      tab: {
        hostname: store.state.tabs[tabId]?.hostname,
        domains: Array.from(new Set([...store.state.tabs[tabId]?.domains, Utils.domain(url)])),
        cookies: Array.from(new Set([...store.state.tabs[tabId]?.cookies, ...cookies])),
      },
    });
  },
  onBeforeRequest(details) {
    if (details.type === 'main_frame' && details.parentFrameId === -1) {
      const hostname = Utils.domain(details.url);
      store.commit(types.SET_TAB, {
        tabId: details.tabId,
        tab: {
          hostname,
          domains: [hostname],
          cookies: [],
        },
      });
    }
  },
  stripCookieHeaders(headers) {
    return headers.filter(header => header.name.toLowerCase().indexOf('cookie') === -1);
  },
  onBeforeSendHeaders(details) {
    const { requestHeaders } = details;

    if (Cookies.shouldDelete(details.url, details.tabId, details.initiator)) {
      return { requestHeaders: Requests.stripCookieHeaders(requestHeaders) };
    }

    Requests.logCookies(requestHeaders, details.tabId, details.url);
    return { requestHeaders };
  },
  onHeadersReceived(details) {
    const { responseHeaders } = details;

    if (Cookies.shouldDelete(details.url, details.tabId, details.initiator)) {
      return { responseHeaders: Requests.stripCookieHeaders(responseHeaders) };
    }

    Requests.logCookies(responseHeaders, details.tabId, details.url);
    return { responseHeaders };
  },
  onCommitted(details) {
    if (details.frameId !== 0 || !details.url.startsWith('http')) return;
    const hostname = Utils.domain(details.url);
    if (store.state.userBrokenWebsites?.indexOf(hostname) !== -1) return;
    const customRules = (store.state.customCss || {})[hostname];
    if (customRules) {
      browser.tabs.insertCSS(details.tabId, {
        code: customRules,
        runAt: 'document_start',
      });
    }
    for (const filters of store.state?.bannerFilters?.hide) {
      browser.tabs.insertCSS(details.tabId, {
        code: `${filters}{display:none!important}`,
        runAt: 'document_start',
      });
    }
  },
};

export default Requests;
