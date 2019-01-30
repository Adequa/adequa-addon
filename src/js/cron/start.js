/* global Adequa */
"use strict";

Adequa.actions.init.start = function () {
    fetchStorage(function () {
        if (Adequa.storage.firstInstall !== false) {
            firstInstall();
        }

        if(!Adequa.storage.consent)
            Adequa.storage.consent = {settings: []};

        if(!Adequa.storage.addonToken){
            Adequa.request.get(Adequa.uri + `api/token/create`, {}).then((data) => {
                Adequa.setStorage({addonToken: JSON.parse(data.response)});
            }).catch(console.warn);
        }

        Adequa.cron.poll.setup();
    });
};

const firstInstall = function () {
    Adequa.setStorage({
        installDate: Date.now(),
    });
    Adequa.actions.cookie.getProspectCookie(function (prospect) {
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

                    setTimeout(function(){Adequa.actions.tabs.emit(tab, {what: "openModal"})}, 1000);

                    Adequa.setStorage({convertedFrom: prospect.domain});
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

const onCommitted = function(details){
    if(details.frameId !== 0 || !details.url.startsWith('http')) return;

    try {
        for (const filters of Adequa.storage.bannerFilters.hide) {
            Adequa.API.tabs.insertCSS(details.tabId, {
                code: filters + '{display:none!important}',
                runAt: "document_start"
            }, () => {void Adequa.API.runtime.lastError});
        }
    } catch(e) {
        console.log(e);
    }
    Adequa.event.emit({what: 'pageView', url: details.url});
};

Adequa.API.webNavigation.onCommitted.addListener(onCommitted);

Adequa.event.emit({what: "adequaStart"});

Adequa.API.tabs.onUpdated.addListener(function(tabId, changeInfo){
    if(changeInfo.url){
        const tabs = {};
        tabs[tabId] = Adequa.hostname(changeInfo.url);
        Adequa.setStorage({tabs});
    }
});

chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
    let requestHeaders = details.requestHeaders;
    let newHeaders = [];
    if(Adequa.hostname(details.url) !== Adequa.storage.tabs[details.tabId]){
        newHeaders = requestHeaders.filter(header => header.name.toLowerCase().indexOf("cookie") === -1);
        return {requestHeaders: newHeaders};
    }
    return {requestHeaders};
}, {urls: ["<all_urls>"]}, ['requestHeaders', 'blocking']);
chrome.webRequest.onHeadersReceived.addListener(function(details){
    let responseHeaders = details.responseHeaders;
    let newHeaders = [];
    if(Adequa.hostname(details.url) !== Adequa.storage.tabs[details.tabId]){
        newHeaders = responseHeaders.filter(header => header.name.toLowerCase().indexOf("cookie") === -1);
        return {responseHeaders: newHeaders};
    }
    return {responseHeaders};
}, {urls: ["<all_urls>"]}, ['responseHeaders', 'blocking']);
