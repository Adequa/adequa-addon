'use strict';

let createElement = function (tag, content, onCreatedCallback) {
  onCreatedCallback = onCreatedCallback || function () {};

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

  onCreatedCallback(newDiv);
  return newDiv;
};

let createElementsFromObject = function (elems, onCreatedCallback, hasParent) {
  onCreatedCallback = onCreatedCallback || function () {};

  let elements = [],
    elem = null;

  Object.keys(elems).map(function (key) {
    let value = elems[key];

    if (typeof value === 'object') {
      let nodes = createElementsFromObject(value, null, true);
      elem = createElement(key, nodes);
    }
    else {
      elem = createElement(key, value);
    }

    elements.push(elem);
  });

  if (elements.length > 1 && !hasParent) {
    return createElement('div', elements, onCreatedCallback);
  }
  else if (elements.length === 1 && !hasParent) {
    onCreatedCallback(elements[0]);
    return elements[0];
  }

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


let createScreen = function (content, buttonListener, buttonFinish = false) {
  let body = document.body;

  body.appendChild(content);

  let button = createElement(
    'span&class='.concat(buttonFinish === false ? 'next' : 'finish'),
    buttonFinish === false ? '>' : '');
  button.addEventListener('click', buttonListener);
  body.appendChild(button);
};


let toggleStyle = function (styles = []) {
  if(!Array.isArray(styles)) {
    console.error('styles must be type of array: ', styles);
    return;
  }

  //Disable useless stylesheets
  Array.from(document.styleSheets).forEach(function (style) {
    if(style.href.search(styles.join('|')) === -1)
      style.disabled = true;
    else
      style.disabled = false;
  });
};