const {ConsentString} = require('consent-string');

Adequa.model.consent = {
    cmp: {},
    view: {}
};

Adequa.model.consent.getSettings = function (filters) {
    let settings = Adequa.storage.consent.settings;
    if (filters.website_id)
        settings = settings.filter(setting => setting.id.website_id === filters.website_id);
    if (filters.vendor_id)
        settings = settings.filter(setting => setting.id.vendor_id === filters.vendor_id);
    if (filters.purpose_id)
        settings = settings.filter(setting => setting.id.purpose_id === filters.purpose_id);

    return settings;
};

Adequa.model.consent.getAllSettings = function (filters, id) {
    const settings = Adequa.model.consent.getSettings(filters);
    const settingsMapped = {};

    for (const setting of settings)
        settingsMapped[setting.id[id]] = setting;

    return settingsMapped;
};

Adequa.model.consent.setSetting = function (setting) {
    const index = Adequa.storage.consent.settings.findIndex(item => item.id.website_id === setting.id.website_id && item.id.purpose_id === setting.id.purpose_id && item.id.vendor_id === setting.id.vendor_id);
    if (index === -1)
        Adequa.storage.consent.settings.push(setting);
    else
        Adequa.storage.consent.settings[index] = setting;
    Adequa.setStorage({});
};

Adequa.model.consent.setConsent = function (allowedPurposes, allowedVendors, url) {
    Adequa.model.consent.setSetting({
        id: {
            website_id: "all",
            purpose_id: 1,
            vendor_id: "all"
        },
        value: -1
    });
    for (const purpose of Adequa.storage.purposeList) {
        Adequa.model.consent.setSetting({
            id: {
                website_id: Adequa.hostname(url),
                purpose_id: purpose.id,
                vendor_id: "all"
            },
            value: allowedPurposes.indexOf(purpose.id) === -1 ? 1 : -1
        })
    }
    for (const vendor of Adequa.storage.vendorList) {
        Adequa.model.consent.setSetting({
            id: {
                website_id: Adequa.hostname(url),
                purpose_id: "all",
                vendor_id: vendor.id
            },
            value: allowedVendors.indexOf(vendor.id) === -1 ? 1 : -1
        })
    }
};

Adequa.model.consent.setConsentString = function (consentString, url) {
    const consentData = new ConsentString(consentString);
    consentData.setGlobalVendorList(Adequa.storage.fullVendorList);

    const allowedPurposes = consentData.getPurposesAllowed();
    const allowedVendors = consentData.getVendorsAllowed();

    for (const purpose of Adequa.storage.purposeList) {
        Adequa.model.consent.setSetting({
            id: {
                website_id: Adequa.hostname(url),
                purpose_id: purpose.id,
                vendor_id: "all"
            },
            value: allowedPurposes.indexOf(purpose.id) === -1 ? 1 : -1
        })
    }
    for (const vendor of Adequa.storage.vendorList) {
        Adequa.model.consent.setSetting({
            id: {
                website_id: Adequa.hostname(url),
                purpose_id: "all",
                vendor_id: vendor.id
            },
            value: allowedVendors.indexOf(vendor.id) === -1 ? 1 : -1
        })
    }
};

Adequa.model.consent.cmp.getVendorConsents = function (websiteId, callback) {

};

