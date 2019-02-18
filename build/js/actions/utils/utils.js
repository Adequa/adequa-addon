Adequa.domain = function (url) {
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

Adequa.hostname = function(url){
    if (!url)
        return false;

    let hostname = url;

    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0)
        hostname = match[2];

    return hostname;
};
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

Adequa.updateUninstallUrl = function(){
    Adequa.model.consent.cmp.getConsentData("all", (consent) => {
        // const purposes = [];
        // for(const id of consent.allowedPurposes){
        //     purposes.push(Adequa.storage.adequaPurposeList[id-1].shortname);
        // }
        // if(!purposes.length) purposes.push("Aucun");
        // let allowedPurposes = purposes.join(", ");

        const customDimensions = {
            // "cd2": allowedPurposes,
            "cd3": Adequa.storage.installDate,
            "cd4": Adequa.storage.convertedFrom
        };

        const dimensions = Object.entries(customDimensions).map(dimension => dimension.join('=')).join('&');

        const toRemove = {};
        for(const purpose of Adequa.storage.adequaPurposeList){
            toRemove[purpose.shortname] = consent.allowedPurposes.indexOf(purpose.id) === -1 ? 1 : 0;
        }

        const url = `https://byebye-adequa.me/uninstall.php?tid=${Adequa.googleId}&cid=${uuidv4()}&toremove=${encodeURI(JSON.stringify(toRemove))}&dimensions=${encodeURI(dimensions)}`;
        Adequa.API.runtime.setUninstallURL(url);
    });
};

Adequa.debug = function () {
    const debug = {};
    Adequa.API.tabs.query({
        active: true
    }, (tabs) => {
        const tab = tabs[0] || {};

        debug.hostname = Adequa.domain(tab.url);

        Adequa.model.consent.cmp.getConsentData(debug.hostname, function (consent) {
            debug.websiteConsent = consent;

            Adequa.model.consent.cmp.getConsentData("all", function (consent) {
                debug.defaultAdequaPurposes = consent.allowedPurposes;

                console.log(debug)
            });
        });
    });
};
