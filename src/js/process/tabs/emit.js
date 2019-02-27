Adequa.process.tabs.emitAllTabs = function(message){
    Adequa.API.tabs.query({}, function(tabs) {
        for (const tab of tabs) {
            Adequa.process.tabs.emit(tab, message);
        }
    });
};

Adequa.process.tabs.emit = function(tab, message){
    const port = Adequa.API.tabs.connect(tab.id);
    port.postMessage(message);
};
