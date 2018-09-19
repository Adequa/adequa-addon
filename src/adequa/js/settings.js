'use strict';

(function () {
    const env = 'prod';
    const uri = env.match('dev') ? 'http://localhost:3000/api/' : 'https://admin-equa.com/api/';

    let nbMaxAdsPerDay, addon_id, timeout = -1;

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

    let onThemeSelected = function(){
        //Retrieve every inputs
        const chooseThemes = document.getElementById('chose-theme');
        let inputs = Array.from(chooseThemes.getElementsByTagName('input'));

        let inputsChecked = inputs.filter(function (input) {
            return input.type.toLowerCase() === 'checkbox' && input.checked === true;
        });

        let inputsCheckedValues = inputsChecked.map(function (input) {
            return input.value;
        });

        //Check if one, at least, is selected
        if (inputsCheckedValues.length === 0) {
            let elem = document.createElement('p');
            elem.appendChild(document.createTextNode('Vous devez renseigner au moins un thème'));
            elem.style.color = '#f00';
            elem.style.position = 'absolute';
            elem.style.top = '80px';
            elem.style.padding = '5px';
            elem.style.zIndex = '9999';
            elem.style.fontWeight = 'bold';
            elem.style.textAlign = 'center';
            elem.style.width = '100%';
            document.getElementById('themes').insertAdjacentElement("afterend", elem);

            setTimeout(function () {
                document.body.removeChild(elem);
            }, 5000);

            return;
        }

        vAPI.messaging.send('adequa', {
            what: 'savePassions',
            passions: inputsCheckedValues
        }, function () {
            uploadThemes(inputsCheckedValues);
        });
    };

    let showChoiceScreen = function (passions) {
        let requestThemes = function () {
            ajax('get', 'themes')
                .then(function (data) {
                    console.log(data)
                    let themes = JSON.parse(data.responseText);
                    let themesNode = document.getElementById('themes');

                    //Remove children nodes
                    while (themesNode.firstChild) {
                        themesNode.removeChild(themesNode.firstChild);
                    }

                    themes.forEach(function (theme) {
                        let liElem = document.createElement('li');
                        let inputElem = document.createElement('input');
                        let labelElem = document.createElement('label');

                        inputElem.setAttribute('type', 'checkbox');
                        inputElem.setAttribute('value', theme.id);
                        inputElem.setAttribute('id', theme.id);
                        if(passions.indexOf(theme.id + '') !== -1) {
                            inputElem.checked = true;
                            inputElem.setAttribute("checked", "checked");
                        }

                        inputElem.addEventListener('input', onThemeSelected);

                        labelElem.setAttribute('for', theme.id);
                        labelElem.appendChild(document.createTextNode(theme.name));

                        liElem.appendChild(inputElem);
                        liElem.appendChild(labelElem);

                        themesNode.appendChild(liElem);
                    });
                })
                .catch(function () {
                    let themesNode = document.getElementById('themes');

                    //Remove children nodes
                    while (themesNode.firstChild) {
                        themesNode.removeChild(themesNode.firstChild);
                    }

                    let button = document.createElement('button');
                    button.appendChild(document.createTextNode('Recharger'));
                    button.addEventListener('click', function () {
                        requestThemes();
                    });
                    themesNode.appendChild(button);
                });
        };

        requestThemes();
    };


    let showChoiceNbAdsScreen = function () {
        ajax('get', 'min-ads')
            .then(function (data) {
                document.getElementById('range-min').innerText = data.responseText;
                document.getElementById('range').setAttribute('min', data.responseText);
            });

        let onInput = function () {
            let value = this.value;
            nbMaxAdsPerDay = value;
            document.getElementById('nbAdsPerDay').innerText = nbMaxAdsPerDay;

            if(timeout !== -1)
                clearTimeout(timeout);

            timeout = setTimeout(function(){
                console.log(nbMaxAdsPerDay)
                if (addon_id) {
                    vAPI.messaging.send('adequa', {
                        what: 'saveNbMaxAdsPerDay',
                        nbMaxAdsPerDay: nbMaxAdsPerDay
                    }, function () {
                        const body = 'addon_id=' + addon_id + '&nb_ads=' + nbMaxAdsPerDay;
                        ajax('put', 'update/nb-ads-per-day', body);
                    });
                }
            }, 500);
        };

        document.getElementById('range').addEventListener('input', onInput);
    };

    vAPI.messaging.send('adequa', {
        what: 'getCurrent'
    }, function(current){
        nbMaxAdsPerDay = current.nbMaxAdsPerDay;

        document.getElementById('range').setAttribute('value', current.nbMaxAdsPerDay + '');
        document.getElementById('nbAdsPerDay').innerText = nbMaxAdsPerDay;

        vAPI.messaging.send('adequa', {
            what: 'getPassions'
        }, function(passions){
            vAPI.messaging.send('adequa', {
                what: 'getAddonID'
            }, function(result){
                addon_id = result;
                showChoiceNbAdsScreen();
                showChoiceScreen(passions);
            });
        });
    });

    const uploadThemes = function (themes) {
        let data = 'addon_id=' + addon_id + '&themes=' + themes.toString();

        ajax('post', 'store/themes', data);
    };
})();
