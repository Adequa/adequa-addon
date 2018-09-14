"use strict";
Adequa.resources = {};

Adequa.resources.fetchAll = function () {
    getAPIResponse('resources-version', function(versions){
        if(Object.is(Adequa.current.versions || {}, versions)) return;

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
    let req = new XMLHttpRequest();
    req.open('GET', Adequa.uri + 'api/' + route, true);
    req.onreadystatechange = function () {
        if (req.readyState === 4 && (req.status === 200 || req.status === 0)) {
            callback(JSON.parse(req.responseText));
            req = null;
        }
    };
    req.send(null);
};
