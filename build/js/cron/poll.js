Adequa.cron.poll = {};

Adequa.cron.poll.setup = function () {
    Adequa.process.sync.fetchAdequaResources();
    Adequa.process.sync.fetchExternalResources();

    setInterval(function(){
        Adequa.process.sync.fetchAdequaResources();
        Adequa.process.sync.fetchExternalResources();
    }, 1000 * 60 * 30)
};
