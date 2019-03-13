/* global Adequa */
"use strict";

Adequa.process.init.start = function () {
  fetchStorage(function () {
    if (Adequa.storage.firstInstall !== false) {
      firstInstall();
    }

    if (!Adequa.storage.consent)
      Adequa.storage.consent = {settings: []};

    if (!Adequa.storage.addonToken) {
      Adequa.request.get(Adequa.uri + `api/token/create`, {}).then((data) => {
        Adequa.setStorage({addonToken: JSON.parse(data.response)});
      }).catch(console.warn);
    }

    Adequa.cron.poll.setup();

    Adequa.API.tabs.query({}, function (tabs) {
      Adequa.storage.tabs = {};
      tabs.forEach((tab) => {
        const hostname = Adequa.domain(tab.url);
        Adequa.storage.tabs[tab.id] = {
          hostname: hostname,
          domains: [hostname],
          cookies: []
        };
      });
      Adequa.setStorage({});
    });

    registerListeners();
  });
};

const firstInstall = function () {
  Adequa.setStorage({
    installDate: Date.now(),
  });

  setTimeout(() => {
    Adequa.updateUninstallUrl();
    Adequa.process.analytics.sendAnonymousEvent(Adequa.storage.convertedFrom || "nourl", 'basic', 'addon_install', undefined, 1);
  }, 5000);

  Adequa.process.cookie.getProspectCookie(function (prospect) {
    if (!prospect) {
      return;
      // Adequa.setStorage({postInstallOpened: true})
      // return Adequa.API.tabs.open({url: Adequa.API.runtime.getURL('/adequa/post-installation.html')});
    }

    const checkTabs = function (tabs) {
      for (let tab of tabs) {
        if (tab.url.indexOf(prospect.domain) !== -1) {
          updateTab(tab);
          reloadTab(tab.id);

          Adequa.setStorage({convertedFrom: Adequa.hostname(tab.url)});
        }
      }
    };

    const updateTab = function (tab) {
      Adequa.API.tabs.update(tab.id, {active: true});
    };

    const reloadTab = function (tabId) {
      Adequa.API.tabs.reload(tabId);
    };
    Adequa.API.tabs.query({}, checkTabs)
  });
  Adequa.setStorage({firstInstall: false});
};

const fetchStorage = function (callback) {
  Adequa.API.storage.get('storage', function (data) {
    Adequa.storage = data.storage || {tabs: {}, versions: {}};
    callback();
  });
};

const registerCheckRequests = function () {
  if (!Adequa.storage.websiteRequests) return setTimeout(registerCheckRequests, 1000);
  const websites = [];
  for (const website in Adequa.storage.websiteRequests) {
    websites.push(website+"*");
  }
  console.log(websites)
  Adequa.API.webRequest.onBeforeRequest.addListener(Adequa.process.interests.checkRequest, {urls: websites}, ["requestBody"]);
};

const registerListeners = function () {
  Adequa.API.webNavigation.onCommitted.addListener(Adequa.process.requests.onCommitted);

  Adequa.API.tabs.onUpdated.addListener(Adequa.process.tabs.onUpdated);

  const extraInfoSpec = ['blocking'];
  if (Adequa.API.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty('EXTRA_HEADERS')) extraInfoSpec.push('extraHeaders');

  Adequa.API.webRequest.onBeforeSendHeaders.addListener(Adequa.process.requests.onBeforeSendHeaders, {urls: ["<all_urls>"]}, ['requestHeaders', ...extraInfoSpec]);
  Adequa.API.webRequest.onHeadersReceived.addListener(Adequa.process.requests.onHeadersReceived, {urls: ["<all_urls>"]}, ['responseHeaders', ...extraInfoSpec]);
  Adequa.API.webRequest.onBeforeRequest.addListener(Adequa.process.requests.onBeforeRequest, {urls: ["<all_urls>"]});
  registerCheckRequests();
};

Adequa.event.emit({what: "adequaStart"});
