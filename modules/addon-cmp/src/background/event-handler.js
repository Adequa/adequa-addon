import Events from '../../../addon-events';
import Requests from './requests';

export const registerEventHandlers = function registerEventHandlers() {
  Events.addMessageListener(Events.types.OPEN_MODAL, async () => {
    const currentTab = await browser.tabs.query({
      lastFocusedWindow: true,
      active: true,
    });
    browser.tabs.sendMessage(currentTab[0]?.id, { type: Events.types.OPEN_MODAL });
  });
  Events.addMessageListener(Events.types.GET_COOKIES, async (message, sender, callback) => {
    const cookies = await browser.cookies.getAll({});
    console.log(cookies);
    console.log(message, sender, callback);
    callback(cookies);
  });

  browser.webRequest.onBeforeRequest.addListener(Requests.onBeforeRequest, { urls: ['<all_urls>'] });
  browser.webNavigation.onCommitted.addListener(Requests.onCommitted);

  const extraInfoSpec = ['blocking'];
  if (browser.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty('EXTRA_HEADERS')) extraInfoSpec.push('extraHeaders');

  browser.webRequest.onBeforeSendHeaders.addListener(Requests.onBeforeSendHeaders, { urls: ['<all_urls>'] }, ['requestHeaders', ...extraInfoSpec]);
  browser.webRequest.onHeadersReceived.addListener(Requests.onHeadersReceived, { urls: ['<all_urls>'] }, ['responseHeaders', ...extraInfoSpec]);
};
