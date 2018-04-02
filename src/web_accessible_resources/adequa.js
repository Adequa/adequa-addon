'use strict';

function appendAds() {
    if (window.evaluated) {
        return;
    }

    window.evaluated = true;

    var adElements = document.getElementsByClassName('dfp_slot');
    var leMondeAdsFormats = JSON.parse(
        '{"inread":{"desktop":[["fluid"],[2,2],[533,300]]},"cover":{"desktop":[[1,1]]},"pave_milieu":{"desktop":[[300,600],[300,250]]},"pave_haut":{"desktop":[[300,250],[300,600],[300,800],[300,900],[300,1000],[300,1050]]},"pave_bas":{"desktop":[[300,250]]},"partenaire_middle":{"desktop":[["fluid"],[1,1]]},"partenaire_bottom":{"desktop":[["fluid"],[1,1]]},"parallaxe":{"desktop":[["out-of-page"]]},"z_droite":{"desktop":[[300,60]]},"habillage":{"desktop":[["out-of-page"]]},"dhtml":{"desktop":[["out-of-page"]]},"banniere_haute":{"desktop":[[728,90],[970,250],["970 ",90],[1000,90],[1000,200],[1000,300],[1000,350],[1000,400],[1000,450],[1000,500],[468,60]]},"banniere_basse":{"desktop":[[728,90],[1000,90],[468,60]]}}'
    );

    for (var i = 0; i < adElements.length ; i++) {
        var currentAdElement = adElements[i];
        var adFormat = currentAdElement.dataset.format;

        var parentAdElement = currentAdElement.parentNode;

        if (leMondeAdsFormats[adFormat]) {
            var availableSizes = leMondeAdsFormats[adFormat]['desktop'] || [];
            var bestSize = null;

            for (var j = 0; j < availableSizes.length; j++) {
                var sizeToEvaluate = availableSizes[j];
                console.log(adFormat);

                var isValidSize = Array.isArray(sizeToEvaluate) &&
                    sizeToEvaluate.length === 2 &&
                    sizeToEvaluate[0] > 10 &&
                    sizeToEvaluate[1] > 10 &&
                    sizeToEvaluate[0] <= parentAdElement.offsetWidth;
                    console.log(parentAdElement.offsetWidth);
                console.log(sizeToEvaluate, isValidSize);
                if (
                    isValidSize &&
                    (
                        bestSize === null ||
                        bestSize[0] < sizeToEvaluate[0]
                    )) {
                    bestSize = sizeToEvaluate;
                }
            }



            if (bestSize) {
                var div = document.createElement('div');
                div.innerHTML =
                    '<div style="display:table;background-color: rgb(67, 151, 152); width:' + bestSize[0] + 'px;height:'+bestSize[1]+'px">' +
                    '<span style="display: table-cell;text-align: center;vertical-align: middle;color: white;font-weight: bold;font-size: 32px;">Adequa ' + bestSize[0] + 'x' + bestSize[1] + '</span>' +
                    '</div>';
                currentAdElement.appendChild(div);
            }
        }
    }
};
appendAds();
