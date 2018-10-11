/* global Adequa */
"use strict";

Adequa.start = function () {
    fetchCurrent(function () {
        if (Adequa.current.firstInstall !== false) {
            firstInstall();
        }
        else {
            setTimeout(function () {
                Adequa.cookies.optout(false);
            }, 15000);
        }

        if (Adequa.current.partnerList) {
            for (let partner in Adequa.current.partnerList) {
                if (!µBlock.getNetFilteringSwitch('https://' + partner)) {
                    µBlock.toggleNetFilteringSwitch('https://' + partner);
                }
            }
        }

        Adequa.resources.fetchAll();

        disableAdblockers();

        setTimer();
    });
    µBlock.hiddenSettings.ignoreRedirectFilters = true;
    µBlock.scheduleAssetUpdater(0);
};

const firstInstall = function () {
    if (!Adequa.current.addonID) {
        vAPI.tabs.open({url: vAPI.getURL('/adequa/first-install.html')});

        const req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                const response = JSON.parse(this.responseText);
                const addonID = response.addon_id;
                const addonToken = response.token;

                Adequa.storage.setCurrent({addonID, addonToken});
                //Set uninstall url to open
                vAPI.app.setUninstallURL(Adequa.uri + 'au-revoir?addon_id=' + addonID + '&token=' + addonToken);
            }
        };
        req.open('post', Adequa.uri + 'api/addon/create');
        req.send(null);
    }
    Adequa.cookies.getProspectCookie(function (prospect) {
        if (!prospect)
            return;

        const checkTabs = function (tabs) {
            for (let tab of tabs) {
                if (tab.url.indexOf(prospect.domain) !== -1) {
                    updateTab(tab);
                    reloadTab(tab.id);
                }
            }

        };

        const updateTab = function (tab) {
            if (vAPI.chrome) {
                chrome.tabs.update(tab.id, {active: true});
            }
            else {
                browser.tabs.update(tab.id, {active: true});
            }
        };

        const reloadTab = function (tabId) {
            if (vAPI.chrome) {
                chrome.tabs.reload(tabId);
            }
            else {
                browser.tabs.reload(tabId);
            }
        };

        if (vAPI.chrome) {
            chrome.tabs.query({}, checkTabs);
        }
        else {
            browser.tabs.query({}).then(tabs => checkTabs(tabs));
        }
    });
};

const fetchCurrent = function (callback) {
    vAPI.storage.get('current', function (data) {
        Adequa.current = data.current || {};
        callback();
    });
};

const setTimer = function () {
    setInterval(Adequa.resources.fetchAll, 1000 * 60 * 30);
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
    }
    else {
        disableFirefoxAdblockers();
    }
};

const checkIfAddonNameMatch = function (addons) {
    for (let addon of addons) {
        if (addon.enabled && addonNames.indexOf(addon.name) !== -1) {
            if (vAPI.chrome) {
                chrome.management.setEnabled(addon.id, false);
            }
            else {
                browser.management.setEnabled(addon.id, false);
            }
            Adequa.storage.setCurrent({adblockUninstalled: (Adequa.current.adblockUninstalled || 0) + 1});
        }
    }

    Adequa.request.post(Adequa.uri + `api/addon/adblock-uninstalled/${Adequa.current.addonToken}/${Adequa.current.addonID}`, Adequa.request.encoreUrlParams({adblock_uninstalled: Adequa.current.adblockUninstalled || 0})).catch(console.warn);
};

const disableChromeAdblockers = function () {
    chrome.management.getAll(checkIfAddonNameMatch);
};

const disableFirefoxAdblockers = function () {
    browser.management.getAll().then(addons => checkIfAddonNameMatch(addons));
};
