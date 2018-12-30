const Adequa = {
    messaging: {},
    API: {
        runtime: chrome.runtime
    }
};
Adequa.messaging = {};

window.addEventListener("message", function (event) {
    if (event.source === window &&
        event.data.direction &&
        event.data.direction === "adequa-tocontentscript") {
        Adequa.API.runtime.sendMessage(event.data.message, function (res) {
            window.postMessage({
                direction: "adequa-topage",
                message: res
            }, "*");
        });
    }
});

Adequa.API.runtime.onMessage.addListener(
    function(request, sender, callback) {
        window.postMessage({
            direction: "adequa-topage",
            message: request
        }, "*");
    });

