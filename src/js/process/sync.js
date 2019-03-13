Adequa.process.sync = {};

Adequa.process.sync.fetchAdequaResources = function () {
    getAPIResponse('resources-version', function(versions){
        if(Object.is(Adequa.storage.versions || {}, versions)) return;

        if(!checkVersion(versions, 'banner-filters') || !Adequa.storage.bannerFilters) getBannerFilters();
        if(!checkVersion(versions, 'adequa-purposes') || !Adequa.storage.adequaPurposeList) getAdequaPurposeList();
        if(!checkVersion(versions, 'custom-css') || !Adequa.storage.adequaPurposeList) getCustomCss();
        if(!checkVersion(versions, 'website-parameters') || !Adequa.storage.websiteParameters) getWebsiteParameters();
        if(!checkVersion(versions, 'website-requests') || !Adequa.storage.websiteRequests || !Adequa.storage.websiteCategory) getWebsiteRequests();
        if(!checkVersion(versions, 'offers-sources') || !Adequa.storage.offerSources) getOffersSources();

        Adequa.setStorage({versions});
    });
    getAPIResponse('cookies-version', function(cookieVersions){
        if(Object.is(Adequa.storage.cookieVersions || {}, cookieVersions)) return;
        if(!Adequa.storage.cookiePurposes) Adequa.storage.cookiePurposes = {};
        for(const name in cookieVersions){
            if(!checkCookieVersion(cookieVersions, name)) {
                fetch(Adequa.uri + 'api/cookies/' + name + '.json')
                    .then(res => res.json())
                    .then(data => {
                        Adequa.storage.cookiePurposes[name] = data;
                    })
                    .catch(() => {
                        fetch('/assets/cookies-default.json')
                            .then(res => res.json())
                            .then(data => {
                                Adequa.storage.cookiePurposes[name] = data;
                            })
                            .catch(console.warn);
                    });
            }
        }

        Adequa.setStorage({cookieVersions});
    });
};

Adequa.process.sync.fetchExternalResources = function () {
    getIABResources();
};

const checkVersion = function(versions, name){
    return versions[name] === (Adequa.storage.versions || {})[name];
};
const checkCookieVersion = function(versions, name){
    return versions[name] === (Adequa.storage.versions || {})[name];
};

const getBannerFilters = function () {
    getAPIResponse('banner-filters', function (filters) {
        Adequa.storage.bannerFilters = filters;
        Adequa.setStorage({});
    });
};

const getCustomCss = function () {
    getAPIResponse('custom-css', function (filters) {
        Adequa.storage.customCss = filters;
        Adequa.setStorage({});
    });
};

const getOffersSources = function () {
    getAPIResponse('offers-sources', function (list) {
        Adequa.storage.offersSources = list;
        Adequa.setStorage({});
    });
};

const getWebsiteRequests = function () {
    getAPIResponse('website-requests', function (list) {
        Adequa.storage.websiteRequests = list.requests;
        Adequa.storage.websiteCategory = list.categories;
        Adequa.setStorage({});
    });
};

const getWebsiteParameters = function () {
    getAPIResponse('website-parameters', function (list) {
        Adequa.storage.websiteParameters = list;
        Adequa.setStorage({});
    });
};

const getAdequaPurposeList = function () {
    getAPIResponse('adequa-purposes', function (list) {
        if(!Adequa.storage.adequaPurposeList){
            Adequa.storage.adequaPurposeList = list;
            Adequa.model.consent.acceptAll();
        } else Adequa.storage.adequaPurposeList = list;
        Adequa.setStorage({});
    });
};

const getAPIResponse = function (route, callback) {
    Adequa.request.get(Adequa.uri + 'api/' + route).then(function(req){
        try {
            callback(JSON.parse(req.response));
        }
        catch(e){
            Adequa.request.get('/resources/' + route + '.json').then(function(failoverReq){
                callback(JSON.parse(failoverReq.response));
            }).catch(console.warn);
        }
    }).catch(function(){
        Adequa.request.get('/resources/' + route + '.json').then(function(failoverReq){
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
