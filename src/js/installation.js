'use strict';

let createElement = function (tag, content) {
  let str = tag;
  tag = str.split('&')[0].split('.');

  let newDiv = document.createElement(tag[0]);

  let attributes = str.split('&')[1];
  if (attributes) {
    attributes = attributes.split(',');

    for (let i = 0; i < attributes.length; i++) {
      let qualifiedName = attributes[i].split('=')[0],
        value = attributes[i].split('=')[1];

      newDiv.setAttribute(qualifiedName, value);
    }
  }

  if (Array.isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      newDiv.appendChild(content[i]);
    }
  }
  else {
    if (content !== null) {
      let newContent = document.createTextNode(content);
      newDiv.appendChild(newContent);
    }
  }

  return newDiv;
};

let createElementsFromObject = function (elems, hasParent) {
  let elements = [],
    elem = null;

  Object.keys(elems).map(function (key) {
    let value = elems[key];

    if (typeof value === 'object') {
      let nodes = createElementsFromObject(value, true);
      elem = createElement(key, nodes);
    }
    else {
      elem = createElement(key, value);
    }

    elements.push(elem);
  });

  if (elements.length > 1 && !hasParent)
    return createElement('div', elements);
  else if (elements.length === 1 && !hasParent)
    return elements[0];

  return elements;
};

let removeChilds = function (node) {
  if (Array.isArray(node))
    node = node[0];

  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }

  return node;
};


let resetScreen = function (/*smooth, endSmoothAnimationCallback*/) { //TODO
  removeChilds(document.body);
};


let createScreen = function (content, buttonListener, buttonText = null) {
  let body = document.body;

  body.appendChild(content);

  let button = createElement('button', buttonText === null ? 'Suivant' : buttonText);
  button.addEventListener('click', buttonListener);
  body.appendChild(button);
};


let showPresentationScreen = function () {
  let content = createElementsFromObject({
    header: {
      h1: 'Bravo',
      h2: 'Tu t\'apprêtes à :'
    },
    div: {
      'div.protect': {
        h2: 'PROTÉGER',
        p: 'La navigation sur internet'
      },
      'div.pleasent': {
        p: 'Rendre la navigation plus AGRÉABLE'
      },
      'div.support': {
        h2: 'SOUTENIR',
        p: 'Les créateurs de contenus gratuits'
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
  let content = createElementsFromObject({
    header: {
      p: 'Choisis le thème qui t\'intéresse parmi les suivants (au moins un) :',
    },
    div: {
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
  let content = createElementsFromObject({
    header: {
      p: 'Choisis le nombre de pubs que tu acceptes de voir par jour'
    },
    p: '(une pub rapporte environ 0,5 centimes d\'euros à un éditeur)',
    'div.me': {
      h2: 'POUR TOI',
      p: '15 pubs/jour recommandé'
    },
    'div.them': {
      h2: 'POUR LES ÉDITEURS',
      'p.day': '7,5 cents/jour',
      'p.month': '2,25€/mois',
      'p.year': '27€/an'
    }
  });

  createScreen(content, function () {
    //Save actual state
    vAPI.messaging.send('adequa', {
      what: 'saveInstallState',
      state: 3
    }, function () {
      resetScreen();
      showFinalScreen();
    });
  });
};


let showFinalScreen = function () {
  let content = createElementsFromObject({
    header: {
      'p.strong': 'Paré à surfer !',
      p: 'Clique de temps en temps sur le bouton Adequa'
    },
    'div.ads': {
      h3: 'Combien de traceurs et de pubs ciblées',
      h2: 'Tu as évitées'
    },
    'div.accepted': {
      p: 'Combien de pubs tu as acceptées & la valeur que tu as générée pour les éditeurs'
    },
    'div.free-internet': {
      p: 'Comment tu peux continuer de soutenir l\'internet gratuit'
    }
  });

  createScreen(content, function () {
    vAPI.messaging.send('adequa', {what: 'firstInstallFinished'}, function () {
      vAPI.closePopup();
    });
  }, 'Terminer');
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