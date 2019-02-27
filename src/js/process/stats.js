Adequa.process.stats = {};

Adequa.process.stats.newView = function(url){
    const hostname = Adequa.domain(url);
    const settings = Adequa.model.consent.getSettings({website_id: hostname});

    Adequa.serverRequest.post(Adequa.uri + 'api/pageview/create', {
        settings: JSON.stringify(settings),
        url,
        hostname
    }, true);
};
