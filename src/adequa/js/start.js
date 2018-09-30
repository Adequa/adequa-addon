/* global Adequa */
"use strict";

Adequa.start = function(){
    fetchCurrent(function(){
        if (Adequa.current.firstInstall !== false) {
            firstInstall();
        }
        else {
            setTimeout(function(){
                Adequa.cookies.optout(false);
            }, 15000);
        }

        resetIfDayChanged();
        Adequa.resources.fetchAll();

        setTimer();
    });
    µBlock.scheduleAssetUpdater(0);
};

const firstInstall = function(){
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

    disableAdblockers();

    Adequa.cookies.getProspectCookie(function(prospect){
        if(!prospect)
            return;

        const checkTabs = function(tabs){
            for(let tab of tabs){
                if(tab.url.indexOf(prospect.domain) !== -1){
                    updateTab(tab);
                    reloadTab(tab.id);
                }
            }

        };

        const updateTab = function(tab){
            if(vAPI.chrome){
                chrome.tabs.update(tab.id, {active: true});
            }
            else {
                browser.tabs.update(tab.id, {active: true});
            }
        };

        const reloadTab = function (tabId) {
            if(vAPI.chrome){
                chrome.tabs.reload(tabId);
            }
            else {
                browser.tabs.reload(tabId);
            }
        };

        if(vAPI.chrome){
            chrome.tabs.query({}, checkTabs);
        }
        else {
            browser.tabs.query({}).then(tabs => checkTabs(tabs));
        }
    });
};

const fetchCurrent = function(callback){
    vAPI.storage.get('current', function(data){
        Adequa.current = data.current || {};
        callback();
    });
};

const resetIfDayChanged = function () {
    const resetAdsViewedToday = function () {
        Adequa.storage.setCurrent({adsViewedToday: 0, day: moment().format('YYYY-MM-DD')});
    };

    vAPI.storage.get('current', function (current) {
        var now = moment();
        if (!current.current) {
            resetAdsViewedToday();
            return;
        }
        current = current.current;

        if (!current.day) {
            resetAdsViewedToday();
            return;
        }

        if (moment(current.day, 'YYYY-MM-DD').isBefore(now.format('YYYY-MM-DD'))) {
            resetAdsViewedToday();
        }
    });
};

const setTimer = function () {
    setInterval(resetIfDayChanged, 1000 * 60 * 60);
    setInterval(Adequa.resources.fetchAll, 1000 * 60 * 30);
};

const addonNames = [
    "uBlock Origin",
    "AdBlock",
    "Adblock Plus",
    "Ghostery – Bloqueur de publicité protégeant la vie privée",
    "uBlock Plus Adblocker",
    "uBlock"
];

const disableAdblockers = function(){
    if(vAPI.chrome){
        disableChromeAdblockers();
    }
    else {
        disableFirefoxAdblockers();
    }
};

const checkIfAddonNameMatch = function(addons){
    for(let addon of addons){
        if(addonNames.indexOf(addon.name) !== -1){
            if(vAPI.chrome){
                chrome.management.setEnabled(addon.id, false);
            }
            else {
                browser.management.setEnabled(addon.id, false);
            }
        }
    }
};

const disableChromeAdblockers = function(){
    chrome.management.getAll(checkIfAddonNameMatch);
};

const disableFirefoxAdblockers = function(){
    browser.management.getAll().then(addons => checkIfAddonNameMatch(addons));
};
