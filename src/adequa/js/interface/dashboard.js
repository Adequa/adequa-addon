'use strict';
(function () {
    const iframe = document.querySelector('main > iframe');
    const aside = document.querySelector('main > aside');
    const links = aside.querySelectorAll('a');

    if (location.hash) {
        iframe.setAttribute('src', location.hash.split('#')[1] + '.html');
        for (let element of links) {
            if (element.getAttribute('href') === location.hash)
                element.classList.add('active');
        }
    }

    for (let link of links) {
        link.addEventListener('click', function (event) {
            if(event.target.hash.startsWith('#')) {
                iframe.setAttribute('src', event.target.hash.split('#')[1] + '.html');
                for (let element of links)
                    element.classList.remove('active');

                event.target.classList.add('active');
            }
        });
    }
})();
