setTimeout(function(){
    if(typeof window.__cmp === "function") {
        window.__cmp("getVendorConsents", null, function(vendorConsents){
            window.postMessage(
                {
                    direction: "adequa-tocontentscript",
                    message: {
                        what: "sendVendorConsents",
                        vendorConsents: vendorConsents
                    }
                },
                "*"
            );
        })
    }

}, 1000);
