Adequa.actions.tabs = {};

Adequa.actions.tabs.sendAllTabs = function(message){
    Adequa.API.tabs.query({}, function(tabs) {
        for (const tab of tabs) {
            Adequa.API.tabs.sendMessage(tab.id, message);
        }
    });
};

Adequa.actions.tabs.sendTab = function(tab, message){
    Adequa.API.tabs.sendMessage(tab.id, message);
};
