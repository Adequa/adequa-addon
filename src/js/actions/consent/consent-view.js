Adequa.actions.consent.view.mapSettings = function (settings, id) {
    const settingsMapped = {};

    for (const setting of settings)
        settingsMapped[setting.id[id]] = setting;

    return settingsMapped;
};

Adequa.actions.consent.getCurrentWebsiteSettings = function(callback){
    Adequa.API.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, (tabs) => {
        const tab = tabs[0] || {};
        callback(Adequa.actions.consent.getSettings({website_id: Adequa.hostname(tab.url || "nourl")}), tab);
    });
};

Adequa.actions.consent.view.getCurrentWebsiteSettingsMapped = function (callback, id) {
    Adequa.actions.consent.getCurrentWebsiteSettings(function(currentSettings){
        const websiteSettings = Adequa.actions.consent.view.mapSettings(
            currentSettings,
            id) || {};

        const settings = Adequa.actions.consent.view.mapSettings(
            Adequa.actions.consent.getSettings({
                website_id: id !== "website_id" ? "all" : undefined,
                vendor_id: id !== "vendor_id" ? "all" : undefined,
                purpose_id: id !== "purpose_id" ? "all" : undefined
            }),
            id) || {};

        for (const [_, setting] of Object.entries(websiteSettings))
            settings[setting.id[id]] = setting;

        callback(settings);
    });
};
