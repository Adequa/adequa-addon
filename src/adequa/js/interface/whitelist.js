'use strict';
const messaging = vAPI.messaging;

messaging.send('adequa', {
    what: 'getUserWhitelist'
}, function (data) {
    let row, site, disable;
    let table = document.querySelector("tbody");

    for (let item of data) {
        row = table.insertRow(-1);

        site = row.insertCell(0);
        disable = row.insertCell(1);


        site.innerHTML = item;
        disable.innerHTML = `<span data-site="${item}">Arrêter de soutenir</span>`;
    }

    for(let element of document.querySelectorAll('span'))
        element.addEventListener('click', function(e){
            e.target.parentElement.parentElement.remove();
            messaging.send(
                'adequa',
                {
                    what: 'disableFiltering',
                    url: e.target.getAttribute('data-site')
                }
            );
        });
});

