Adequa.actions.stats = {};

Adequa.actions.stats.newView = function(url){
    const hostname = Adequa.hostname(url);
    const settings = Adequa.model.consent.getSettings({website_id: hostname});

    Adequa.serverRequest.post(Adequa.uri + 'api/pageview/create', {
        settings: JSON.stringify(settings),
        url,
        hostname
    }, true);
};
