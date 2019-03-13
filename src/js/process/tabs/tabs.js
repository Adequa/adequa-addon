Adequa.process.tabs = {};

const checkInterest = function(changeInfo){

};

Adequa.process.tabs.onUpdated = function (tabId, changeInfo) {
    if (changeInfo.url) {
        const hostname = Adequa.hostname(changeInfo.url);

        if (changeInfo.url.startsWith('http')) {
            Adequa.process.analytics.sendAnonymousEvent(changeInfo.url, 'basic', 'new_tab');
        }

        Adequa.process.interests.checkUrl(changeInfo.url);

        // Adequa.storage.tabs = Adequa.storage.tabs || {};
        // Adequa.storage.tabs[tabId] = {
        //     hostname: hostname,
        //     domains: [hostname],
        //     cookies: []
        // };
        // Adequa.setStorage({});
    }
};
