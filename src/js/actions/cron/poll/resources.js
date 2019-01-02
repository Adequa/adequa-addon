/* global Adequa */
"use strict";
Adequa.actions.resources = {};

Adequa.actions.resources.fetchAll = function () {
    getAPIResponse('resources-version', function(versions){
        if(Object.is(Adequa.storage.versions || {}, versions)) return;

        // if(!checkVersion(versions, 'themes') || !Adequa.storage.availableThemes) getAvailableThemes();
        // if(!checkVersion(versions, 'cookie-blacklist') || !Adequa.storage.cookieBlacklist) getBlacklist();
        // if(!checkVersion(versions, 'query-selectors') || !Adequa.storage.partnerList) getPartnerList();
        // if(!checkVersion(versions, 'notarget-cookies') || !Adequa.storage.yocCookies) getOptoutCookies();
        // if(!checkVersion(versions, 'requests-type') || !Adequa.storage.requestsType) getRequestsType();
        if(!checkVersion(versions, 'cookie-rules') || !Adequa.storage.adequaCookieRules) getCookieRules();

        Adequa.setStorage({versions});
    });
    getIABResources();
};

const checkVersion = function(versions, name){
  return versions[name] === (Adequa.storage.versions || {})[name];
};

const getBlacklist = function () {
    getAPIResponse('cookie-blacklist', function (list) {
        Adequa.setStorage({cookieBlacklist: list});
    });
};

const getCookieRules = function () {
    getAPIResponse('cookie-rules', function (rules) {
        for(const item in rules){
            Adequa.actions.cookie.updateAdequaRules(item, rules[item]);
        }
        Adequa.messaging.send('adequa', {
            what: 'disableCookieType',
            type: "ciblage",
            disabled: true
        });
        Adequa.messaging.send('adequa', {
            what: 'disableCookieType',
            type: "social",
            disabled: true
        });
    });
};

const getPartnerList = function () {
    getAPIResponse('query-selectors', function (partnerList) {
        Adequa.setStorage({partnerList});
        for(let partner in Adequa.storage.partnerList) {
            Adequa.actions.site.updateAdequaRules(partner, true);
        }
    });
};

const getAvailableThemes = function () {
    getAPIResponse('themes', function (availableThemes) {
        Adequa.setStorage({availableThemes});
    });
};

const getRequestsType = function () {
    getAPIResponse('requests-type', function (requestsType) {
        Adequa.setStorage({requestsType});
    });
};

const getOptoutCookies = function () {
    getAPIResponse('notarget-cookies', function (yocCookies) {
        Adequa.setStorage({yocCookies});
    });
};

const getAPIResponse = function (route, callback) {
    Adequa.request.get(Adequa.uri + 'api/' + route).then(function(req){
        try {
            callback(JSON.parse(req.response));
        }
        catch(e){
            Adequa.request.get('/assets/adequa/' + route + '.json').then(function(failoverReq){
                callback(JSON.parse(failoverReq.response));
            }).catch(console.warn);
        }
    }).catch(function(){
        Adequa.request.get('/assets/adequa/' + route + '.json').then(function(failoverReq){
            callback(JSON.parse(failoverReq.response));
        }).catch(console.warn);
    });
};

const getIABResources = function(){
    Adequa.request.get('https://vendorlist.consensu.org/purposes-fr.json').then(function(req){
        const res = JSON.parse(req.response);
        if(res){
            Adequa.storage.purposeList = [];
            Adequa.setStorage({purposeList: res.purposes})
        }
    }).catch(console.warn);
    Adequa.request.get('https://vendorlist.consensu.org/vendorlist.json').then(function(req){
        const res = JSON.parse(req.response);
        if(res){
            Adequa.storage.vendorList = [];
            Adequa.setStorage({fullVendorList: res, vendorList: res.vendors})
        }
    }).catch(console.warn);
};
