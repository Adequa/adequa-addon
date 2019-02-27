Adequa.process.tabs.requests = {};

const checkRedirect = function (details) {
    let redirect = undefined;
    if (details.statusCode === 302) {
        details.responseHeaders.forEach(header => {
            if (header.name === "Location") {
                redirect = header.value;
            }
        })
    }

    return redirect;
};

Adequa.process.tabs.requests.onBeforeSendHeaders = function (details) {
    return {};
    let requestHeaders = details.requestHeaders;

    if (Adequa.process.cookie.shouldDelete(details.url, details.tabId, details.initiator)) {
        return {requestHeaders: Adequa.process.cookie.stripCookieHeaders(requestHeaders)};
    }

    Adequa.process.cookie.logCookies(requestHeaders, details.tabId, details.url);
    return {requestHeaders};
};

Adequa.process.tabs.requests.onHeadersReceived = function (details) {
    const redirect = checkRedirect(details);
    if(redirect){
        chrome.tabs.update(details.tabId, {url: redirect});
        return {};
    }

    let responseHeaders = details.responseHeaders;

    if (Adequa.process.cookie.shouldDelete(details.url, details.tabId, details.initiator)) {
        return {responseHeaders: Adequa.process.cookie.stripCookieHeaders(responseHeaders)};
    }

    Adequa.process.cookie.logCookies(responseHeaders, details.tabId, details.url);
    return {responseHeaders};
};

Adequa.process.tabs.requests.onCommitted = function (details) {
    if (details.frameId !== 0 || !details.url.startsWith('http')) return;
    const hostname = Adequa.domain(details.url);
    if (Adequa.storage.userBrokenWebsites && Adequa.storage.userBrokenWebsites.indexOf(hostname) !== -1) return;
    const customRules = (Adequa.storage.customCss || {})[hostname];
    try {
        if (customRules) {
            Adequa.API.tabs.insertCSS(details.tabId, {
                code: customRules,
                runAt: "document_start"
            }, () => {
                void Adequa.API.runtime.lastError
            });
        }
        for (const filters of Adequa.storage.bannerFilters.hide) {
            Adequa.API.tabs.insertCSS(details.tabId, {
                code: filters + '{display:none!important}',
                runAt: "document_start"
            }, () => {
                void Adequa.API.runtime.lastError
            });
        }
    } catch (e) {
        console.log(e);
    }
    Adequa.event.emit({what: 'pageView', url: details.url});
};

Adequa.process.tabs.requests.onBeforeRequest = function (details) {
    if (details.type === "main_frame" && details.parentFrameId === -1) {
        const hostname = Adequa.domain(details.url);
        Adequa.storage.tabs = Adequa.storage.tabs || {};
        Adequa.storage.tabs[details.tabId] = {
            hostname: hostname,
            domains: [hostname],
            cookies: []
        };
        Adequa.setStorage({});
    }
};
