Adequa.actions.tabs = {};

Adequa.actions.tabs.onUpdated = function (tabId, changeInfo) {
    if (changeInfo.url) {
        const hostname = Adequa.hostname(changeInfo.url);

        if (changeInfo.url.startsWith('http')) {
            Adequa.actions.analytics.sendAnonymousEvent(changeInfo.url, 'basic', 'new_tab');

            // const interest = Adequa.actions.interests.checkInterest(changeInfo.url);
            // if(interest) {
            //     Adequa.actions.interests.createInterest(interest);
            // }
        }

        Adequa.storage.tabs = Adequa.storage.tabs || {};
        Adequa.storage.tabs[tabId] = {
            hostname: hostname,
            domains: [hostname],
            cookies: []
        };
        Adequa.setStorage({});
    }
};
