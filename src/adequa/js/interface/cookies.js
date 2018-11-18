/* global moment */
'use strict';
(function(){
    const messaging = vAPI.messaging;

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
        what: 'getCookieHistoric'
    }, function(data){
        let groupby, domain, name, value, date, row;
        let table = document.getElementById("pages");

        for(let element of data.reverse()) {
            if(!element)
                continue;
            row = table.insertRow(-1);

            domain = row.insertCell(0);
            name = row.insertCell(1);
            value = row.insertCell(2);
            date = row.insertCell(3);

            date.innerText = moment(element.date).format('DD/MM/YYYY HH:mm');
            domain.innerText = element.domain;
            name.innerText = element.name;
            value.innerText = element.value;
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
                                '<tr class="group"><td colspan="4">'+group+'</td></tr>'
                            );
                            last = group;
                        }


                        var val = api.row(api.row($(rows).eq( i )).index()).data();      //current order index
                        $.each(val,function(index2,val2){
                            if (!subtotale[groupid]){

                                subtotale[groupid] = {
                                    domain: val[1],
                                };
                            }
                        });



                    } );
                    // $('tbody').find('.group').each(function (i,v) {
                    //     var subtd = '';
                    //     subtd += '<td></td>';
                    //     subtd += '<td></td>';
                    //     subtd += '<td></td>';
                    //     subtd += '<td></td>';
                    //
                    //     $(this).append(subtd);
                    // });

                }
            } );

            for(const elem of document.querySelectorAll('tr.group')) {
                var rowsCollapse = $(elem).nextUntil('.group');
                $(rowsCollapse).toggleClass('hidden');
            }
            // Collapse / Expand Click Groups
            $('.grid tbody').on( 'click', 'tr.group', function () {
                var rowsCollapse = $(this).nextUntil('.group');
                $(rowsCollapse).toggleClass('hidden');
            });

        })();
    });
})();
