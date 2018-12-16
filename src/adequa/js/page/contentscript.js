"use strict";
(function () {
    if (!vAPI)
        return;

    const checkIfLoaded = function () {
        if (window.performance.getEntriesByType('navigation')[0].duration !== 0) {
            const loadTime = Math.round(window.performance.getEntriesByType('navigation')[0].duration);
            const consultTime = window.performance.timing.responseStart;
            vAPI.messaging.send('adequa', {what: "pageLoadTime", loadTime, consultTime});//TODO check vAPI undefined
            clearInterval(ADinterval);
        }
    };

    const ADinterval = setInterval(checkIfLoaded, 200);

    const onMessage = function (event) {
        if (event.source === window &&
            event.data &&
            event.data.direction === "AdequaContentScript") {
            vAPI.messaging.send('adequa', {what: 'getAddonInfo'}, function (response) {
                window.postMessage({
                    direction: "hasAdequa",
                    addonId: response.addonID
                }, "*");
            });
        }
    };
    window.addEventListener("message", onMessage);
})();
