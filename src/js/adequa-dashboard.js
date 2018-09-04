(function(){
    vAPI.messaging.send('adequa', {
        what: 'fetchAllPageViewed'
    }, function(data){
        var table = document.getElementById("pages");

        for(let element of data) {
            var row = table.insertRow(-1);

            var date = row.insertCell(0);
            var url = row.insertCell(1);
            var tracker = row.insertCell(2);
            var ads = row.insertCell(3);
            var loadtime = row.insertCell(4);
            var partner = row.insertCell(5);

            date.innerText = moment(element.consulted_at).format('DD/MM/YYYY');
            url.innerText = element.url;
            tracker.innerText = element.nb_trackers_blocked;
            ads.innerText = element.nb_ads_blocked;
            loadtime.innerText = element.load_time;
            partner.innerText = element.is_partner ? 'Oui' : 'Non'
        }
    })
})();
