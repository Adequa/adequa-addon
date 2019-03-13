const Adequa = {
    API: {
        runtime: chrome.runtime
    }
};
const port = Adequa.API.runtime.connect({name: "contentscript"});
port.onMessage.addListener(function(message) {
    switch (message.what) {
        case "notify":
            Adequa.notify(message.notification);
            return;
        default:
            window.postMessage({
                direction: "adequa-topage",
                message
            }, "*");
            return;
    }
});

window.addEventListener("message", function (event) {
    if (event.source === window &&
        event.data.direction &&
        event.data.direction === "adequa-tocontentscript") {
        port.postMessage(event.data.message);
    }
});

Adequa.API.runtime.onConnect.addListener(function(port) {
    if(port.name === "contentscript") return;
    port.onMessage.addListener(function(message) {
        switch(message.what){
            case "notify":
                Adequa.notify(message.notification);
                return;
            default:
                window.postMessage({
                    direction: "adequa-topage",
                    message
                }, "*");
                return;
        }
    });
});

document.addEventListener('setConsent', function(e){
    port.postMessage({what: "setConsent", ...e.detail});
});
