/* global Adequa */
"use strict";
Adequa.resources = {};

Adequa.resources.fetchAll = function () {
    getAPIResponse('resources-version', function(versions){
        if(Object.is(Adequa.current.versions || {}, versions)) return;

        if(!checkVersion(versions, 'themes') || !Adequa.current.availableThemes) getAvailableThemes();
        if(!checkVersion(versions, 'cookie-whitelist') || !Adequa.current.cookieWhitelist) getWhitelist();
        if(!checkVersion(versions, 'query-selectors') || !Adequa.current.partnerList) getPartnerList();
        if(!checkVersion(versions, 'notarget-cookies') || !Adequa.current.yocCookies) getOptoutCookies();
        if(!checkVersion(versions, 'requests-type') || !Adequa.current.requestsType) getRequestsType();

        Adequa.storage.setCurrent({versions});
    });
};

const checkVersion = function(versions, name){
  return versions[name] === (Adequa.current.versions || {})[name];
};

const getWhitelist = function () {
    getAPIResponse('cookie-whitelist', function (list) {
        Adequa.storage.setCurrent({cookieWhitelist: list});
    });
};

const getPartnerList = function () {
    getAPIResponse('query-selectors', function (partnerList) {
        Adequa.storage.setCurrent({partnerList});
    });
};

const getAvailableThemes = function () {
    getAPIResponse('themes', function (availableThemes) {
        Adequa.storage.setCurrent({availableThemes});
    });
};

const getRequestsType = function () {
    getAPIResponse('requests-type', function (requestsType) {
        Adequa.storage.setCurrent({requestsType});
    });
};

const getOptoutCookies = function () {
    getAPIResponse('notarget-cookies', function (yocCookies) {
        Adequa.storage.setCurrent({yocCookies});
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
            });
        }
    }).catch(function(){
        Adequa.request.get('/assets/adequa/' + route + '.json').then(function(failoverReq){
            callback(JSON.parse(failoverReq.response));
        });
    });
};
