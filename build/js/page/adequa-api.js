import {Emitter} from "./event/emitter";
import {Handler} from "./event/handler"

(function(){

    Handler.setup(Emitter);

    const Adequa = {
        getViews: function(callback){
            Emitter.sendMessage({what: "getSiteViews"}, callback)
        },
        getConsent: function(callback){
            Emitter.sendMessage({what: "getConsent"}, callback)
        },
        // cmp: (command, parameter, callback) => {
        //     switch (command) {
        //         case 'getVendorConsents':
        //             Emitter.sendMessage({what: "getVendorConsents", vendorIds: parameter}, callback);
        //             return;
        //         case 'getConsentData':
        //             Emitter.sendMessage({what: "getConsentData"}, callback);
        //             return;
        //         case 'ping':
        //             callback({
        //                 gdprApplies: true,
        //                 cmpLoaded: true
        //             }, true);
        //             return;
        //     }
        // },
        // addSettings: function (settings) {
        //     Emitter.sendMessage({what: "setSettings", settings});
        // },
    };

    window.Adequa = Adequa;
})();

