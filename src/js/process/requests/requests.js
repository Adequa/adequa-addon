Adequa.process.requests = {};

const checkRedirect = function (details) {
  if (details.parentFrameId !== -1 || details.initiator) return;

  let redirect = undefined;

  if (details.statusCode === 302) {
    redirect = details.responseHeaders.filter(header => header.name.toLowerCase() === "location")[0].value;
  }

  return redirect;
};

Adequa.process.requests.onBeforeSendHeaders = function (details) {
  let requestHeaders = details.requestHeaders;

  if (Adequa.process.cookie.shouldDelete(details.url, details.tabId, details.initiator)) {
    return {requestHeaders: Adequa.process.cookie.stripCookieHeaders(requestHeaders)};
  }

  Adequa.process.cookie.logCookies(requestHeaders, details.tabId, details.url);
  return {requestHeaders};
};

Adequa.process.requests.onHeadersReceived = function (details) {
  const redirect = checkRedirect(details);
  if (redirect) {
    Adequa.API.tabs.update(details.tabId, {url: redirect});
    return {};
  }

  let responseHeaders = details.responseHeaders;
  // Adequa.storage.tabs[details.tabId] = Adequa.storage.tabs[details.tabId] || {};
  // Adequa.storage.tabs[details.tabId].interest = (responseHeaders.filter(header => header.name.toLowerCase() === "adequa-interest")[0] || {}).value;

  if (Adequa.process.cookie.shouldDelete(details.url, details.tabId, details.initiator)) {
    return {responseHeaders: Adequa.process.cookie.stripCookieHeaders(responseHeaders)};
  }

  Adequa.process.cookie.logCookies(responseHeaders, details.tabId, details.url);
  return {responseHeaders};
};

Adequa.process.requests.onCommitted = function (details) {
  if (details.frameId !== 0 || !details.url.startsWith('http')) return;
  const hostname = Adequa.domain(details.url);
  if (Adequa.storage.userBrokenWebsites && Adequa.storage.userBrokenWebsites.indexOf(hostname) !== -1) return;
  const customRules = (Adequa.storage.customCss || {})[hostname];
  try {
    if (customRules) {
      Adequa.API.tabs.insertCSS(details.tabId, {
        code: customRules,
        runAt: "document_start"
      }, () => {
        void Adequa.API.runtime.lastError
      });
    }
    for (const filters of Adequa.storage.bannerFilters.hide) {
      Adequa.API.tabs.insertCSS(details.tabId, {
        code: filters + '{display:none!important}',
        runAt: "document_start"
      }, () => {
        void Adequa.API.runtime.lastError
      });
    }
  } catch (e) {
    console.log(e);
  }
  Adequa.event.emit({what: 'pageView', url: details.url});
};

Adequa.process.requests.onBeforeRequest = function (details) {
  if (details.type === "main_frame" && details.parentFrameId === -1) {
    const hostname = Adequa.domain(details.url);
    console.log(details.url)
    console.log(hostname)
    Adequa.storage.tabs = Adequa.storage.tabs || {};
    Adequa.storage.tabs[details.tabId] = {
      hostname: hostname,
      domains: [hostname],
      cookies: []
    };
    Adequa.setStorage({});
  }
};
