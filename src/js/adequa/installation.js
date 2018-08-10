'use strict';

let showPresentationScreen = function () {
  changeScreen('installation-presentation.html', function (dom) {

    dom.getElementById('next-screen').addEventListener('click', function () {

      //Save actual state
      vAPI.messaging.send('adequa', {
        what: 'saveInstallState',
        state: 1,
      }, showChoiceScreen);

    });

  });
};


let showChoiceScreen = function () {
  changeScreen('installation-themes.html', function (dom) {
    dom.getElementById('next-screen').addEventListener('click', function () {
      //Retrieve every inputs
      let inputs = Array.from(dom.getElementsByTagName('input'));

      let inputsChecked = inputs.filter(function (input) {
        return input.type.toLowerCase() === 'checkbox' && input.checked === true;
      });

      let inputsCheckedValues = inputsChecked.map(function (input) {
        return input.value;
      });

      //Check if one, at least, is selected
      if (inputsCheckedValues.length === 0) {
        let elem = dom.createElement('p');
        elem.appendChild(dom.createTextNode('Vous devez renseigner au moins un thème'));
        elem.style.color = '#f00';
        elem.style.position = 'absolute';
        elem.style.top = '80px';
        elem.style.backgroundColor = 'rgba(0, 0, 0, .2)';
        elem.style.padding = '5px';
        elem.style.zIndex = '9999';
        elem.style.fontWeight = 'bold';
        elem.style.textAlign = 'center';
        elem.style.width = '100%';
        dom.body.insertBefore(elem, dom.getElementById('next-screen'));

        setTimeout(function () {
          dom.body.removeChild(elem);
        }, 3000);

        return;
      }

      vAPI.messaging.send('adequa', {
        what: 'savePassions',
        passions: inputsCheckedValues
      }, function () {
        //Save actual state after saving passions
        vAPI.messaging.send('adequa', {
          what: 'saveInstallState',
          state: 2,
        }, showChoiceNbAdsScreen);

      });
    });
  });
};


let showChoiceNbAdsScreen = function () {
  let nbMaxAdsPerDay = 15;

  changeScreen('installation-choice-nb-ads.html', function (dom) {
    let onInput = function () {
      let value = this.value;

      nbMaxAdsPerDay = value;
      dom.getElementsByClassName('ads-per-day')[0].innerHTML = `${value} pubs/jour`;
      dom.getElementsByClassName('day')[0].innerHTML = `${(value * 0.5).toFixed(2)} cents/jour`;
      dom.getElementsByClassName('month')[0].innerHTML = `${(value * 0.15).toFixed(2)}€/mois`;
      dom.getElementsByClassName('year')[0].innerHTML = `${(value * 1.8).toFixed(2)}€/an`;
    };

    dom.getElementsByTagName('input')[0].addEventListener('input', onInput);

    dom.getElementById('next-screen').addEventListener('click', function () {
      vAPI.messaging.send('adequa', {
        what: 'saveNbMaxAdsPerDay',
        nbMaxAdsPerDay: nbMaxAdsPerDay
      }, function () {

        //Save actual state
        vAPI.messaging.send('adequa', {
          what: 'saveInstallState',
          state: 3
        }, showFinalScreen);

      });
    });
  });

};


let showFinalScreen = function () {
  changeScreen('installation-final.html', function (dom) {
    dom.getElementById('finish').addEventListener('click', function () {
      vAPI.messaging.send('adequa', {what: 'firstInstallFinished'}, function () {
        changeScreen('cockpit.html');
      });
    });
  });
};


let choiceScreen = function () {
  vAPI.messaging.send('adequa', {what: 'fetchInstallState'}, function (state) {
    switch (state) {
      case 1:
        showChoiceScreen();
        break;

      case 2:
        showChoiceNbAdsScreen();
        break;

      case 3:
        showFinalScreen();
        break;

      default:
        showPresentationScreen();
        break;
    }
  });
};


let onFirstInstallReceived = function (firstInstall) {
  if (firstInstall === false)
    return;

  choiceScreen();
};


vAPI.messaging.send('adequa', {what: 'isFirstInstall'}, onFirstInstallReceived);