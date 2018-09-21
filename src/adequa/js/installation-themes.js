'use strict';
const messaging = vAPI.messaging;

setTimeout(function(){
    document.body.style.opacity = '1';
}, 100);

const link = document.querySelector('footer a');
const spans = document.querySelectorAll('#chose-themes span');

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
};

for(let element of spans){
    element.addEventListener('click', onClick);
}

const onNextScreen = function(e){
    e.preventDefault();

    document.body.style.opacity = '0';

    messaging.send('adequa', {
        what: 'setThemesChoosed',
        selected: selected
    });

    messaging.send('adequa', {what: 'firstInstallFinished'});

    setTimeout(function(){
        location.href = 'cockpit.html';
    }, 500);
};
link.addEventListener('click', onNextScreen);
