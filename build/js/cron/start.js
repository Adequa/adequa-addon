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


Adequa.API.webNavigation.onCommitted.addListener(Adequa.actions.tabs.requests.onCommitted);

Adequa.API.tabs.onUpdated.addListener(Adequa.actions.tabs.onUpdated);

Adequa.API.webRequest.onBeforeSendHeaders.addListener(Adequa.actions.tabs.requests.onBeforeSendHeaders, {urls: ["<all_urls>"]}, ['requestHeaders', 'blocking']);
Adequa.API.webRequest.onHeadersReceived.addListener(Adequa.actions.tabs.requests.onHeadersReceived, {urls: ["<all_urls>"]}, ['responseHeaders', 'blocking']);

Adequa.event.emit({what: "adequaStart"});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-134079678-1']);

(function() {
    const ga = document.createElement('script'); ga.type = 'text/javascript';
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
