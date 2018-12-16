/* global Adequa */
"use strict";

Adequa.actions.init.start = function () {
    fetchCurrent(function () {
        disableAdblockers();
        if (Adequa.current.firstInstall !== false) {
            firstInstall();
        } else {
            if (!Adequa.current.addonToken) {
                Adequa.request.post(Adequa.uri + `api/addon/create`, {}).then((data) => {
                    Adequa.storage.setCurrent({addonToken: JSON.parse(data.response)});
                }).catch(console.warn);
            }
        }

        Adequa.actions.resources.fetchAll();
        Adequa.addPartnerToWhitelist();

        setTimer();
    });
    µBlock.hiddenSettings.ignoreRedirectFilters = true;
    µBlock.scheduleAssetUpdater(0);
};

const firstInstall = function () {
    Adequa.storage.setCurrent({
        installDate: Date.now(),
        nbMaxAdsPerDay: 25,
        server: {
            installDate: Date.now(),
            browser: vAPI.firefox ? 'firefox' : 'chrome'
        }
    });
    Adequa.request.post(Adequa.uri + `api/addon/create`, {}).then((data) => {
        Adequa.storage.setCurrent({addonToken: JSON.parse(data.response)});
    }).catch(console.warn);
    Adequa.actions.cookie.getProspectCookie(function (prospect) {
        if (!prospect) {
            Adequa.storage.setCurrent({postInstallOpened: true})
            return vAPI.tabs.open({url: vAPI.getURL('/adequa/post-installation.html')});
        }

        const checkTabs = function (tabs) {
            for (let tab of tabs) {
                if (tab.url.indexOf(prospect.domain) !== -1) {
                    updateTab(tab);
                    reloadTab(tab.id);
                    let data = Object.assign({}, Adequa.current.server);
                    data.new = {
                        converted_from: prospect.domain
                    };
                    Adequa.storage.setCurrent({convertedFrom: prospect.domain});
                }
            }

        };

        const updateTab = function (tab) {
            if (vAPI.chrome) {
                chrome.tabs.update(tab.id, {active: true});
            } else {
                browser.tabs.update(tab.id, {active: true});
            }
        };

        const reloadTab = function (tabId) {
            if (vAPI.chrome) {
                chrome.tabs.reload(tabId);
            } else {
                browser.tabs.reload(tabId);
            }
        };

        if (vAPI.chrome) {
            chrome.tabs.query({}, checkTabs);
        } else {
            browser.tabs.query({}).then(tabs => checkTabs(tabs));
        }
    });
    Adequa.storage.setCurrent({firstInstall: false});
};

const fetchCurrent = function (callback) {
    vAPI.storage.get('current', function (data) {
        Adequa.current = data.current || {tabs: {}, versions: {}};
        callback();
    });
};

const setTimer = function () {
    setInterval(Adequa.actions.resources.fetchAll, 1000 * 60 * 30);
};

const addonNames = [
    "uBlock Origin",
    "AdBlock",
    "Adblock Plus",
    "Ghostery – Bloqueur de publicité protégeant la vie privée",
    "uBlock Plus Adblocker",
    "uBlock",
    "Fair AdBlocker"
];

const disableAdblockers = function () {
    if (vAPI.chrome) {
        disableChromeAdblockers();
    } else {
        disableFirefoxAdblockers();
    }
};

const checkIfAddonNameMatch = function (addons) {
    for (let addon of addons) {
        if (addon.enabled && addonNames.indexOf(addon.name) !== -1) {
            if (vAPI.chrome) {
                chrome.management.setEnabled(addon.id, false);
            } else {
                browser.management.setEnabled(addon.id, false);
            }
            Adequa.storage.setCurrent({adblockUninstalled: (Adequa.current.adblockUninstalled || 0) + 1});
        }
    }
    let data = Object.assign({}, Adequa.current.server);
    data.new = {
        adblocks_disabled: Adequa.current.adblockUninstalled || 0
    };
    Adequa.request.post(Adequa.uri + `api/addon/adblock-uninstalled`, JSON.stringify(data), true).then(() => {
        Adequa.storage.setCurrent({
            server: {
                adblocks_disabled: Adequa.current.adblockUninstalled
            }
        });
    }).catch(console.warn);
};

const disableChromeAdblockers = function () {
    chrome.management.getAll(checkIfAddonNameMatch);
};

const disableFirefoxAdblockers = function () {
    browser.management.getAll().then(addons => checkIfAddonNameMatch(addons));
};

const onCookieChanged = function (changeInfo) {
    Adequa.messaging.send({
        what: 'cookieChanged',
        changeInfo
    });
};

vAPI.cookies.onChanged.addListener(onCookieChanged);
