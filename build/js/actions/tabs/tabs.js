Adequa.actions.tabs = {};

Adequa.actions.tabs.onUpdated = function (tabId, changeInfo) {
    if (changeInfo.url) {
        const hostname = Adequa.hostname(changeInfo.url);

        if (changeInfo.url.startsWith('http')) {
            Adequa.actions.analytics.sendAnonymousEvent(changeInfo.url, 'basic', 'new_tab');
            Adequa.actions.desires.checkDesire(changeInfo.url);
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
