Adequa.actions.stats = {};

Adequa.actions.stats.newView = function(url){
    const hostname = Adequa.domain(url);
    const settings = Adequa.model.consent.getSettings({website_id: hostname});
};
