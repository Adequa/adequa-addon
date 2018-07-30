'use strict';

let createElement = function (tag, content) {
  tag = tag.split('.');
  let newDiv = document.createElement(tag[0]);

  if (Array.isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      newDiv.appendChild(content[i]);
    }
  }
  else {
    let newContent = document.createTextNode(content);
    newDiv.appendChild(newContent);
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
  else if(elements.length === 1 && !hasParent)
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


let resetScreen = function (/*smooth, endSmothAnimationCallback*/) { //TODO
  removeChilds(document.body);
};


let createScreen = function (content, buttonListener) {
  let body = document.body;

  body.appendChild(content);

  let button = createElement('button', 'Suivant');
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
    //TODO Save actual state

    resetScreen();
    showChoiceScreen();
  });
};


let showChoiceScreen = function () {
  let content = createElementsFromObject({
    header: {
      p: 'Choisis le thème qui t\'intéresse parmi les suivants (au moins un) :',
    },
    div: {
      ul: {
        'li.b': 'BUSINESS',
        'li.cl': 'CULTURE & LOISIRS',
        'li.mas': 'MAISON & SANTÉ',
        'li.mos': 'MODE & SHOPPING',
        'li.s': 'SPORT',
        'li.st': 'SCIENCES & TECHNO',
        'li.a': 'AUTOMOBILES',
        'li.v': 'VOYAGES',
      }
    }
  });

  createScreen(content, function () {
    //TODO Save actual state

    resetScreen();
    showChoiceNbAdsScreen();
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
    //TODO Save the actual state

    resetScreen();
    showFinalScreen();
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
  });
};


let onFirstInstallReceived = function (firstInstall) {
  if (firstInstall === false)
    return;

  //Remove the actual page
  resetScreen();
  showPresentationScreen();
};


vAPI.messaging.send('adequa', {what: 'isFirstInstall'}, onFirstInstallReceived);