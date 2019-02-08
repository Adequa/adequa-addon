Adequa.actions.tabs.requests = {};

const stripCookieHeaders = function(headers){
    return headers.filter(header => header.name.toLowerCase().indexOf("cookie") === -1);
};

const shouldDelete = function(url, tabId, initiator){
    if(Adequa.storage.userBrokenWebsites && Adequa.storage.userBrokenWebsites.indexOf(Adequa.hostname(initiator)) !== -1) return false;
    if(tabId === -1) return true;
    if(!Adequa.storage.cookiePurposes) return false;
    const hostname = Adequa.hostname(url);
    const website = (Adequa.storage.tabs[tabId] || {}).hostname;
    if(website === hostname) return false;

    const purpose = (((Adequa.storage.cookiePurposes[website] || Adequa.storage.cookiePurposes['default'])[hostname] || Adequa.storage.cookiePurposes['default'][hostname]) || {}).purpose || 'unknown';
    // const purpose = ((Adequa.storage.cookiePurposes['default'])[hostname] || {}).purpose || '1';

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
        Adequa.storage.tabs[tabId].domains.push(Adequa.hostname(url));
    });

    Adequa.storage.tabs[tabId].cookies = Array.from(new Set(Adequa.storage.tabs[tabId].cookies));
    Adequa.storage.tabs[tabId].domains = Array.from(new Set(Adequa.storage.tabs[tabId].domains));
};

Adequa.actions.tabs.requests.onBeforeSendHeaders = function(details){
    let requestHeaders = details.requestHeaders;

    if(shouldDelete(details.url, details.tabId, details.initiator)){
        return {requestHeaders: stripCookieHeaders(requestHeaders)};
    }

    logCookies(requestHeaders, details.tabId, details.url);
    return {requestHeaders};
};

Adequa.actions.tabs.requests.onHeadersReceived = function(details){
    let responseHeaders = details.responseHeaders;

    if(shouldDelete(details.url, details.tabId, details.initiator)){
        return {responseHeaders: stripCookieHeaders(responseHeaders)};
    }

    logCookies(responseHeaders, details.tabId, details.url);
    return {responseHeaders};
};

Adequa.actions.tabs.requests.onCommitted = function(details){
    if(details.frameId !== 0 || !details.url.startsWith('http')) return;
    const hostname = Adequa.hostname(details.url);
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
    Adequa.event.emit({what: 'pageView', url: details.url});
};
