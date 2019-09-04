import Cookies from 'process/cookies';
import Utils from 'process/utils/utils';
import Resources from '../../resource';

const Requests = {
  onBeforeRequest(details) {
    if (details.type === 'main_frame' && details.parentFrameId === -1) {
      const hostname = Utils.domain(details.url);

      Storage.tabs = Storage.tabs || {};
      Storage.tabs[details.tabId] = {
        hostname,
        domains: [hostname],
        cookies: [],
        removed: 0
      };
      Logger.debug(`New domain for tab ${details.tabId} : ${hostname}`);
    }
  },
  onCommitted(details) {
    if (details.frameId !== 0 || !details.url.startsWith('http')) return;
    const hostname = Utils.domain(details.url);
    if (Storage.userBrokenWebsites && Storage.userBrokenWebsites.indexOf(hostname) !== -1) return;
    const customRules = (Storage.customCss || {})[hostname];
    try {
      if (customRules) {
        browser.tabs.insertCSS(details.tabId, {
          code: customRules,
          runAt: 'document_start',
        });
      }
      if ((Storage.bannerShowed || []).indexOf(hostname) !== -1) {
        for (const filters of Resources.bannerFilters.hide) {
          browser.tabs.insertCSS(details.tabId, {
            code: `${filters}{display:none!important}`,
            runAt: 'document_start',
          });
        }
      } else {
//         browser.tabs.executeScript(details.tabId, {
//           file: '/lib/anime.min.js',
//         });
//         browser.tabs.executeScript(details.tabId, {
//           file: '/lib/particles.js',
//         });
//         browser.tabs.executeScript(details.tabId, {
//           code: `const toHide = '${filters}';const particles = new Particles(toHide,{
//             type: 'rectangle',
//             style: 'stroke',
//             size: 15,
//             color: '#000000',
//             duration: 800,
//             easing: [0.2,1,0.7,1],
//             oscillationCoefficient: 20,
//             particlesAmountCoefficient: 10,
//             direction: 'bottom',
//             canvasPadding: 300
// });setTimeout(() => {particles.disintegrate();document.querySelector(toHide).remove()}, 2000)`,
//         });
        for (const filters of Resources.bannerFilters.hide) {
          browser.tabs.insertCSS(details.tabId, {
            code: `@keyframes adequaFadeOutDown {from {opacity: 1;height:inherit;} to {opacity: 0;transform: translate3d(0, 100%, 0);height:0;}}${filters}{animation: 1s adequaFadeOutDown linear forwards 2s!important}`,
            runAt: 'document_start',
          });
        }
      }

    } catch (e) {
      console.log(e);
    }
  },
  onHeadersReceived(details) {
    const { responseHeaders } = details;

    if (Cookies.shouldDelete(details.url, details.tabId, details.initiator)) {
      return { responseHeaders: Cookies.stripCookieHeaders(responseHeaders, details.initiator, details.tabId) };
    }

    Cookies.logCookies(responseHeaders, details.tabId, details.url);
    return { responseHeaders };
  },
  onBeforeSendHeaders(details) {
    const { requestHeaders } = details;

    if (Cookies.shouldDelete(details.url, details.tabId, details.initiator)) {
      return { requestHeaders: Cookies.stripCookieHeaders(requestHeaders, details.initiator, details.tabId) };
    }

    Cookies.logCookies(requestHeaders, details.tabId, details.url);
    return { requestHeaders };
  },
};

export default Requests;
