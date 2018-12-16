'use strict';
(function () {
    const messaging = vAPI.messaging;

    let domainDisabled = [];

    messaging.send('adequa', {what: 'fetchCookieDomainBlocked'}, function (domains) {
        domainDisabled = domains || [];
        messaging.send('adequa', {what: 'fetchTypeCookieRules'}, function(typeRules){
            messaging.send('adequa', {
                what: 'getCookieByType'
            }, function (data) {
                let i = 0;
                let j = 0;
                for(const type in data){
                    const group = document.createElement('div');

                    group.innerHTML = `<div class="title"><h3>${type}</h3><input type="checkbox" data-type="${type}" id="switch-${j}" ${(typeRules[type] || {}).disabled ? '' : 'checked'} /><label for="switch-${j}">Toggle</label></div>`;
                    j++;

                    const table = document.createElement('table');
                    const thead = document.createElement('thead');
                    const rowHead = thead.insertRow(-1);

                    (rowHead.insertCell(-1)).innerHTML = "Domaine <span>▼</span>";
                    (rowHead.insertCell(-1)).innerText = "Accepter";
                    table.appendChild(thead);

                    const tbody = document.createElement('tbody');

                    for(const rule of data[type]){
                        const row = tbody.insertRow(-1);
                        (row.insertCell(-1)).innerText = rule.domain;
                        (row.insertCell(-1)).innerHTML = `<td><input type="checkbox" id="switch${i}" data-domain="${rule.domain}" ${domainDisabled.indexOf(rule.domain) !== -1 ? '' : 'checked'} /><label for="switch${i}">Toggle</label></td>`;
                        i++;
                    }

                    table.appendChild(tbody);
                    group.appendChild(table);
                    document.body.appendChild(group);

                    table.classList.add('grid');
                    tbody.classList.add('hidden');

                    (thead.querySelector('span:first-child')).addEventListener('click', function(e){
                        e.target.classList.toggle('expanded');
                        tbody.classList.toggle('hidden');
                    });

                    for (const elem of tbody.querySelectorAll('input[id^="switch"]')) {
                        elem.addEventListener('input', function (e) {
                            messaging.send('adequa', {
                                what: 'updateUserCookieRules',
                                domain: e.target.getAttribute('data-domain'),
                                accept: e.target.checked
                            });
                        });
                    }

                    group.querySelector('.title input').addEventListener('input', function(e){
                        messaging.send('adequa', {
                            what: 'updateUserCookieRules',
                            type: e.target.getAttribute('data-type'),
                            accept: e.target.checked
                        });
                    });
                }
            });
        });
    });
})();
