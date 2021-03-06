var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-framework';
var Home = (function () {
    function Home(webpartContext) {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.previousValue = this.fullName;
        this.webpartContext = webpartContext;
        this.heading = "Hello " + this.webpartContext.pageContext.user.displayName;
    }
    Object.defineProperty(Home.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Home.prototype.submit = function () {
        this.previousValue = this.fullName;
        alert("Welcome, " + this.fullName + "!");
    };
    Home.prototype.canDeactivate = function () {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    };
    Home = __decorate([
        inject("WebPartContextObject")
    ], Home);
    return Home;
}());
export { Home };
var UpperValueConverter = (function () {
    function UpperValueConverter() {
    }
    UpperValueConverter.prototype.toView = function (value) {
        return value && value.toUpperCase();
    };
    return UpperValueConverter;
}());
export { UpperValueConverter };
//# sourceMappingURL=home.js.map