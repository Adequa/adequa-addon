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
        event.data.message.fromPage = true;
        Adequa.API.runtime.sendMessage(event.data.message, function (res) {
            window.postMessage({
                direction: "adequa-topage",
                message: res
            }, "*");
        });
    }
});

