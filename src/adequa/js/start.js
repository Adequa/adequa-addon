/* global Adequa */
"use strict";
if(!Adequa.current)
    Adequa.current = {};
if(!Adequa.current.tabs)
    Adequa.current.tabs = {};

Adequa.start = function(){
    fetchCurrent(function(){
        if (Adequa.current.firstInstall !== false) {
            firstInstall();
        }

        resetIfDayChanged();
        Adequa.resources.fetchAll();

        setTimer();
    });
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

    // Adequa.storage.setCurrent({firstInstall: false});
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
    setTimeout(function(){
        Adequa.cookies.optout(Adequa.current.firstInstall);
    }, 15000);

    setInterval(resetIfDayChanged, 1000 * 60 * 60);
    setInterval(Adequa.resources.fetchAll, 1000 * 60 * 30);
};
