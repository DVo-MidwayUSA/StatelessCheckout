var App = (function () {

    function App(options) {

        this.config = $.extend({

            get apiBaseUrl() { return 'http://example.com'; }

        }, options);

        this.setConfig();

    }

    App.prototype.setConfig = function () {

        window.config = this.config;

        console.log(`whatIHaz ${window.config.apiBaseUrl}`);

    };

    return App;

}());