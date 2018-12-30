'use strict';
//
// (function () {
//     var messaging = vAPI.messaging;
//
//     let popupData = {};
//     let hostname, firstVisit, nbVisit, nbAdsViewedOnSite, nbAdsBlocked, nbTrackersBlocked, generated, loadTime,
//         nbAdsViewedToday, nbMaxAdsPerDay, totalAdsBlocked, totalTrackersBlocked, totalGenerated, siteIsPartner;
//
//     const renderHeader = function () {
//         if (!siteIsPartner) {
//             if (!uDom('body').hasClass('off')) {
//                 document.body.querySelector('header').innerHTML = `
//                     <div>
//                         <img src="img/PICTO_ADEQUA_VF-2.png" />
//                         <div class="red-block"></div>
//                     </div>
//                     <h2 class="bold">TU TE PROTÈGES SUR<br>
//                         CE SITE !
//                     </h2>
//                     <p id="toggleNetFilteringSwitch">
//                         SOUTENIR
//                     </p>
//                     `;
//             } else {
//                 document.body.querySelector('header').innerHTML = `
//                     <div>
//                         <img src="img/PICTO_ADEQUA_VF-3.png" />
//                         <div class="green-block"></div>
//                     </div>
//                     <h2 class="bold">TU SOUTIENS CE SITE !</h2>
//                     <p id="toggleNetFilteringSwitch">
//                     ARRETER DE SOUTENIR
// </p>
//                     `;
//             }
//         } else {
//             document.body.querySelector('header').innerHTML = `
//                     <div>
//                         <img src="img/PICTO_ADEQUA_VF-3.png" />
//                         <div class="green-block"></div>
//                     </div>
//                     <h2 class="bold">TU SOUTIENS CE SITE !</h2>
//                     <p id="toggleNetFilteringSwitch"></p>
//                     `;
//         }
//
//         let toggleButton = document.getElementById('toggleNetFilteringSwitch');
//         if (!toggleButton)
//             return;
//
//         toggleButton.addEventListener('click', toggleNetFilteringSwitch);
//     };
//
//     const renderFooter = function(){
//         let settingsButton = uDom('#settings').nodes[0];
//         let contactButton = uDom('#contact').nodes[0];
//         if (settingsButton)
//             settingsButton.addEventListener('click', function () {
//                 messaging.send('adequa', {
//                     what: 'openTab',
//                     url: 'adequa/dashboard.html#settings'
//                 });
//             });
//         const adsBlockedElem = document.querySelector('#adsBlocked');
//         const trackersBlockedElem = document.querySelector('#trackersBlocked');
//         const generatedElem = document.querySelector('#generated');
//         const adsPerDayElem = document.querySelector('#adsPerDay');
//
//         if (adsBlockedElem)
//             adsBlockedElem.innerText = totalAdsBlocked + '';
//         if (trackersBlockedElem)
//             trackersBlockedElem.innerText = totalTrackersBlocked + '';
//         if (generatedElem)
//             generatedElem.innerText = totalGenerated + '';
//         if (adsPerDayElem)
//             adsPerDayElem.innerText = nbMaxAdsPerDay + ' pubs/j';
//     };
//
//     const renderMain = function () {
//         let site = document.querySelector('.site');
//         let progress = document.querySelector('#progress');
//
//         if (site)
//             site.remove();
//         if (progress)
//             progress.remove();
//
//         const elem = document.createElement('div');
//         if (siteIsPartner && nbAdsViewedToday < nbMaxAdsPerDay) {
//             elem.innerHTML = partnerHtml(hostname, firstVisit, generated, nbVisit, nbAdsViewedOnSite, nbAdsViewedToday, nbMaxAdsPerDay);
//         }
//         else if (siteIsPartner) {
//             elem.innerHTML = partnerHtmlMaxAds(hostname, firstVisit, generated, nbVisit, nbAdsViewedOnSite);
//         }
//         else {
//             if(!uDom('body').hasClass('off'))
//                 elem.innerHTML = notPartnerHtml(hostname, firstVisit, nbVisit, nbAdsBlocked, nbTrackersBlocked, loadTime);
//             else
//                 elem.innerHTML = whitelistedHtml(nbAdsViewedToday, nbMaxAdsPerDay);
//         }
//         document.querySelector('main').insertBefore(elem, document.querySelector('.stats'));
//     };
//
//     const notPartnerHtml = function (hostname, firstVisit, nbVisit, adsBlocked, trackersBlocked, loadTime) {
//         return `
//     <div class="site" style="background-color: var(--red);">
//         <h2>OUF !</h2>
//         <p>Depuis ${firstVisit} jours, sur ${hostname}</p>
//         <div>
//             <p>tu es venu</p>
//             <span>${nbVisit}</span>
//             <p>fois</p>
//         </div>
//         <div>
//             <p>tu as évité</p>
//             <span>${adsBlocked}</span>
//             <p>pubs</p>
//         </div>
//         <div>
//             <p></p>
//             <span>${trackersBlocked}</span>
//             <p>traceurs</p>
//         </div>
//         <div>
//             <p></p>
//             <span>${loadTime}</span>
//             <p>minutes de chargement</p>
//         </div>
//     </div>
//         `;
//     };
//
//     const whitelistedHtml = function(nbAdsViewedToday, nbMaxAdsPerDay){
//         return `
//         <div id="progress">
//             <div style="width: ${(100 * nbAdsViewedToday / nbMaxAdsPerDay).toFixed(0)}%"></div>
//             <p>Aujourd'hui tu as vu <span>${nbAdsViewedToday}/${nbMaxAdsPerDay}</span> pubs !</p>
//         </div>
//         <div class="site" style="background-color: var(--green)">
//             <p>Ce site n'est pas encore partenaire d'Adequa. On ne peut donc pas contrôler le nombre de pubs qui s'affichent. Elles ne sont pas comptées dans ta jauge quotidienne.</p>
//         </div>
//         `;
//     };
//
//     const partnerHtml = function (hostname, firstVisit, generated, nbVisit, nbAdsViewed, nbAdsViewedToday, nbMaxAdsPerDay) {
//         return `
//     <div id="progress">
//         <div style="width: ${(100 * nbAdsViewedToday / nbMaxAdsPerDay).toFixed(0)}%"></div>
//         <p>Aujourd'hui tu as vu <span>${nbAdsViewedToday}/${nbMaxAdsPerDay}</span> pubs !</p>
//     </div>
//     <div class="site" style="background-color: var(--green)">
//         <h2>BRAVO !</h2>
//             <p>Depuis ${firstVisit} jours, sur ${hostname}</p>
//             <div>
//                 <p>tu es venu</p>
//                 <span>${nbVisit}</span>
//                 <p>fois</p>
//             </div>
//             <div>
//                 <p>tu as vu</p>
//                 <span>${nbAdsViewed}</span>
//                 <p>pubs</p>
//             </div>
//             <div>
//                 <p>tu as généré</p>
//                 <span>${generated}</span>
//                 <p>euros</p>
//             </div>
//     </div>
//         `;
//     };
//
//     const partnerHtmlMaxAds = function (hostname, firstVisit, generated, nbVisit, nbAdsViewed) {
//         return `
//     <div id="progress" class="full">
//         <div style="width: 100%"></div>
//         <p>Tu es au top ! Tu ne vois plus de pubs</p>
//     </div>
//     <div class="site" style="background-color: var(--green)">
//         <h2>BRAVO !</h2>
//             <p>Depuis ${firstVisit} jours, sur ${hostname}</p>
//             <div>
//                 <p>tu es venu</p>
//                 <span>${nbVisit}</span>
//                 <p>fois</p>
//             </div>
//             <div>
//                 <p>tu as vu</p>
//                 <span>${nbAdsViewed}</span>
//                 <p>pubs</p>
//             </div>
//             <div>
//                 <p>tu as généré</p>
//                 <span>${generated}</span>
//                 <p>euros</p>
//             </div>
//     </div>
//         `;
//     };
//
//     const getData = function (callback) {
//         messaging.send('popupPanel', {
//             what: 'getPopupData'
//         }, function (response) {
//             popupData = response;
//             let elem = document.body;
//             elem.classList.toggle(
//                 'off',
//                 popupData.pageURL === '' ||
//                 !popupData.netFilteringSwitch ||
//                 popupData.pageHostname === 'behind-the-scene' && !popupData.advancedUserEnabled
//             );
//
//             messaging.send('adequa', {
//                 what: 'getCockpitData',
//                 url: popupData.pageURL
//             }, function (data) {
//                 callback(data);
//             });
//         });
//     };
//
//     const toggleNetFilteringSwitch = function (event) {
//         if (!popupData || !popupData.pageURL) {
//             return;
//         }
//         messaging.send(
//             'adequa',
//             {
//                 what: 'toggleNetFiltering',
//                 url: popupData.pageURL,
//                 state: !uDom('body').toggleClass('off').hasClass('off'),
//             }
//         );
//         renderHeader();
//         renderMain();
//     };
//
//     getData(function (data) {
//         hostname = data.hostname;
//         firstVisit = moment().diff(moment(data.firstVisit), 'days') + 1;
//         nbVisit = data.nbPages;
//         nbAdsViewedOnSite = data.nbAdsViewed;
//         nbAdsBlocked = data.nbAdsBlocked;
//         nbTrackersBlocked = data.nbTrackersBlocked;
//         generated = ((data.nbAdsViewed) * 0.005).toFixed(2) + '€';
//         loadTime = (data.loadTime * 0.3 / 1000 / 60).toFixed(2);
//         nbAdsViewedToday = data.nbAdsViewedToday;
//         nbMaxAdsPerDay = data.nbMaxAdsPerDay;
//         totalAdsBlocked = data.totalAdsBlocked;
//         totalTrackersBlocked = data.totalTrackersBlocked;
//         totalGenerated = ((data.totalNbAdsViewed) * 0.005).toFixed(2) + '€';
//         siteIsPartner = data.siteIsPartner;
//
//         renderHeader();
//         renderMain();
//         renderFooter();
//     });
// })();

