Adequa.actions.tabs = {};

Adequa.actions.tabs.emitAllTabs = function(message){
    Adequa.API.tabs.query({}, function(tabs) {
        for (const tab of tabs) {
            Adequa.actions.tabs.emit(tab, message);
        }
    });
};

Adequa.actions.tabs.emit = function(tab, message){
    console.log(message)
    const port = Adequa.API.tabs.connect(tab.id);
    port.postMessage(message);
};
