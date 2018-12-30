const {ConsentString} = require('consent-string');

Adequa.actions.consent = {};

Adequa.actions.consent.getSettingsByWebsiteId = function (id) {
    return Adequa.current.consent.settings.filter(setting => setting.id.website_id === id);
};

Adequa.actions.consent.getDefaultPurposeSettings = function () {
    const defaultSettings = Adequa.current.consent.settings.filter(setting => setting.id.website_id === "all" && setting.id.vendor_id === "all");
    const settings = {};

    for (const setting of defaultSettings)
        settings[setting.id.purpose_id] = setting;

    return settings;
};

Adequa.actions.consent.getCurrentWebsitePurposeSettings = function (callback) {
    Adequa.API.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, (tabs) => {
        const tab = tabs[0] || {};

        const websiteSettings = Adequa.actions.consent.getSettingsByWebsiteId(Adequa.getWebsiteId(tab.url || "nourl"));
        const settings = this.getDefaultPurposeSettings() || {};

        for (const setting of websiteSettings)
            settings[setting.id.purpose_id] = setting;

        callback(settings);
    });
};

Adequa.actions.consent.getDefaultVendorSettings = function () {
    const defaultSettings = Adequa.current.consent.settings.filter(setting => setting.id.website_id === "all" && setting.id.purpose_id === "all");
    const settings = {};

    for (const setting of defaultSettings)
        settings[setting.id.vendor_id] = setting;

    return settings;
};

Adequa.actions.consent.getCurrentWebsiteVendorSettings = function (callback) {
    Adequa.API.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, (tabs) => {
        const tab = tabs[0] || {};

        const websiteSettings = Adequa.actions.consent.getSettingsByWebsiteId(Adequa.getWebsiteId(tab.url || "nourl"));
        const settings = this.getDefaultVendorSettings() || {};

        for (const setting of websiteSettings)
            settings[setting.id.vendor_id] = setting;

        callback(settings);
    });
};

Adequa.actions.consent.setOrUpdateSetting = function (setting) {
    const index = Adequa.current.consent.settings.findIndex(item => item.id.website_id === setting.id.website_id && item.id.purpose_id === setting.id.purpose_id && item.id.vendor_id === setting.id.vendor_id);
    if (index === -1)
        Adequa.current.consent.settings.push(setting);
    else
        Adequa.current.consent.settings[index] = setting;

    Adequa.storage.setCurrent({});
};

Adequa.actions.consent.getConsentData = function (websiteId) {
    const defaultSettings = Adequa.actions.consent.getSettingsByWebsiteId("all");
    const websiteSettings = Adequa.actions.consent.getSettingsByWebsiteId(websiteId);

    const allowedPurposeIds = [];
    const forbiddenPurposeIds = [];

    const allowedVendorIds = [];
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
                for (const purposeId of Adequa.current.purposeList) {
                    if (allowedPurposeIds.indexOf(purposeId) === -1 && forbiddenPurposeIds.indexOf(purposeId) === -1)
                        allowedPurposeIds.push(purposeId);
                }
                for (const vendorId of Adequa.current.vendorList) {
                    if (allowedVendorIds.indexOf(vendorId) === -1 && forbiddenVendorIds.indexOf(vendorId) === -1)
                        allowedVendorIds.push(vendorId);
                }
            } else {
                for (const purposeId of Adequa.current.purposeList) {
                    if (allowedPurposeIds.indexOf(purposeId) === -1 && forbiddenPurposeIds.indexOf(purposeId) === -1)
                        forbiddenPurposeIds.push(purposeId);
                }
                for (const vendorId of Adequa.current.vendorList) {
                    if (allowedVendorIds.indexOf(vendorId) === -1 && forbiddenVendorIds.indexOf(vendorId) === -1)
                        forbiddenVendorIds.push(vendorId);
                }
            }
        }
    }
    console.log('forbidden vendor :', forbiddenVendorIds);
    console.log('allowed vendors :', allowedVendorIds);
    console.log('forbidden purposes :', forbiddenPurposeIds);
    console.log('allowed purposes :', allowedPurposeIds);

    const consentData = new ConsentString();

    consentData.setGlobalVendorList(Adequa.current.fullVendorList);

    consentData.setCmpId(1);
    consentData.setCmpVersion(1);
    consentData.setConsentScreen(1);
    consentData.setConsentLanguage('fr');
    consentData.setPurposesAllowed(allowedPurposeIds);
    consentData.setVendorsAllowed(allowedVendorIds);

    return {
        consentString: consentData.getConsentString(),
        allowedVendors : allowedVendorIds,
        allowedPurposes: allowedPurposeIds,
        vendorList: Adequa.current.vendorList,
        purposeList: Adequa.current.purposeList
    };
}
;
