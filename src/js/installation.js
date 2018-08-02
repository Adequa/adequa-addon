'use strict';

let primaryStyles = ['common.css', 'installation.css'];

let showPresentationScreen = function () {
  toggleStyle(primaryStyles.concat('presentation.css'));

  let content = createElementsFromObject({
    header: {
      div: {
        h1: 'Bravo',
        h2: 'Tu t\'apprêtes à :'
      }
    },
    div: {
      'div&class=bloc protect': {
        div: {
          h2: 'PROTÉGER',
          p: 'La navigation sur internet'
        }
      },
      'div&class=bloc pleasent': {
        div: {
          p: 'Rendre la navigation plus AGRÉABLE'
        }
      },
      'div&class=bloc support': {
        div: {
          h2: 'SOUTENIR',
          p: 'Les créateurs de contenus gratuits'
        }
      }
    }
  });

  createScreen(content, function () {
    //Save actual state
    vAPI.messaging.send('adequa', {
      what: 'saveInstallState',
      state: 1,
    }, function () {
      resetScreen();
      showChoiceScreen();
    });
  });
};


let showChoiceScreen = function () {
  toggleStyle(primaryStyles.concat('choice.css'));

  let content = createElementsFromObject({
    header: {
      p: 'Choisis le thème qui t\'intéresse parmi les suivants (au moins un) :',
    },
    'div&class=body': {
      ul: {
        'li.b': {
          'input.b&type=checkbox,id=b,value=0': '',
          'label.b&for=b': 'BUSINESS',
        },
        'li.cl': {
          'input.cl&type=checkbox,id=cl,value=1': '',
          'label.cl&for=cl': 'CULTURE & LOISIRS',
        },
        'li.mas': {
          'input.mas&type=checkbox,id=mas,value=2': '',
          'label.mas&for=mas': 'MAISON & SANTÉ',
        },
        'li.mos': {
          'input.mos&type=checkbox,id=mos,value=3': '',
          'label.mos&for=mos': 'MODE & SHOPPING',
        },
        'li.s': {
          'input.s&type=checkbox,id=s,value=4': '',
          'label.s&for=s': 'SPORT',
        },
        'li.st': {
          'input.st&type=checkbox,id=st,value=5': '',
          'label.st&for=st': 'SCIENCES & TECHNO',
        },
        'li.a': {
          'input.a&type=checkbox,id=a,value=6': '',
          'label.a&for=a': 'AUTOMOBILES',
        },
        'li.v': {
          'input.v&type=checkbox,id=v,value=7': '',
          'label.v&for=v': 'VOYAGES',
        }
      }
    }
  });

  createScreen(content, function () {
    //Retrieve every inputs
    let inputs = Array.from(document.getElementsByTagName('input'));

    let inputsChecked = inputs.filter(function (input) {
      return input.type.toLowerCase() === 'checkbox' && input.checked === true;
    });

    let inputsCheckedValues = inputsChecked.map(function (input) {
      return input.value;
    });

    //Check if one, at least, is selected
    if(inputsCheckedValues.length === 0) {
      let elem = createElement('p&style=color: #f00', 'Vous devez renseigner au moins un thème');
      document.body.appendChild(elem);

      setTimeout(function () {
        document.body.removeChild(elem);
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
      }, function () {
        resetScreen();
        showChoiceNbAdsScreen();
      });

    });
  });
};


let showChoiceNbAdsScreen = function () {
  toggleStyle(primaryStyles.concat('choice-nb-ads.css'));

  let nbMaxAdsPerDay = 15;

  let onCreated = function (content) {
    let onInput = function () {
      let value = this.value;

      nbMaxAdsPerDay = value;
      content.getElementsByClassName('ads-per-day')[0].innerHTML = `${value} pubs/jour recommandé`;
      content.getElementsByClassName('day')[0].innerHTML = `${(value * 0.5).toFixed(2)} cents/jour`;
      content.getElementsByClassName('month')[0].innerHTML = `${(value * 0.15).toFixed(2)}€/mois`;
      content.getElementsByClassName('year')[0].innerHTML = `${(value * 1.8).toFixed(2)}€/an`;
    };

    content.getElementsByTagName('input')[0].addEventListener('input', onInput);
  };

  let content = createElementsFromObject({
    header: {
      p: 'Choisis le nombre de pubs que tu acceptes de voir par jour'
    },
    'div&class=left': {
      'div&class=range-container': {
        'input&type=range,min=15,max=60,step=1,value=15,id=range': ''
      }
    },
    'div&class=right': {
      p: '(une pub rapporte environ 0,5 centimes d\'euros à un éditeur)',
      'div.me': {
        h3: 'POUR TOI',
        'p&class=ads-per-day': '15 pubs/jour recommandé'
      },
      'div.them': {
        h3: 'POUR LES ÉDITEURS',
        'p&class=day': '7,5 cents/jour',
        'p&class=month': '2,25€/mois',
        'p&class=year': '27€/an'
      }
    }
  }, onCreated);

  createScreen(content, function () {
    vAPI.messaging.send('adequa', {
      what: 'saveNbMaxAdsPerDay',
      nbMaxAdsPerDay: nbMaxAdsPerDay
    }, function () {

      //Save actual state
      vAPI.messaging.send('adequa', {
        what: 'saveInstallState',
        state: 3
      }, function () {
        resetScreen();
        showFinalScreen();
      });

    });
  });
};


let showFinalScreen = function () {
  toggleStyle(primaryStyles.concat('final-screen.css'));

  let content = createElementsFromObject({
    header: {
      'p&class=strong': 'Paré à surfer !',
      p: 'Clique de temps en temps sur le bouton Adequa'
    },
    'div&class=bloc ads': {
      div: {
        p: 'Combien de traceurs et de pubs ciblées',
        h2: 'Tu as évitées'
      }
    },
    'div&class=bloc accepted': {
      div: {
        p: 'Combien de pubs tu as acceptées & la valeur que tu as générée pour les éditeurs'
      }
    },
    'div&class=bloc free-internet': {
      div: {
        p: 'Comment tu peux continuer de soutenir l\'internet gratuit'
      }
    }
  });

  createScreen(content, function () {
    vAPI.messaging.send('adequa', {what: 'firstInstallFinished'}, function () {
      vAPI.closePopup();
    });
  }, true);
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

  //Remove the actual screen
  resetScreen();

  choiceScreen();
};


vAPI.messaging.send('adequa', {what: 'isFirstInstall'}, onFirstInstallReceived);