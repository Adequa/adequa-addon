'use strict';

(function () {
  let previousScreen = null;
  let onClick = function () {
    previousScreen = document.body.cloneNode(true).children;
    resetScreen();
    toggleStyle(['common.css', 'popup-settings.css']);

    let onCreated = function (content) {
      content.getElementsByClassName('back')[0].addEventListener('click', function () {
        toggleStyle(['common.css', 'cockpit.css']);
        resetScreen();

        Array.from(previousScreen).forEach(function (node) {
          document.body.appendChild(node);
        });
      });

      content.getElementsByTagName('input')[0].addEventListener('input', function () {
        content.getElementsByClassName('label-range')[0].innerHTML
          = 'Nombre de pubs maximum par jour : ' + this.value;
      });
    };

    let content = createElementsFromObject({
      header: {
        'a&class=back': {
          span: ''
        },
        h2: 'Paramètres'
      },
      'div&class=container': {
        'label&for=range,class=label-range': 'Nombre de pubs maximum par jour : 15',
        'input&type=range,min=15,max=60,step=1,value=15,id=range': ''
      }
    }, onCreated);

    document.body.appendChild(content);
  };

  document.getElementById('settings').addEventListener('click', onClick);
})();
