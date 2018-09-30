'use strict';
const messaging = vAPI.messaging;

const iframe = document.querySelector('iframe');
const validate = document.querySelector('footer > a');

const block = document.getElementById('block');

let state = 1;

const setBlock = function(color){
    switch(color){
        case 'red':
            block.style.backgroundColor = 'var(--red)';
            block.style.left = '45px';
            return;
        case 'yellow':
            block.style.backgroundColor = 'var(--yellow)';
            block.style.left = '135px';
            return;
        case 'green':
            block.style.backgroundColor = 'var(--green)';
            block.style.left = '225px';
            return;
        case 'blue':
            block.style.backgroundColor = 'var(--blue)';
            block.style.left = '315px';
            return;
    }
};

let validateAction = function(callback){callback(true);};

const onValidate = function(e){
    e.preventDefault();

    validateAction(function(success){
        if(!success)
            return;
        state++;
        checkState();

        messaging.send('adequa', {
            what: 'saveInstallState',
            state: state
        });
    });
};

const cookieValidate = function(callback){
    messaging.send('adequa', {what: 'cookiesOptout'});
    callback(true);
};

const adsValidate = function(callback){
    messaging.send('adequa', {what: 'nbAdsPerDayChanged'});
    callback(true);
};

const themesValidate = function(callback){
    messaging.send('adequa', {what: 'themesChanged'}, function(selected){
        if(selected.length === 0){
            let elem = document.createElement('p');
            elem.appendChild(document.createTextNode('Vous devez renseigner au moins un thème'));
            elem.style.color = '#f00';
            elem.style.position = 'absolute';
            elem.style.top = '128px';
            elem.style.padding = '5px';
            elem.style.zIndex = '9999';
            elem.style.fontWeight = 'bold';
            elem.style.textAlign = 'center';
            elem.style.width = '100%';
            document.body.insertBefore(elem, document.querySelector('iframe'));

            setTimeout(function () {
                document.body.removeChild(elem);
            }, 5000);

            return;
        }

        messaging.send('adequa', {what: 'firstInstallFinished'});
        callback(true);
        setTimeout(function(){
            location.href = 'cockpit.html';
        }, 500);
    });
};

validate.addEventListener('click', onValidate);

const changeSrc = function(src){
  iframe.style.opacity = '0';
  setTimeout(function(){
      iframe.setAttribute('src', src);
      iframe.style.opacity = '1';
  }, 500);
};

const checkState = function(){
    switch(state){
        case 1:
            iframe.setAttribute('src', 'installation-browsing.html');
            setBlock('red');
            break;

        case 2:
            changeSrc('installation-cookies.html');
            validate.removeEventListener("click", validateAction);
            validateAction = cookieValidate;
            setBlock('yellow');
            break;

        case 3:
            changeSrc('installation-support.html');
            validate.removeEventListener("click", validateAction);
            validateAction = function(callback){callback(true);};
            setBlock('green');
            break;

        case 4:
            changeSrc('installation-ads.html');
            validate.removeEventListener("click", validateAction);
            validateAction = adsValidate;
            setBlock('blue');
            break;

        case 5:
            changeSrc('installation-themes.html');
            validate.removeEventListener("click", validateAction);
            validateAction = themesValidate;
            setBlock('blue');
            break;
    }
};

if(location.hash){
    state = parseInt(location.hash.split('#')[1]);
}
checkState();
