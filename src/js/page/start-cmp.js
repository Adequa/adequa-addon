(function(){
    let started = false;

    if(typeof window.__cmp === "function" && !window.adequaCmpBuffer) {
        console.log("✨ CMP loaded from the add-on");

        const timeout = setTimeout(function(){
            started = true;
            window.AdequaCmp.showCookieBanner();
        }, 500);

        window.__cmp("getConsentData", null, function(res){
            clearTimeout(timeout);
            if(started) return;
            window.AdequaCmp.showCookieBanner((res || {}).consentData);
        });
    }
})();
