'use strict';
const messaging = vAPI.messaging;

const input = document.getElementById('ads');
const money = document.getElementById('money');
const bubble = document.getElementById('bubble');
const start = document.getElementById('start');
const end = document.getElementById('end');

messaging.send('adequa', {
    what: 'setNbAdsPerDay',
    selected: input.value
});

input.addEventListener('input', function(e){
    money.innerText = input.value;

    if(e.target.value >= 75)
        end.style.visibility = 'hidden';
    else
        end.style.visibility = 'visible';

    if(e.target.value <= 20)
        start.style.visibility = 'hidden';
    else
        start.style.visibility = 'visible';

    let pos = (document.querySelector('input + div').getBoundingClientRect().width * (e.target.value-15) / (80-15));
    bubble.innerHTML = '<span style="position: absolute;top: 0;left: -' + (20*pos/document.querySelector('input + div').getBoundingClientRect().width) +'px;">' + e.target.value + '</span>';
    bubble.style.left = pos + 'px';

    messaging.send('adequa', {
        what: 'setNbAdsPerDay',
        selected: e.target.value
    });
});
