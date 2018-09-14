'use strict';

const env = 'dev';
const uri = env.match('dev') ? 'http://localhost:3000/api/' : 'https://admin-equa.com/api/';

const ajax = function (method, url, body = null) {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200)
          resolve(this);
        else
          reject(this);
      }
    };

    req.open(method, uri + url);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send(body);
  });
};


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
  let requestThemes = function (dom) {
    ajax('get', 'themes')
      .then(function (data) {
      let themes = JSON.parse(data.responseText);
      let themesNode = dom.getElementById('themes');

      //Remove children nodes
      while (themesNode.firstChild) {
        themesNode.removeChild(themesNode.firstChild);
      }

      themes.forEach(function (theme) {
        let liElem = dom.createElement('li');
        let inputElem = dom.createElement('input');
        let labelElem = dom.createElement('label');

        inputElem.setAttribute('type', 'checkbox');
        inputElem.setAttribute('value', theme.id);
        inputElem.setAttribute('id', theme.id);
        labelElem.setAttribute('for', theme.id);
        labelElem.appendChild(dom.createTextNode(theme.name));

        liElem.appendChild(inputElem);
        liElem.appendChild(labelElem);

        themesNode.appendChild(liElem);
      });
    })
      .catch(function () {
      let themesNode = dom.getElementById('themes');

      //Remove children nodes
      while (themesNode.firstChild) {
        themesNode.removeChild(themesNode.firstChild);
      }

      let button = dom.createElement('button');
      button.appendChild(dom.createTextNode('Recharger'));
      button.addEventListener('click', function () {
        requestThemes();
      });
      themesNode.appendChild(button);
    });
  };

  const uploadThemes = function (themes, callback) {
    getAddonID().then(function (id) {
      let data = 'addon_id=' + id + '&themes=' + themes.toString();

      ajax('post', 'store/themes', data)
        .then(callback);
    });
  };

  changeScreen('installation-themes.html', function (dom) {
    requestThemes(dom);

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
        elem.style.padding = '5px';
        elem.style.zIndex = '9999';
        elem.style.fontWeight = 'bold';
        elem.style.textAlign = 'center';
        elem.style.width = '100%';
        dom.body.insertBefore(elem, dom.getElementById('next-screen'));

        setTimeout(function () {
          dom.body.removeChild(elem);
        }, 5000);

        return;
      }

      vAPI.messaging.send('adequa', {
        what: 'savePassions',
        passions: inputsCheckedValues
      }, function () {

        uploadThemes(inputsCheckedValues, function () {
          //Save actual state after saving themes
          vAPI.messaging.send('adequa', {
            what: 'saveInstallState',
            state: 2,
          }, showChoiceNbAdsScreen);
        });

      });
    });
  });
};


let showChoiceNbAdsScreen = function () {
  let nbMaxAdsPerDay = 25, addon_id = null;

  changeScreen('installation-choice-nb-ads.html', function (dom) {
    ajax('get', 'min-ads')
      .then(function(data) {
        dom.getElementById('range-min').innerText = data.responseText;
        dom.getElementsByTagName('input')[0].setAttribute('min', data.responseText);
      });

    getAddonID().then(function (id) {
      addon_id = id;
    });

    let onInput = function () {
      let value = this.value;

      nbMaxAdsPerDay = value;
      dom.getElementsByClassName('ads-per-day')[0].innerText = `${value} pubs/jour`;
      dom.getElementsByClassName('year')[0].innerText = `${(value * 1.8).toFixed(2)}€/an`;
    };

    dom.getElementsByTagName('input')[0].addEventListener('input', onInput);

    dom.getElementById('next-screen').addEventListener('click', function () {
      if (addon_id !== null) {
        vAPI.messaging.send('adequa', {
          what: 'saveNbMaxAdsPerDay',
          nbMaxAdsPerDay: nbMaxAdsPerDay
        }, function () {

          const body = 'addon_id=' + addon_id + '&nb_ads=' + nbMaxAdsPerDay;
          ajax('put', 'update/nb-ads-per-day', body)
            .then(function () {
              //Save actual state
              vAPI.messaging.send('adequa', {
                what: 'saveInstallState',
                state: 3
              }, showFinalScreen);
            });

        });
      }
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
