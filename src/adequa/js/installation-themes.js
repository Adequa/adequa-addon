'use strict';
const messaging = vAPI.messaging;

setTimeout(function(){
    document.body.style.opacity = '1';
}, 100);

const link = document.querySelector('footer a');
const chooseThemes = document.querySelector('#chose-themes');

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

messaging.send('adequa', {
    what: 'getAvailableThemes'
}, function(themes){
    chooseThemes.innerHTML = '';
   for(let theme of themes){
       let elem = document.createElement('span');
       elem.classList.add('montserrat', 'bold', 'pointer');
       elem.setAttribute('data-theme-id', theme.id);
       elem.innerText = theme.name;
       elem.addEventListener('click', onClick);

       chooseThemes.appendChild(elem);
   }
});

const onNextScreen = function(e){
    e.preventDefault();

    if(selected.length === 0){
        let elem = document.createElement('p');
        elem.appendChild(document.createTextNode('Vous devez renseigner au moins un thème'));
        elem.style.color = '#f00';
        elem.style.position = 'absolute';
        elem.style.top = '180px';
        elem.style.padding = '5px';
        elem.style.zIndex = '9999';
        elem.style.fontWeight = 'bold';
        elem.style.textAlign = 'center';
        elem.style.width = '100%';
        document.body.insertBefore(elem, chooseThemes);

        setTimeout(function () {
            document.body.removeChild(elem);
        }, 5000);

        return;
    }

    document.body.style.opacity = '0';

    messaging.send('adequa', {
        what: 'setThemesChoosed',
        selected: selected
    });

    // messaging.send('adequa', {what: 'firstInstallFinished'});

    setTimeout(function(){
        location.href = 'cockpit.html';
    }, 500);
};
link.addEventListener('click', onNextScreen);
