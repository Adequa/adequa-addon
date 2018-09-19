/* global moment */
'use strict';
(function(){
    const messaging = vAPI.messaging;

    messaging.send('adequa', {
        what: 'fetchAllPageViewed'
    }, function(data){
        let ads_seen, partner, url, ads, tracker, date, row;
        let table = document.getElementById("pages");

        let totalTrackers = 0;
        let totalAdsSeen = 0;
        let totalAdsBlocked = 0;

        for(let element of data) {
            if(!element)
                continue;
            row = table.insertRow(-1);

            date = row.insertCell(0);
            url = row.insertCell(1);
            tracker = row.insertCell(2);
            ads = row.insertCell(3);
            ads_seen = row.insertCell(4);
            partner = row.insertCell(5);

            totalAdsBlocked += element.nb_ads_blocked;
            totalAdsSeen += element.nb_ads_viewed;
            totalTrackers += element.nb_trackers_blocked;

            date.innerText = moment(element.consulted_at).format('DD/MM/YYYY HH:mm');
            url.innerHTML = element.url.link(element.url);
            tracker.innerText = element.nb_trackers_blocked;
            ads.innerText = element.nb_ads_blocked;
            ads_seen.innerText = element.nb_ads_viewed;
            partner.innerText = element.is_partner ? 'Oui' : 'Non';
        }

        row = table.insertRow(0);
        date = row.insertCell(0);
        row.insertCell(1);
        tracker = row.insertCell(2);
        ads = row.insertCell(3);
        ads_seen = row.insertCell(4);
        row.insertCell(5);

        date.innerText = "Depuis le début";
        tracker.innerText = totalTrackers + '';
        ads.innerText = totalAdsBlocked + '';
        ads_seen.innerText = totalAdsSeen + '';
    });
})();
