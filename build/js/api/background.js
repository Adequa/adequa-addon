Adequa.API = {
    chrome: true
};

Adequa.API.onMessage = (callback) => {
    Adequa.API.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        return callback(request, sender, sendResponse);
    });
};
