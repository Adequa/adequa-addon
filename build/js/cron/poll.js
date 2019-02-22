Adequa.cron.poll = {};

Adequa.cron.poll.setup = function () {
    Adequa.actions.sync.fetchAdequaResources();
    Adequa.actions.sync.fetchExternalResources();

    setInterval(function(){
        Adequa.actions.sync.fetchAdequaResources();
        Adequa.actions.sync.fetchExternalResources();
    }, 1000 * 60 * 30)

    setInterval(function () {
        console.log("poll")
        Adequa.actions.interests.poll();
    }, 1000 * 60 * 1)
};
