'use strict';
const messaging = vAPI.messaging;

const input = document.getElementById('ads');
const money = document.getElementById('money');
const adsperday = document.getElementById('adsperday');
const bubble = document.getElementById('bubble');
const start = document.getElementById('start');
const end = document.getElementById('end');

const changePos = function(){
    money.innerText = input.value;
    adsperday.innerText = input.value;

    if(input.value >= 75)
        end.style.visibility = 'hidden';
    else
        end.style.visibility = 'visible';

    if(input.value <= 20)
        start.style.visibility = 'hidden';
    else
        start.style.visibility = 'visible';

    let pos = (document.querySelector('input + div').getBoundingClientRect().width * (input.value-15) / (80-15));
    bubble.innerHTML = '<span style="position: absolute;top: 0;left: -' + (20*pos/document.querySelector('input + div').getBoundingClientRect().width) +'px;">' + input.value + '</span>';
    bubble.style.left = pos + 'px';
};

changePos();

messaging.send('adequa', {
    what: 'setNbAdsPerDay',
    selected: input.value
});

input.addEventListener('input', function(e){
    changePos();

    messaging.send('adequa', {
        what: 'setNbAdsPerDay',
        selected: e.target.value
    });
});
