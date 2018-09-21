'use strict';
const messaging = vAPI.messaging;

setTimeout(function(){
    document.body.style.opacity = '1';
}, 100);

const link = document.querySelector('footer a');
const spans = document.querySelectorAll('#chose-ads span');

let selected = '25';

const onClick = function(event){
    selected = event.target.innerText;
    const active = document.querySelectorAll('.active');
    for(let element of active)
        element.classList.remove('active');

    event.target.classList.add('active');
};

for(let element of spans){
    element.addEventListener('click', onClick);
    if(element.innerText === '25')
        element.classList.add('active');
}

const onNextScreen = function(e){
    e.preventDefault();

    document.body.style.opacity = '0';

    messaging.send('adequa', {
        what: 'setNbAdsPerDay',
        selected: selected
    });

    messaging.send('adequa', {
        what: 'saveInstallState',
        state: 3
    });

    setTimeout(function(){
        location.href = 'installation-themes.html';
    }, 500);
};
link.addEventListener('click', onNextScreen);
