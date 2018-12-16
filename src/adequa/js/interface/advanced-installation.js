"use strict";
(function () {
    const messaging = vAPI.messaging;

    const addAdsThemesListeners = function() {
        (function () {
            const input = document.getElementById('ads');
            const bubble = document.getElementById('bubble');
            const start = document.getElementById('start');
            const end = document.getElementById('end');

            const changePos = function () {
                if (input.value >= 75)
                    end.style.visibility = 'hidden';
                else
                    end.style.visibility = 'visible';

                if (input.value <= 20)
                    start.style.visibility = 'hidden';
                else
                    start.style.visibility = 'visible';

                let pos = (document.querySelector('input + div').getBoundingClientRect().width * (input.value - 15) / (80 - 15));
                bubble.innerHTML = '<span style="position: absolute;top: 0;left: -' + (20 * pos / document.querySelector('input + div').getBoundingClientRect().width) + 'px;">' + input.value + '</span>';
                bubble.style.left = pos + 'px';
            };

            changePos();

            messaging.send('adequa', {
                what: 'setNbAdsPerDay',
                selected: input.value
            });

            input.addEventListener('input', function (e) {
                changePos();

                messaging.send('adequa', {
                    what: 'setNbAdsPerDay',
                    selected: e.target.value
                });
            });
        })();

        (function () {
            const chooseThemes = document.querySelector('#themes > div');

            let themesSelected = [];

            const onThemeClick = function (event) {
                if (event.target.classList.contains('selected')) {
                    if (themesSelected.indexOf(event.target.getAttribute('data-theme-id')) !== -1)
                        themesSelected.splice(themesSelected.indexOf(event.target.getAttribute('data-theme-id')), 1);
                    event.target.classList.remove('selected');
                } else {
                    if (themesSelected.indexOf(event.target.getAttribute('data-theme-id')) === -1)
                        themesSelected.push(event.target.getAttribute('data-theme-id'));
                    event.target.classList.add('selected');
                }

                messaging.send('adequa', {
                    what: 'setThemesChoosed',
                    selected: themesSelected
                });
            };

            messaging.send('adequa', {
                what: 'getAvailableThemes'
            }, function (themes) {
                chooseThemes.innerHTML = '';
                for (let theme of themes) {
                    let elem = document.createElement('span');
                    elem.setAttribute('data-theme-id', theme.id);
                    elem.innerText = theme.name;
                    elem.addEventListener('click', onThemeClick);

                    chooseThemes.appendChild(elem);
                }
            });
        })();
    };

    const addCookiesListeners = function () {
        const onInput = function(){
            messaging.send('adequa', {
                what: 'disableCookieType',
                type: this.id,
                disabled: this.checked
            });
        };
        const fonctionnement = document.getElementById('fonctionnement');
        const analytique = document.getElementById('analytique');
        const ciblage = document.getElementById('ciblage');
        const social = document.getElementById('social');

        fonctionnement.addEventListener('input', onInput);
        analytique.addEventListener('input', onInput);
        ciblage.addEventListener('input', onInput);
        social.addEventListener('input', onInput);
    };

    const mainBlock = document.querySelector("main > div");
    let coloredBlock = document.querySelector('#block');
    let mainText = document.querySelector("main h2");

    const navigation = document.querySelector('nav > div:nth-child(1)');
    const protege = document.querySelector('nav > div:nth-child(2)');
    const soutiens = document.querySelector('nav > div:nth-child(3)');
    const controle = document.querySelector('nav > div:nth-child(4)');
    const navBlock = document.querySelector('#nav-block');

    const back = document.querySelector('footer > p:first-child');
    const next = document.querySelector('footer > p:last-child');
    let currentStep = 1;

    const drawNav = function(){
        if(!(currentStep <= 4 && currentStep >= 1)) return;
        navigation.classList.remove('active');
        protege.classList.remove('active');
        soutiens.classList.remove('active');
        controle.classList.remove('active');

        switch (currentStep) {
            case 1:
                navigation.classList.add('active');
                navBlock.style.left = 'calc(((100% - (140px * 4)) / 5 ) + 50px)';
                navBlock.style.backgroundColor = 'var(--red)';
                break;
            case 2:
                protege.classList.add('active');
                navBlock.style.left = 'calc(((100% - (140px * 4)) / 5 ) * 2 + 190px)';
                navBlock.style.backgroundColor = 'var(--yellow)';
                addCookiesListeners();
                break;
            case 3:
                soutiens.classList.add('active');
                navBlock.style.left = 'calc(((100% - (140px * 4)) / 5 ) * 3 + 330px)';
                navBlock.style.backgroundColor = 'var(--green)';
                break;
            case 4:
                controle.classList.add('active');
                navBlock.style.left = 'calc(((100% - (140px * 4)) / 5 ) * 4 + 470px)';
                navBlock.style.backgroundColor = 'var(--blue)';
                addAdsThemesListeners();
                break;
        }
    };

    const changeStep = function (step) {
        if(!(step <= 4 && step >= 1)) return;

        if(currentStep === 4) {
            mainBlock.innerHTML = '<h2>CHOISIS QUELS COOKIES ACCEPTÉS</h2> <div id="block"> <p><strong>NE VOIS PLUS DE PUB INTRUSIVE</strong> sur les plateformes (Youtube, Google, Facebook…).</p><p><strong>FAIS DISPARAÎTRE LES BANDEAUX<br>DE CONSENTEMENT</strong></p><p><strong>ACCÉLÈRE</strong> le chargement de tes pages <strong>ET CONSOMME MOINS</strong> de données.</p></div>';
            coloredBlock = document.querySelector('#block');
            mainText = document.querySelector("main h2");
        }
        currentStep = step;
        switch (step) {
            case 1:
                mainBlock.className = '';
                coloredBlock.innerHTML = '<p><strong>NE VOIS PLUS DE PUB INTRUSIVE</strong> sur les plateformes (Youtube, Google, Facebook…).</p><p><strong>FAIS DISPARAÎTRE LES BANDEAUX<br>DE CONSENTEMENT</strong></p><p><strong>ACCÉLÈRE</strong> le chargement de tes pages <strong>ET CONSOMME MOINS</strong> de données.</p>';
                mainText.style.visibility = 'hidden';
                break;
            case 2:
                mainText.style.visibility = 'visible';
                mainBlock.className = 'second-step';
                coloredBlock.innerHTML = '<div> <p>FONCTIONNEMENT</p><div class="onoffswitch"> <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="fonctionnement"> <label class="onoffswitch-label" for="fonctionnement"> <span class="onoffswitch-inner"></span> <span class="onoffswitch-switch"></span> </label> </div></div><div> <p>ANALYTIQUE</p><div class="onoffswitch"> <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="analytique"> <label class="onoffswitch-label" for="analytique"> <span class="onoffswitch-inner"></span> <span class="onoffswitch-switch"></span> </label> </div></div><div> <p>CIBLAGE</p><div class="onoffswitch"> <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="ciblage" checked> <label class="onoffswitch-label" for="ciblage"> <span class="onoffswitch-inner"></span> <span class="onoffswitch-switch"></span> </label> </div></div><div> <p>RÉSEAUX SOCIAUX</p><div class="onoffswitch"> <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="social" checked> <label class="onoffswitch-label" for="social"> <span class="onoffswitch-inner"></span> <span class="onoffswitch-switch"></span> </label> </div></div>';
                break;
            case 3:
                mainText.style.visibility = 'visible';
                mainText.innerText = 'CHOISIS QUEL SITE SOUTENIR'
                mainBlock.className = 'third-step';
                coloredBlock.innerHTML = '<p>Tu peux désactiver à tout moment le blocage des pubs sur un site en cliquant sur le bouton “soutenir” dans ton extension (équivalent de whitelister sur les adblocker).</p><p>Par défaut Adequa est désactivé sur une liste de sites afin de soutenir la création de contenu de qualité sur internet.</p>';
                break;
            case 4:
                mainBlock.className = 'fourth-step';
                mainBlock.innerHTML = '<div> <p>COMBIEN PAR JOUR ?</p><p>Sois généreux, 1 pub vue/jour=1€ reversé</p><div id="select-ads"> <input id="ads" type="range" min="15" max="80" step="1" value="25"> <div style="position: relative; display: flex; justify-content: space-between"> <p id="start">15</p><div id="bubble" style="position: absolute; left: 49px"> <span style="position: absolute; top:0;left:-3px;">25</span> </div><p id="end">80</p></div></div></div><div> <p>SUR QUELS THÈMES ?</p><p>On essaiera de respecter tes préférences</p><div id="themes"> <div> <span>business</span> <span>culture & loisirs</span> <span>culture & loisirs</span> <span>culture & loisirs</span> <span>culture & loisirs</span> <span>culture & loisirs</span> <span>culture & loisirs</span> <span>culture & loisirs</span> </div></div></div>';
                break;
        }
        drawNav();
    };

    navigation.addEventListener('click', () => changeStep(1));
    protege.addEventListener('click', () => changeStep(2));
    soutiens.addEventListener('click', () => changeStep(3));
    controle.addEventListener('click', () => changeStep(4));
    back.addEventListener('click', () => changeStep(currentStep-1));
    next.addEventListener('click', () => changeStep(currentStep+1));
})();
