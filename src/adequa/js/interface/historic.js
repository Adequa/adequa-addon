/* global moment */
'use strict';
(function(){
    const messaging = vAPI.messaging;

    const partnerList = [];
    let whitelist = [];

    const toHostname = function (url) {
        if(!url)
            return false;

        let hostname = url;

        const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0)
            hostname = match[2];

        let domain = hostname;

        if (hostname !== '') {
            let parts = hostname.split('.').reverse();

            if (parts !== null && parts.length > 1) {
                domain = parts[1] + '.' + parts[0];

                if (hostname.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
                    domain = parts[2] + '.' + domain;
                }
            }
        }
        return domain;
    };

    messaging.send('adequa', {
        what: 'getWhitelist'
    }, function(data) {
        whitelist = data.map((item) => toHostname(item));
    });

    messaging.send('adequa', {
        what: 'fetchAllPageViewed'
    }, function(data){
        let ads_seen, partner, url, ads, tracker, date, row, hostname, groupby;
        let table = document.getElementById("pages");

        let totalTrackers = 0;
        let totalAdsSeen = 0;
        let totalAdsBlocked = 0;

        for(let element of data.reverse()) {
            if(!element)
                continue;
            row = table.insertRow(-1);

            groupby = row.insertCell(0);
            url = row.insertCell(1);
            date = row.insertCell(2);
            tracker = row.insertCell(3);
            ads = row.insertCell(4);
            ads_seen = row.insertCell(5);
            row.insertCell(6);

            totalAdsBlocked += element.nb_ads_blocked;
            totalAdsSeen += element.nb_ads_viewed;
            totalTrackers += element.nb_trackers_blocked;

            const hostname = toHostname(element.url);

            groupby.innerText = hostname;
            date.innerText = moment(element.consulted_at).format('DD/MM/YYYY HH:mm');
            url.innerHTML = element.url.link(element.url);
            url.children[0].setAttribute('target', '_blank');
            url.children[0].innerText = element.url.length > 60 ? element.url.substring(0,50) + '...' : element.url;
            tracker.innerText = element.nb_trackers_blocked;
            ads.innerText = element.nb_ads_blocked;
            ads_seen.innerText = element.nb_ads_viewed;
            if(element.is_partner)
                if(partnerList.indexOf(hostname) === -1)
                    partnerList.push(hostname);
        }

        (function() {
            var table = $('.grid').not('.initialized').addClass('initialized').show().DataTable({
                "columnDefs": [
                    { "visible": false, "targets": 0 }
                ],
                "order": [[ 0, 'asc' ]],
                "stateSave": false,
                "stateDuration": 60*60*24*365,
                "displayLength": 100,
                "sScrollX": "100%",
                "paging": false,
                "info": false,
                "searching": false,
                "dom": 'lfTrtip',
                "drawCallback": function ( settings ) {
                    var api = this.api();
                    var rows = api.rows( {page:'current'} ).nodes();
                    var last=null;
                    var colonne = api.row(0).data().length;
                    var totale = new Array();
                    var groupid = -1;
                    var subtotale = new Array();


                    api.column(0, {page:'current'} ).data().each( function ( group, i ) {
                        if ( last !== group ) {
                            groupid++;
                            $(rows).eq( i ).before(
                                '<tr class="group"><td>'+group+'</td></tr>'
                            );
                            last = group;
                        }


                        var val = api.row(api.row($(rows).eq( i )).index()).data();      //current order index
                        $.each(val,function(index2,val2){
                            if (!subtotale[groupid]){
                                subtotale[groupid] = {
                                    hostname: val[1],
                                    date: val[2],
                                    trackers: val[3],
                                    viewed: val[4],
                                    blocked: val[5],
                                    partner: val[6],
                                };
                            }
                        });



                    } );
                    $('tbody').find('.group').each(function (i,v) {
                        var subtd = '';
                        subtd += '<td>'+subtotale[i].date+'</td>';
                        subtd += '<td>'+subtotale[i].trackers+'</td>';
                        subtd += '<td>'+subtotale[i].viewed+'</td>';
                        subtd += '<td>'+subtotale[i].blocked+'</td>';

                        const hostname = toHostname(subtotale[i].hostname.split('>')[1].split('<')[0]);

                        if(partnerList.indexOf(hostname) !== -1)
                            subtd += `<td align="center">Site partenaire</td>`;
                        else if(whitelist.indexOf(hostname) !== -1)
                            subtd += `<td><input type="checkbox" data-hostname="${hostname}" id="switch${i}" checked /><label for="switch${i}">Toggle</label></td>`;
                        else
                            subtd += `<td><input type="checkbox" data-hostname="${hostname}" id="switch${i}" /><label for="switch${i}">Toggle</label></td>`;

                        $(this).append(subtd);
                    });

                }
            } );

            for(const elem of document.querySelectorAll('tr.group')) {
                var rowsCollapse = $(elem).nextUntil('.group');
                $(rowsCollapse).toggleClass('hidden');
            }
            // Collapse / Expand Click Groups
            $('.grid tbody').on( 'click', 'tr.group', function () {
                $(this).toggleClass('expanded');
                var rowsCollapse = $(this).nextUntil('.group');
                $(rowsCollapse).toggleClass('hidden');
            });

            for (const elem of document.querySelectorAll('input[id^="switch"]')) {
                elem.addEventListener('input', function(e){
                    messaging.send('adequa', {
                        what: 'updateUserSiteRules',
                        hostname: e.target.getAttribute('data-hostname'),
                        support: e.target.checked
                    });
                });

            }

        })();
    });
})();
