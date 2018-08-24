/*******************************************************************************

 uBlock Origin - a browser extension to block requests.
 Copyright (C) 2014-2018 Raymond Hill

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see {http://www.gnu.org/licenses/}.

 Home: https://github.com/gorhill/uBlock
 */

/* global publicSuffixList */

'use strict';

const env = 'prod';
const uri = env.match('dev') ? 'http://localhost:3000/' : 'https://admin-equa.com/';

/******************************************************************************/

// Load all: executed once.

µBlock.restart = (function () {

  /******************************************************************************/

  var µb = µBlock;

  /******************************************************************************/

  vAPI.app.onShutdown = function () {
    µb.staticFilteringReverseLookup.shutdown();
    µb.assets.updateStop();
    µb.staticNetFilteringEngine.reset();
    µb.staticExtFilteringEngine.reset();
    µb.sessionFirewall.reset();
    µb.permanentFirewall.reset();
    µb.sessionURLFiltering.reset();
    µb.permanentURLFiltering.reset();
    µb.hnSwitches.reset();
  };

  /******************************************************************************/

  var processCallbackQueue = function (queue, callback) {
    var processOne = function () {
      var fn = queue.pop();
      if (fn) {
        fn(processOne);
      } else if (typeof callback === 'function') {
        callback();
      }
    };
    processOne();
  };

var trackingOptout = function(shouldRemoveCookies){
    var getUrlParams = function(search) {
        let hashes = search.slice(search.indexOf('?') + 1).split('&');
        let params = {};
        hashes.map(hash => {
            let [key, val] = hash.split('=');
            params[key] = decodeURIComponent(val)
        });

        return params
    };

    var getStatus = function(url, callback){
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onreadystatechange = function (e) {
            if(req.readyState === 4) {
                if(req.status === 200)
                    callback(getUrlParams(req.responseURL))
            }
        };
        req.onerror = function(error){
            //console.error(error)
        };
        req.send(null);
    };

    var optOut = function(item, params){
        for(let url of item.optout_urls) {
            url = url + params.token;

            var req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.onerror = function(error){
                //console.error(error)
            };
            req.send(null);
        }
    };

    var yocRequests = function(){
        var req = new XMLHttpRequest()
        req.open('GET', './assets/yoc.json', true)
        req.onreadystatechange = function (e) {
            if (req.readyState === 4 && (req.status === 200 || req.status === 0)) {
                var list = JSON.parse(req.responseText)

                for (let item of list) {
                    for(let url of item.status_urls)
                        getStatus(url, function(params){
                            params.token = params.token || "";
                            optOut(item, params)
                        })
                }
                req = null
            }
        };
        req.onerror = function(error){
            //console.error(error)
        };
        req.send(null);
    };

    var removeCookies = function(){
        var removeCookie = function(cookie) {
            var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain +
                cookie.path;
            chrome.cookies.remove({"url": url, "name": cookie.name});
        };

        var req = new XMLHttpRequest()
        req.open('GET', './assets/cookies.json', true)
        req.onreadystatechange = function (e) {
            if (req.readyState === 4 && (req.status === 200 || req.status === 0)) {
                var list = JSON.parse(req.responseText)

                for (let cookie of list) {
                    chrome.cookies.getAll({domain: cookie.domain}, function(cookies) {
                        for(let c of cookies) {
                            removeCookie(c);
                        }
                    });
                }
                req = null;
                setTimeout(addCookies, 3000)
            }
        };
        req.onerror = function(error){
            //console.error(error)
        };
        req.send(null);
    };

    var addCookies = function(){
        var req = new XMLHttpRequest()
        req.open('GET', './assets/cookies.json', true)
        req.onreadystatechange = function (e) {
            if (req.readyState === 4 && (req.status === 200 || req.status === 0)) {
                var list = JSON.parse(req.responseText)

                for (let cookie of list) {
                    chrome.cookies.set(cookie);
                }
                req = null
            }
        };
        req.onerror = function(error){
            //console.error(error)
        };
        req.send(null);
    };
    if(shouldRemoveCookies)
        removeCookies();
    // yocRequests();
    addCookies();
};

/******************************************************************************/

// Final initialization steps after all needed assets are in memory.
// - Initialize internal state with maybe already existing tabs.
// - Schedule next update operation.

  var onAllReady = function () {
    // https://github.com/chrisaljoudi/uBlock/issues/184
    // Check for updates not too far in the future.
    µb.assets.addObserver(µb.assetObserver.bind(µb));
    µb.scheduleAssetUpdater(µb.userSettings.autoUpdate ? 7 * 60 * 1000 : 0);

    // vAPI.cloud is optional.
    if (µb.cloudStorageSupported) {
      vAPI.cloud.start([
        'tpFiltersPane',
        'myFiltersPane',
        'myRulesPane',
        'whitelistPane'
      ]);
    }

    if (µb.firstInstall === true) {
      const req = new XMLHttpRequest();
      req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = JSON.parse(this.responseText);
          const addonID = response.addon_id;
          const addonToken = response.token;

          vAPI.storage.set({addonID, addonToken});

          //Set uninstall url to open
          vAPI.app.setUninstallURL(uri + 'au-revoir?addon_id=' + addonID + '&token=' + addonToken);
        }
      };
      req.open('post', uri + 'api/addon/create');
      req.send(null);

      vAPI.adequa.storage.setFirstInstall(µb.firstInstall);
      µb.scheduleAssetUpdater(0);
      µb.assets.updateStart({
        delay: µb.hiddenSettings.manualUpdateAssetFetchPeriod
      });
    }
    var resetAdsViewedToday = function () {
      vAPI.adequa.current.setCurrent({adsViewedToday: 0, day: moment().format('YYYY-MM-DD')});
    };

    var resetIfDayChanged = function(){
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
                return;
            }
        });
    };
    resetIfDayChanged();
    setInterval(resetIfDayChanged, 1000 * 60 * 60);

    trackingOptout(µb.firstInstall);

    µb.contextMenu.update(null);
    µb.firstInstall = false;

    processCallbackQueue(µb.onStartCompletedQueue);
  };

  /******************************************************************************/

