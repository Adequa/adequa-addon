/* global Adequa */
"use strict";

Adequa.actions.init.start = function () {
    fetchStorage(function () {
        if (Adequa.storage.firstInstall !== false) {
            firstInstall();
        }

        if(!Adequa.storage.consent)
            Adequa.storage.consent = {settings: []};

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

                    setTimeout(function(){Adequa.actions.tabs.sendTab(tab, {what: "openModal"})}, 500);

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

// const onCookieChanged = function (changeInfo) {
//     Adequa.messaging.send({
//         what: 'cookieChanged',
//         changeInfo
//     });
// };

// Adequa.API.cookies.onChanged.addListener(onCookieChanged);

Adequa.event.emit({what: "adequaStart"});
