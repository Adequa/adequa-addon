const {ConsentString} = require('consent-string');

Adequa.actions.consent = {
    cmp: {},
    view: {}
};

Adequa.actions.consent.getSettings = function (filters) {
    let settings = Adequa.storage.consent.settings;
    if (filters.website_id)
        settings = settings.filter(setting => setting.id.website_id === filters.website_id);
    if (filters.vendor_id)
        settings = settings.filter(setting => setting.id.vendor_id === filters.vendor_id);
    if (filters.purpose_id)
        settings = settings.filter(setting => setting.id.purpose_id === filters.purpose_id);

    return settings;
};

Adequa.actions.consent.setSetting = function (setting) {
    const index = Adequa.storage.consent.settings.findIndex(item => item.id.website_id === setting.id.website_id && item.id.purpose_id === setting.id.purpose_id && item.id.vendor_id === setting.id.vendor_id);
    if (index === -1)
        Adequa.storage.consent.settings.push(setting);
    else
        Adequa.storage.consent.settings[index] = setting;

    Adequa.setStorage({});
};

Adequa.actions.consent.cmp.getConsentData = function (websiteId) {
    const defaultSettings = Adequa.actions.consent.getSettings({website_id: "all"});
    const websiteSettings = Adequa.actions.consent.getSettings({website_id: websiteId});

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
    console.log('forbidden vendor :', forbiddenVendorIds);
    console.log('allowed vendors :', allowedVendorIds);
    console.log('forbidden purposes :', forbiddenPurposeIds);
    console.log('allowed purposes :', allowedPurposeIds);

    const consentData = new ConsentString();

    consentData.setGlobalVendorList(Adequa.storage.fullVendorList);

    consentData.setCmpId(1);
    consentData.setCmpVersion(1);
    consentData.setConsentScreen(1);
    consentData.setConsentLanguage('fr');
    consentData.setPurposesAllowed(allowedPurposeIds);
    consentData.setVendorsAllowed(allowedVendorIds);

    return {
        consentString: consentData.getConsentString(),
        allowedVendors: allowedVendorIds,
        allowedPurposes: allowedPurposeIds,
        vendorList: Adequa.storage.vendorList,
        purposeList: Adequa.storage.purposeList
    };
}
;
