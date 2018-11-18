'use strict';
const messaging = vAPI.messaging;

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
