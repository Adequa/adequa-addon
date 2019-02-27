Adequa.actions.tabs.requests = {};

const stripCookieHeaders = function(headers){
    return headers.filter(header => header.name.toLowerCase().indexOf("cookie") === -1);
};

const shouldDelete = function(url, tabId, initiator){
    if(Adequa.storage.userBrokenWebsites && Adequa.storage.userBrokenWebsites.indexOf(Adequa.domain(initiator)) !== -1) return false;
    if(tabId === -1) return true;
    if(!Adequa.storage.cookiePurposes) return false;
    const hostname = Adequa.domain(url);
    const website = (Adequa.storage.tabs[tabId] || {}).hostname;
    if(website === hostname) return false;

    const purpose = (((Adequa.storage.cookiePurposes[website] || Adequa.storage.cookiePurposes['default'])[hostname] || Adequa.storage.cookiePurposes['default'][hostname]) || {}).purpose || 'unknown';
    // const purpose = ((Adequa.storage.cookiePurposes['default'])[domain] || {}).purpose || '1';

    if(purpose === '1') return false;
    if(purpose === 'unknown') return false;
    if(purpose === 'deleted') return true;
    const allowedPurposes = Adequa.model.consent.cmp.getConsentData(website);
    const purposesToDelete = Adequa.storage.adequaPurposeList.map(purpose => purpose.id).filter(purposeId => allowedPurposes.indexOf(purposeId) === -1);

    return purposesToDelete.indexOf(parseInt(purpose)) !== -1;
};

const logCookies = function(headers, tabId, url){
    if(!Adequa.storage.tabs[tabId]) return;
    const cookies = headers.filter(header => header.name.toLowerCase().indexOf("set-cookie") !== -1).map(header => header.value.split('=')[0]);

    cookies.forEach(cookie => {
        Adequa.storage.tabs[tabId].cookies.push(cookie);
        Adequa.storage.tabs[tabId].domains.push(Adequa.domain(url));
    });

    Adequa.storage.tabs[tabId].cookies = Array.from(new Set(Adequa.storage.tabs[tabId].cookies));
    Adequa.storage.tabs[tabId].domains = Array.from(new Set(Adequa.storage.tabs[tabId].domains));
};

Adequa.actions.tabs.requests.onBeforeSendHeaders = function(details){
    return;
    let requestHeaders = details.requestHeaders;

    if(shouldDelete(details.url, details.tabId, details.initiator)){
        return {requestHeaders: stripCookieHeaders(requestHeaders)};
    }

    logCookies(requestHeaders, details.tabId, details.url);
    return {requestHeaders};
};

Adequa.actions.tabs.requests.onHeadersReceived = function(details){
    return;
    let responseHeaders = details.responseHeaders;

    if(shouldDelete(details.url, details.tabId, details.initiator)){
        return {responseHeaders: stripCookieHeaders(responseHeaders)};
    }

    logCookies(responseHeaders, details.tabId, details.url);
    return {responseHeaders};
};

Adequa.actions.tabs.requests.onCommitted = function(details){
    if(details.frameId !== 0 || !details.url.startsWith('http')) return;
    const hostname = Adequa.domain(details.url);
    if(Adequa.storage.userBrokenWebsites && Adequa.storage.userBrokenWebsites.indexOf(hostname) !== -1) return;
    const customRules = (Adequa.storage.customCss || {})[hostname];
    try {
        if(customRules) {
            Adequa.API.tabs.insertCSS(details.tabId, {
                code: customRules,
                runAt: "document_start"
            }, () => {void Adequa.API.runtime.lastError});
        }
        for (const filters of Adequa.storage.bannerFilters.hide) {
            Adequa.API.tabs.insertCSS(details.tabId, {
                code: filters + '{display:none!important}',
                runAt: "document_start"
            }, () => {void Adequa.API.runtime.lastError});
        }
    } catch(e) {
        console.log(e);
    }
};


const addButton = `
(function(){
    if(document.getElementById('adequa-stay-notified')) return;
    
    
    const port = chrome.runtime.connect({name: "leboncoin"});
    const button = document.createElement('div');
    button.id = "adequa-stay-notified";
    Object.assign(button.style, {
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center"
    });
    button.innerHTML = \`<span style="cursor: pointer; padding: 0 85px 0 0; display: flex; align-items: center"><svg xmlns="http://www.w3.org/2000/svg" style="height: 15px; width: 15px;margin-right: 10px;" viewBox="0 0 341 342"><defs><style>.cls-1{fill:#f56b2a;}</style></defs><path class="cls-1" d="M0,0V342H341V0ZM20,39.32,112.83,133H227V113H121.17L29,20H321V302.35l-93.65-94.51H113.18v20H219L312.31,322H20Z"/></svg><span style="font-size: 1.4rem;color: #f56b2a;font-weight: 600">Rester alerté</span></span>\`;

    button.querySelector('span:first-child').addEventListener('click', function(){
        port.postMessage({what: "stayNotified", url: location.href});
    });

    const buttonDiv = document.querySelector('main>div>div>div>div>form>div>div:last-child')
    if(buttonDiv) buttonDiv.insertAdjacentElement('beforeend', button);
})();`;
Adequa.actions.tabs.requests.onBeforeRequest = function(details){
    if(details.type === "main_frame" && details.parentFrameId === -1) {
        const hostname = Adequa.domain(details.url);
        Adequa.storage.tabs = Adequa.storage.tabs || {};
        if(Adequa.storage.tabs[details.tabId] && Adequa.storage.tabs[details.tabId].requestLocked){
            console.log("soft reset " + details.tabId, Object.assign({}, Adequa.storage.tabs[details.tabId]));
            const request = Adequa.storage.tabs[details.tabId].request;
            Adequa.storage.tabs[details.tabId] = {
                hostname: hostname,
                domains: [hostname],
                cookies: [],
                request: request
            };
        } else {
            console.log("reset " + details.tabId, Object.assign({}, Adequa.storage.tabs[details.tabId]));
            Adequa.storage.tabs[details.tabId] = {
                hostname: hostname,
                domains: [hostname],
                cookies: []
            };
        }

        Adequa.setStorage({});
    }
    if (details.requestBody && details.requestBody.raw && details.tabId !== -1 && details.url.indexOf("api.leboncoin.fr/finder/search") !== -1) {
        const request = JSON.parse(decodeURIComponent(String.fromCharCode.apply(null, new Uint8Array(details.requestBody.raw[0].bytes))));
        Adequa.storage.tabs[details.tabId].request = request;
        Adequa.storage.tabs[details.tabId].requestLocked = true;
        Adequa.API.tabs.executeScript(details.tabId, {code: addButton});

        console.log("request stored " + details.tabId, Object.assign({}, Adequa.storage.tabs[details.tabId]))
    }
};
