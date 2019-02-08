Adequa.actions.tabs = {};

Adequa.actions.tabs.onUpdated = function(tabId, changeInfo){
    if(changeInfo.url){
        const hostname = Adequa.hostname(changeInfo.url);

        Adequa.model.consent.cmp.getConsentData(hostname, (consent) => {
            _gaq.push(['_trackEvent', hostname, 'viewed', JSON.stringify(consent.allowedPurposes)]);
        });

        Adequa.storage.tabs = Adequa.storage.tabs || {};
        Adequa.storage.tabs[tabId] = {
            hostname: hostname,
            domains: [hostname],
            cookies: []
        };
        Adequa.setStorage({});
    }
};
