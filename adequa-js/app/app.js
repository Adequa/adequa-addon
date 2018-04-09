define([
    'jquery',
    'ractive',
    'rv!html/overlay',
    'text!../../dist/build/main.css'
], function (
    $,
    Ractive,
    overlayTemplate,
    css) {

    'use strict';

    var app = {
        appendProbe: function() {
            var appContainer = $('<div id="adequa-snippet"></div>');
            $("body").append(appContainer);
        },
        register: function() {
            vAPI.messaging.addChannelListener('addon-overlay', function(message) {
                alert("palourde");
                console.log(message);
            });
        },
        init: function () {
            var appContainer = $('<div id="adequa"></div>');
            $("body").append(appContainer);

            var style = $("<style></style>", {type: "text/css"});
            style.text(css);
            $("head").append(style);

            var font = $('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">');
            $("head").append(font);

            var ractive = new Ractive({
                el: 'adequa',
                template: overlayTemplate,
                data: {
                    hidden: false
                }
            });

            ractive.on('dismiss', function(event) {
                if ($(event.event.target).hasClass('adequa-addon-backdrop')) {
                    ractive.set('hidden', true);
                }
            });

            ractive.on('register', function() {
                vAPI.messaging.send(
                    'contentscript',
                    {
                        what: 'debug',
                    }
                );
            });
        },

        confirmWish: function(wish) {
            this.init();
            this.init = function() {};

        },
    };

    return app;

});
