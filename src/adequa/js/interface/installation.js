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
            block.style.left = 'calc(calc((100% - 200px) / 5) + 5px)';
            return;
        case 'yellow':
            block.style.backgroundColor = 'var(--yellow)';
            block.style.left = 'calc(calc((100% - 200px) / 5) * 2 + 55px)';
            return;
        case 'green':
            block.style.backgroundColor = 'var(--green)';
            block.style.left = 'calc(calc((100% - 200px) / 5) * 3 + 105px)';
            return;
        case 'blue':
            block.style.backgroundColor = 'var(--blue)';
            block.style.left = 'calc(calc((100% - 200px) / 5) * 4 + 155px)';
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
    setTimeout(() => messaging.send('adequa', {what: 'cookiesOptout'}), 50);
    callback(true);
};

const adsValidate = function(callback){
    setTimeout(() => messaging.send('adequa', {what: 'nbAdsPerDayChanged'}), 50);
    callback(true);
};

const themesValidate = function(callback){
    setTimeout(() => messaging.send('adequa', {what: 'themesChanged'}, function(){
        messaging.send('adequa', {what: 'firstInstallFinished'});
    }), 50);
    callback(true);
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
        case 6:
            location.href = '/adequa/installation-finished.html';
            break;
    }
};

if(location.hash){
    state = parseInt(location.hash.split('#')[1]);
}
checkState();