// Filtering engines dependencies:
// - PSL

  var onPSLReady = function () {
    µb.loadFilterLists(onAllReady);
  };

  /******************************************************************************/

// To bring older versions up to date

  var onVersionReady = function (lastVersion) {
    if (lastVersion !== vAPI.app.version) {
      vAPI.storage.set({version: vAPI.app.version});
    }
  };

  /******************************************************************************/

  var onSelfieReady = function (selfie) {
    if (
      selfie instanceof Object === false ||
      selfie.magic !== µb.systemSettings.selfieMagic
    ) {
      return false;
    }
    if (publicSuffixList.fromSelfie(selfie.publicSuffixList) !== true) {
      return false;
    }
    if (selfie.redirectEngine === undefined) {
      return false;
    }

    µb.availableFilterLists = selfie.availableFilterLists;
    µb.staticNetFilteringEngine.fromSelfie(selfie.staticNetFilteringEngine);
    µb.redirectEngine.fromSelfie(selfie.redirectEngine);
    µb.staticExtFilteringEngine.fromSelfie(selfie.staticExtFilteringEngine);
    µb.loadRedirectResources();

    return true;
  };

  /******************************************************************************/

// https://github.com/chrisaljoudi/uBlock/issues/226
// Whitelist in memory.
// Whitelist parser needs PSL to be ready.
// gorhill 2014-12-15: not anymore

  var onNetWhitelistReady = function (netWhitelistRaw) {
    µb.netWhitelist = µb.whitelistFromString(netWhitelistRaw);
    µb.netWhitelistModifyTime = Date.now();
  };

  /******************************************************************************/