Adequa.model.consent.cmp.getConsentData = function (websiteId, callback) {
    const defaultSettings = Adequa.model.consent.getSettings({website_id: "all"});
    const websiteSettings = Adequa.model.consent.getSettings({website_id: websiteId});

    let allowedPurposeIds = [1];
    const forbiddenPurposeIds = [];

    let allowedVendorIds = [];
    const forbiddenVendorIds = [];

    for (const setting of websiteSettings) {
        if (setting.id.purpose_id === "all" && setting.id.vendor_id !== "all") {
            if (allowedVendorIds.indexOf(setting.id.vendor_id) === -1 && forbiddenVendorIds.indexOf(setting.id.vendor_id) === -1) {
                if (setting.value === -1) {
                    allowedVendorIds.push(setting.id.vendor_id);
                } else {
                    forbiddenVendorIds.push(setting.id.vendor_id);
                }
            }
        } else if (setting.id.purpose_id !== "all" && setting.id.vendor_id === "all") {
            if (allowedPurposeIds.indexOf(setting.id.purpose_id) === -1 && forbiddenPurposeIds.indexOf(setting.id.purpose_id) === -1) {
                if (setting.value === -1) {
                    allowedPurposeIds.push(setting.id.purpose_id);
                } else {
                    forbiddenPurposeIds.push(setting.id.purpose_id);
                }
            }
        } else {
            if (defaultSettings.indexOf(setting) === -1)
                defaultSettings.push(setting)
        }
    }

    for (const setting of defaultSettings) {
        if (setting.id.purpose_id === "all" && setting.id.vendor_id !== "all") {
            if (allowedVendorIds.indexOf(setting.id.vendor_id) === -1 && forbiddenVendorIds.indexOf(setting.id.vendor_id) === -1) {
                if (setting.value === -1) {
                    allowedVendorIds.push(setting.id.vendor_id);
                } else {
                    forbiddenVendorIds.push(setting.id.vendor_id);
                }
            }
        } else if (setting.id.purpose_id !== "all" && setting.id.vendor_id === "all") {
            if (allowedPurposeIds.indexOf(setting.id.purpose_id) === -1 && forbiddenPurposeIds.indexOf(setting.id.purpose_id) === -1) {
                if (setting.value === -1) {
                    allowedPurposeIds.push(setting.id.purpose_id);
                } else {
                    forbiddenPurposeIds.push(setting.id.purpose_id);
                }
            }
        } else if (setting.id.purpose_id === "all" && setting.id.vendor_id === "all") {
            if (setting.value === -1) {
                for (const purposeId of Adequa.storage.purposeList) {
                    if (allowedPurposeIds.indexOf(purposeId) === -1 && forbiddenPurposeIds.indexOf(purposeId) === -1)
                        allowedPurposeIds.push(purposeId);
                }
                for (const vendorId of Adequa.storage.vendorList) {
                    if (allowedVendorIds.indexOf(vendorId) === -1 && forbiddenVendorIds.indexOf(vendorId) === -1)
                        allowedVendorIds.push(vendorId);
                }
            } else {
                for (const purposeId of Adequa.storage.purposeList) {
                    if (allowedPurposeIds.indexOf(purposeId) === -1 && forbiddenPurposeIds.indexOf(purposeId) === -1)
                        forbiddenPurposeIds.push(purposeId);
                }
                for (const vendorId of Adequa.storage.vendorList) {
                    if (allowedVendorIds.indexOf(vendorId) === -1 && forbiddenVendorIds.indexOf(vendorId) === -1)
                        forbiddenVendorIds.push(vendorId);
                }
            }
        }
    }

    allowedVendorIds = allowedVendorIds.map(id => parseInt(id));
    allowedPurposeIds = allowedPurposeIds.map(id => parseInt(id));

    // Adequa.API.tabs.query({
    //     active: true,
    //     lastFocusedWindow: true
    // }, (tabs) => {
    //     const tab = tabs[0] || {};
    //     const settings = Adequa.model.consent.getSettings({website_id: Adequa.hostname(tab.url || "nourl")});
    //
    //     for(const index in settings){
    //         settings[index].id.website_id = Adequa.hostname(tab.url || "nourl");
    //     }
    //
    //     const consentData = new ConsentString();
    //
    //     consentData.setGlobalVendorList(Adequa.storage.fullVendorList);
    //
    //     consentData.setCmpId(1);
    //     consentData.setCmpVersion(1);
    //     consentData.setConsentScreen(1);
    //     consentData.setConsentLanguage('fr');
    //     consentData.setPurposesAllowed(allowedPurposeIds);
    //     consentData.setVendorsAllowed(allowedVendorIds);
    if(typeof callback === "function")
    callback({
        // consentString: consentData.getConsentString(),
        allowedVendors: allowedVendorIds,
        allowedPurposes: allowedPurposeIds,
        // settings: settings
    })

    return allowedPurposeIds;
    // });
}
;