(function () {
    const messaging = vAPI.messaging;
    const adSwitch = document.querySelector('#switch > img');
    const supporting = document.getElementById('supporting');
    const blocking = document.getElementById('blocking');
    const block = document.getElementById('block');
    const value = document.getElementById('value');
    const tracker = document.getElementById('tracker');
    const ad = document.getElementById('ad');
    const firstStatLine = document.querySelector('#stats > div:last-child > p:first-child');
    const lastStatLine = document.querySelector('#stats > div:last-child > p:last-child');
    const controle = document.querySelector('#control > div');
    const progress = document.getElementById('progress');

    let cockpitData = {};
    let state = {
        whitelisted: false,
        partner: false,
        stats: 3
    };

    const drawProgress = function () {
        progress.innerHTML = `
<div style="width: ${(100 * cockpitData.nbAdsViewedToday / cockpitData.nbMaxAdsPerDay).toFixed(0)}%"></div>
<p>${cockpitData.nbAdsViewedToday}/${cockpitData.nbMaxAdsPerDay} PUBS VUES AUJOURD’HUI</p>`;
    };

    const drawSwitch = function () {
        supporting.classList.remove('active');
        blocking.classList.remove('active');
        adSwitch.classList.remove('rotate');
        if (state.whitelisted || state.partner) {
            adSwitch.classList.add('rotate');
            supporting.classList.add('active');
        } else {
            blocking.classList.add('active');
        }
    };

    const drawBlock = function () {
        switch (state.stats) {
            case 1:
                block.style.backgroundColor = 'var(--green)';
                block.style.left = 'calc((100% - (3 * 50px)) / 4)';
                return;
            case 2:
                block.style.backgroundColor = 'var(--blue)';
                block.style.left = 'calc(calc((100% - (3 * 50px)) / 4) * 2 + 55px)';
                return;
            case 3:
                block.style.backgroundColor = 'var(--red)';
                block.style.left = 'calc(calc((100% - (3 * 50px)) / 4) * 3 + 110px)';
                return;
        }
    };

    const drawLine = function () {
        switch (state.stats) {
            case 1:
                firstStatLine.innerHTML = `<strong>${(cockpitData.totalNbAdsViewed * 0.005).toFixed(2)}€</strong> GÉNÉRÉS`;
                lastStatLine.innerHTML = `DONT ${(cockpitData.nbAdsViewed * 0.005).toFixed(2)}€ SUR CE SITE`;
                return;
            case 2:
                firstStatLine.innerHTML = `<strong>${cockpitData.totalTrackersBlocked}</strong> TRACEURS BLOQUÉS`;
                lastStatLine.innerHTML = `DONT ${cockpitData.nbTrackersBlocked} SUR CE SITE`;
                return;
            case 3:
                firstStatLine.innerHTML = `<strong>${cockpitData.totalAdsBlocked}</strong> PUBS ÉVITÉES`;
                lastStatLine.innerHTML = `DONT ${cockpitData.nbAdsBlocked} SUR CE SITE`;
                return;
        }
    };

    const drawStats = function (firstDraw) {
        if (firstDraw) {
            block.classList.add('notransition');
            drawBlock();
            block.offsetHeight;
            block.classList.remove('notransition');
        } else
            drawBlock();

        drawLine();
    };

    (function () {
        messaging.send('popupPanel', {
            what: 'getPopupData'
        }, function (response) {
            messaging.send('adequa', {
                what: 'getCockpitData',
                url: response.pageURL
            }, function (data) {
                cockpitData = data;
                state.whitelisted = data.whitelisted;
                state.partner = data.siteIsPartner;

                if ((state.stats === 3 || state.stats === 2) && state.partner)
                    state.stats = 1;
                else if (state.stats === 1 && !(state.partner || state.whitelisted))
                    state.stats = 3;

                drawSwitch();
                drawStats(true);
                drawProgress();
            });
        });
    })();

    const blockListener = function (number) {
        return function () {
            state.stats = number;
            drawStats();
        };
    };

    const switchListener = function (switchState) {
        return function () {
            if (state.partner) return;

            if(switchState === 1) state.whitelisted = true;
            else if(switchState === 0) state.whitelisted = false;
            else state.whitelisted = !(state.whitelisted || false);

            drawSwitch();
            messaging.send('adequa', {
                what: 'updateUserSiteRules',
                hostname: cockpitData.hostname,
                support: state.whitelisted
            });
        };
    };

    value.addEventListener('click', blockListener(1));
    tracker.addEventListener('click', blockListener(2));
    ad.addEventListener('click', blockListener(3));

    adSwitch.addEventListener('click', switchListener());
    supporting.addEventListener('click', switchListener(1));
    blocking.addEventListener('click', switchListener(0));

    controle.addEventListener('click', function () {
        messaging.send('adequa', {
            what: 'openTab',
            url: 'adequa/dashboard.html#settings'
        });
    });
})();
