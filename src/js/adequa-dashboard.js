(function(){
    var messaging = vAPI.messaging;

    messaging.send('adequa', {
        what: 'fetchAllPageViewed'
    }, function(data){
        var table = document.getElementById("pages");

        var totalTrackers = 0;
        var totalAdsSeen = 0;
        var totalAdsBlocked = 0;

        for(let element of data) {
            if(!element)
                continue;
            var row = table.insertRow(-1);

            var date = row.insertCell(0);
            var url = row.insertCell(1);
            var tracker = row.insertCell(2);
            var ads = row.insertCell(3);
            var ads_seen = row.insertCell(4);
            var partner = row.insertCell(5);

            totalAdsBlocked += element.nb_ads_blocked;
            totalAdsSeen += element.ads_allowed;
            totalTrackers += element.nb_trackers_blocked;

            date.innerText = moment(element.consulted_at).format('DD/MM/YYYY HH:mm');
            url.innerHTML = element.url.link(element.url);
            tracker.innerText = element.nb_trackers_blocked;
            ads.innerText = element.nb_ads_blocked;
            ads_seen.innerText = element.ads_allowed;
            partner.innerText = element.is_partner ? 'Oui' : 'Non'
        }

        var row = table.insertRow(0);
        var date = row.insertCell(0);
        row.insertCell(1);
        var tracker = row.insertCell(2);
        var ads = row.insertCell(3);
        var ads_seen = row.insertCell(4);
        row.insertCell(5);

        date.innerText = "Depuis le début";
        tracker.innerText = totalTrackers + '';
        ads.innerText = totalAdsBlocked + '';
        ads_seen.innerText = totalAdsSeen + '';
    });

    messaging.send('adequa', {
        what: 'fetchTotalNumberAdsViewed'
    }, function(adsCount){
        var generated = ((adsCount || 0) * 0.005).toFixed(2) + '€';
    })
})();
