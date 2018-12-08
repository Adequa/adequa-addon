/* global moment */
'use strict';
(function () {
    const messaging = vAPI.messaging;

    let domainDisabled = [];

    messaging.send('adequa', {what: 'fetchCookieDomainBlocked'}, function (domains) {
        domainDisabled = domains || [];
    });

    const toHostname = function (url) {
        if (!url)
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
    }, function (data) {
        let domain, name, type, date, row;
        let ciblage = document.getElementById("ciblage");
        let analytique = document.getElementById("analytique");
        let autres = document.getElementById("autres");

        let switchCiblage = document.getElementById("switch-ciblage");
        let switchAnalytique = document.getElementById("switch-analytique");
        let switchAutre = document.getElementById("switch-autre");

        switchCiblage.checked = true;
        switchAnalytique.checked = true;
        switchAutre.checked = true;

        for (let element of data) {
            if (!element)
                continue;

            if (element.type === "ciblage") {
                row = ciblage.insertRow(-1);
                if(element.disabled) switchCiblage.checked = false;
            }
            else if (element.type === "analytique") {
                row = analytique.insertRow(-1);
                if(element.disabled) switchAnalytique.checked = false;
            }
            else {
                row = autres.insertRow(-1);
                if(element.disabled) switchAutre.checked = false;
            }

            domain = row.insertCell(0);
            name = row.insertCell(1);
            type = row.insertCell(2);
            date = row.insertCell(3);
            row.insertCell(4);

            date.innerText = moment(element.date).format('DD/MM/YYYY HH:mm');
            domain.innerText = element.domain;
            name.innerText = element.name;
            type.innerText = element.type;
        }

        (function () {
            const tables = $('.grid').not('.initialized').addClass('initialized').show();
            for (const table of tables) {
                $(table).DataTable({
                    "order": [[0, 'asc']],
                    "stateSave": false,
                    "stateDuration": 60 * 60 * 24 * 365,
                    "displayLength": 100,
                    "sScrollX": "100%",
                    "paging": false,
                    "info": false,
                    "searching": false,
                    "dom": 'lfTrtip',
                    "drawCallback": function (settings) {
                        const api = this.api();
                        const rows = api.rows({page: 'current'}).nodes();
                        let last = null;
                        let groupid = -1;
                        let subtotale = [];


                        api.column(0, {page: 'current'}).data().each(function (group, i) {
                            if (last !== group) {
                                groupid++;
                                $(rows).eq(i).before(
                                    '<tr class="group"><td>' + group + '</td></tr>'
                                );
                                last = group;
                            }

                            var val = api.row(api.row($(rows).eq(i)).index()).data();      //current order index
                            $.each(val, function (index2, val2) {
                                if (!subtotale[groupid]) {
                                    subtotale[groupid] = {
                                        type: val[2],
                                    };
                                }
                            });
                        });

                        $(table).find('.group').each(function (i, v) {
                            if (!subtotale[i]) return;
                            const domain = toHostname(v.childNodes[0].outerText);
                            let subtd = '';
                            subtd += '<td></td>';
                            subtd += `<td>${subtotale[i].type}</td>`;
                            subtd += '<td></td>';
                            subtd += `<td><input type="checkbox" id="switch${i}" data-domain="${domain}" ${domainDisabled.indexOf(domain) !== -1 ? '' : 'checked'} /><label for="switch${i}">Toggle</label></td>`;

                            $(this).append(subtd);
                        });

                        for (const elem of document.querySelectorAll('tr.group')) {
                            const rowsCollapse = $(elem).nextUntil('.group');
                            $(rowsCollapse).toggleClass('hidden');
                        }
                        // Collapse / Expand Click Groups
                        $('.grid tbody').on('click', 'tr.group', function () {
                            $(this).toggleClass('expanded');
                            const rowsCollapse = $(this).nextUntil('.group');
                            $(rowsCollapse).toggleClass('hidden');
                        });

                        for (const elem of document.querySelectorAll('input[id^="switch"]')) {
                            elem.addEventListener('input', function (e) {
                                messaging.send('adequa', {
                                    what: 'updateUserCookieRules',
                                    domain: e.target.getAttribute('data-domain'),
                                    accept: e.target.checked
                                });
                            });
                        }
                        switchCiblage.addEventListener('input', function(){
                            for (const elem of ciblage.querySelectorAll('input[id^="switch"]')) {
                                elem.checked = switchCiblage.checked;
                                messaging.send('adequa', {
                                    what: 'updateUserCookieRules',
                                    domain: elem.getAttribute('data-domain'),
                                    accept: switchCiblage.checked
                                });
                            }
                        });
                        switchAnalytique.addEventListener('input', function(){
                            for (const elem of analytique.querySelectorAll('input[id^="switch"]')) {
                                elem.checked = switchAnalytique.checked;
                                messaging.send('adequa', {
                                    what: 'updateUserCookieRules',
                                    domain: elem.getAttribute('data-domain'),
                                    accept: switchAnalytique.checked
                                });
                            }
                        });
                        switchAutre.addEventListener('input', function(){
                            for (const elem of autres.querySelectorAll('input[id^="switch"]')) {
                                elem.checked = switchAutre.checked;
                                messaging.send('adequa', {
                                    what: 'updateUserCookieRules',
                                    domain: elem.getAttribute('data-domain'),
                                    accept: switchAutre.checked
                                });
                            }
                        });
                    }
                });
            }
        })();
    });
})();
