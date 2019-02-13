Adequa.actions.analytics = {};

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

Adequa.actions.analytics.sendAnonymousEvent = function (url, categorie, action, label, value) {
    const hostname = Adequa.hostname(url);

    Adequa.model.consent.cmp.getConsentData(hostname, (consent) => {
        const purposes = [];
        for (const id of consent.allowedPurposes) {
            purposes.push(Adequa.storage.adequaPurposeList[id - 1].shortname);
        }
        let allowedPurposes = purposes.join(", ");
        if (allowedPurposes === "") allowedPurposes = "Aucun";

        Adequa.model.consent.cmp.getConsentData("all", (consent) => {
            const purposes = [];
            for (const id of consent.allowedPurposes) {
                purposes.push(Adequa.storage.adequaPurposeList[id - 1].shortname);
            }
            let defaultAllowedPurposes = purposes.join(", ");
            if (defaultAllowedPurposes === "") defaultAllowedPurposes = "Aucun";

            const d = new Date(Adequa.storage.installDate);
            const installDate = (d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2));

            const customDimensions = {
                "cd1": allowedPurposes,
                "cd2": defaultAllowedPurposes,
                "cd3": installDate
            };

            const cid = uuidv4();

            const dimensions = Object.entries(customDimensions).map(dimension => dimension.join('=')).join('&');
            let payload = `v=1&t=event&tid=${Adequa.googleId}&cid=${cid}&ec=${categorie}&ea=${action}&aip=1&${dimensions}`;
            if (url !== "nourl") payload += `&dh=${hostname}`;
            if (label) payload += `&el=${label}`;
            if (value !== undefined) payload += `&ev=${value}`;
            fetch(`https://www.google-analytics.com/collect?${payload}`).catch(console.warn);
        });
    });
};
