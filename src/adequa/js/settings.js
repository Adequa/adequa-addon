'use strict';
const messaging = vAPI.messaging;

const input = document.getElementById('ads');
const bubble = document.getElementById('bubble');
const start = document.getElementById('start');
const end = document.getElementById('end');
const money = document.getElementById('money');

let timeout = 0, themesTimeout = 0;

input.addEventListener('input', function(e){
    money.innerText = input.value;

    if (e.target.value >= 75)
        end.style.visibility = 'hidden';
    else
        end.style.visibility = 'visible';

    if (e.target.value <= 20)
        start.style.visibility = 'hidden';
    else
        start.style.visibility = 'visible';

    let pos = (document.querySelector('input + div').getBoundingClientRect().width * (e.target.value - 15) / (80 - 15));
    bubble.innerHTML = '<span style="position: absolute;top: 0;left: -' + (20 * pos / document.querySelector('input + div').getBoundingClientRect().width) + 'px;">' + e.target.value + '</span>';
    bubble.style.left = pos + 'px';

    messaging.send('adequa', {
        what: 'setNbAdsPerDay',
        selected: e.target.value
    });

    if(timeout)
        clearTimeout(timeout);
    timeout = setTimeout(function() {
        messaging.send('adequa', {what: 'nbAdsPerDayChanged'});
    }, 500);
});
messaging.send('adequa', {
    what: 'getCurrent'
}, function(current){
    input.value = current.nbMaxAdsPerDay;
    money.innerText = input.value;
    let pos = (document.querySelector('input + div').getBoundingClientRect().width * (input.value-15) / (80-15));
    bubble.innerHTML = '<span style="position: absolute;top: 0;left: -' + (20*pos/document.querySelector('input + div').getBoundingClientRect().width) +'px;">' + input.value + '</span>';
    bubble.style.left = pos + 'px';

    messaging.send('adequa', {
        what: 'getAvailableThemes'
    }, function(themes){

        chooseThemes.innerHTML = '';
        for(let theme of themes){
            let elem = document.createElement('span');
            if(current.passions)
                for(let passion of current.passions) {
                    if(theme.id === parseInt(passion))
                        elem.classList.add('selected');
                }
            elem.setAttribute('data-theme-id', theme.id);
            elem.innerText = theme.name;
            elem.addEventListener('click', onClick);

            chooseThemes.appendChild(elem);
        }
    });
});

const chooseThemes = document.querySelector('#themes');

let selected = [];

const onClick = function(event){
    if(event.target.classList.contains('selected')){
        if (selected.indexOf(event.target.getAttribute('data-theme-id')) !== -1)
            selected.splice(selected.indexOf(event.target.getAttribute('data-theme-id')), 1);
        event.target.classList.remove('selected');
    }
    else {
        if (selected.indexOf(event.target.getAttribute('data-theme-id')) === -1)
            selected.push(event.target.getAttribute('data-theme-id'));
        event.target.classList.add('selected');
    }
    messaging.send('adequa', {
        what: 'setThemesChoosed',
        selected: selected
    });

    if(themesTimeout)
        clearTimeout(themesTimeout);
    themesTimeout = setTimeout(function() {
        messaging.send('adequa', {what: 'themesChanged'});
    }, 500);
};

messaging.send('adequa', {
    what: 'getAvailableThemes'
}, function(themes){
    chooseThemes.innerHTML = '';
    for(let theme of themes){
        let elem = document.createElement('span');
        elem.setAttribute('data-theme-id', theme.id);
        elem.innerText = theme.name;
        elem.addEventListener('click', onClick);

        chooseThemes.appendChild(elem);
    }
});
