Adequa.hostname = function (url) {
    if (!url)
        return false;

    let hostname = url;

    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0)
        hostname = match[2];

    let domain = hostname;

    if (hostname !== '') {
        let parts = hostname.split('.').reverse();

        if (parts !== null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostname.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }
    return domain;
};

Adequa.groupBy = function (list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
};

Adequa.shouldRemoveCookie = function (cookie) {
    Adequa.storage.cookieRules = Adequa.storage.cookieRules || {};
    const rules = Adequa.storage.cookieRules;

    const domain = Adequa.hostname(cookie.domain);
    if (!rules[domain]) {
        Adequa.actions.cookie.updateCookieRules(cookie.domain);
        return Adequa.storage.cookieRules[domain];
    }
    return (rules[domain] || {}).disabled || false;
};

Adequa.getCookieRule = function (cookie) {
    const rules = Adequa.storage.cookieRules;
    if (!rules) return false;

    const domain = Adequa.hostname(cookie.domain);

    return rules[domain] || false;
};

Adequa.debug = function () {
    const debug = {};
    Adequa.API.tabs.query({
        active: true
    }, (tabs) => {
        const tab = tabs[0] || {};

        debug.hostname = Adequa.hostname(tab.url);

        Adequa.model.consent.cmp.getConsentData(debug.hostname, function (consent) {
            debug.websiteConsent = consent;

            Adequa.model.consent.cmp.getConsentData("all", function (consent) {
                debug.defaultAdequaPurposes = consent.allowedPurposes;

                console.log(debug)
            });
        });
    });
};
