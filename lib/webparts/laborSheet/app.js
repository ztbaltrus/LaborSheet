import { PLATFORM } from 'aurelia-pal';
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Labor Sheet';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'Home' },
            { route: ['production'], name: 'production', moduleId: PLATFORM.moduleName('./production'), nav: true, title: 'Production' }
        ]);
        this.router = router;
    };
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map