// User settings are in memory

  var onUserSettingsReady = function (fetched) {
    var userSettings = µb.userSettings;

    fromFetch(userSettings, fetched);

    if (µb.privacySettingsSupported) {
      vAPI.browserSettings.set({
        'hyperlinkAuditing': !userSettings.hyperlinkAuditingDisabled,
        'prefetching': !userSettings.prefetchingDisabled,
        'webrtcIPAddress': !userSettings.webrtcIPAddressHidden
      });
    }

    µb.permanentFirewall.fromString(fetched.dynamicFilteringString);
    µb.sessionFirewall.assign(µb.permanentFirewall);
    µb.permanentURLFiltering.fromString(fetched.urlFilteringString);
    µb.sessionURLFiltering.assign(µb.permanentURLFiltering);
    µb.hnSwitches.fromString(fetched.hostnameSwitchesString);

    // https://github.com/gorhill/uBlock/issues/1892
    // For first installation on a battery-powered device, disable generic
    // cosmetic filtering.
    if (µb.firstInstall && vAPI.battery) {
      userSettings.ignoreGenericCosmeticFilters = true;
    }
  };

  /******************************************************************************/

// Housekeeping, as per system setting changes

  var onSystemSettingsReady = function (fetched) {
    var mustSaveSystemSettings = false;
    if (fetched.compiledMagic !== µb.systemSettings.compiledMagic) {
      µb.assets.remove(/^compiled\//);
      mustSaveSystemSettings = true;
    }
    if (fetched.selfieMagic !== µb.systemSettings.selfieMagic) {
      mustSaveSystemSettings = true;
    }
    if (mustSaveSystemSettings) {
      fetched.selfie = null;
      µb.selfieManager.destroy();
      vAPI.storage.set(µb.systemSettings, µb.noopFunc);
    }
  };

  /******************************************************************************/

  var onFirstFetchReady = function (fetched) {
    // https://github.com/gorhill/uBlock/issues/747
    µb.firstInstall = fetched.version === '0.0.0.0';

    // Order is important -- do not change:
    onSystemSettingsReady(fetched);
    fromFetch(µb.localSettings, fetched);
    onUserSettingsReady(fetched);
    fromFetch(µb.restoreBackupSettings, fetched);
    onNetWhitelistReady(fetched.netWhitelist);
    onVersionReady(fetched.version);

    // If we have a selfie, skip loading PSL, filter lists
    vAPI.cacheStorage.get('selfie', function (bin) {
      if (bin instanceof Object && onSelfieReady(bin.selfie)) {
        return onAllReady();
      }
      µb.loadPublicSuffixList(onPSLReady);
    });
  };

  /******************************************************************************/

  var toFetch = function (from, fetched) {
    for (var k in from) {
      if (from.hasOwnProperty(k) === false) {
        continue;
      }
      fetched[k] = from[k];
    }
  };

  var fromFetch = function (to, fetched) {
    for (var k in to) {
      if (to.hasOwnProperty(k) === false) {
        continue;
      }
      if (fetched.hasOwnProperty(k) === false) {
        continue;
      }
      to[k] = fetched[k];
    }
  };

  /******************************************************************************/

  var onSelectedFilterListsLoaded = function () {
    var fetchableProps = {
      'compiledMagic': '',
      'dynamicFilteringString': 'behind-the-scene * 3p noop\nbehind-the-scene * 3p-frame noop',
      'urlFilteringString': '',
      'hostnameSwitchesString': '',
      'lastRestoreFile': '',
      'lastRestoreTime': 0,
      'lastBackupFile': '',
      'lastBackupTime': 0,
      'netWhitelist': µb.netWhitelistDefault,
      'selfieMagic': '',
      'version': '0.0.0.0'
    };

    toFetch(µb.localSettings, fetchableProps);
    toFetch(µb.userSettings, fetchableProps);
    toFetch(µb.restoreBackupSettings, fetchableProps);

    vAPI.storage.get(fetchableProps, onFirstFetchReady);
  };

  /******************************************************************************/

// TODO(seamless migration):
// Eventually selected filter list keys will be loaded as a fetchable
// property. Until then we need to handle backward and forward
// compatibility, this means a special asynchronous call to load selected
// filter lists.

  var onAdminSettingsRestored = function () {
    µb.loadSelectedFilterLists(onSelectedFilterListsLoaded);
  };

  /******************************************************************************/

  return function () {
    processCallbackQueue(µb.onBeforeStartQueue, function () {
      // https://github.com/gorhill/uBlock/issues/531
      µb.restoreAdminSettings(onAdminSettingsRestored);
    });
  };

  /******************************************************************************/

})();

/******************************************************************************/

µBlock.restart();
