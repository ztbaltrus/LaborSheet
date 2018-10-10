var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { PLATFORM } from "aurelia-pal";
import * as Bluebird from 'bluebird';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'LaborSheetWebPartStrings';
var LaborSheetWebPart = (function (_super) {
    __extends(LaborSheetWebPart, _super);
    function LaborSheetWebPart() {
        var _this = _super.call(this) || this;
        Bluebird.config({ warnings: { wForgottenReturn: false } });
        return _this;
    }
    LaborSheetWebPart.prototype.render = function () {
        var _this = this;
        this.domElement.innerHTML = "\n     <div id=\"" + this.instanceId + "\" class=\"" + this.instanceId + "\"  >Loading...</div>\n     ";
        require(['aurelia-bootstrapper'], function (au) {
            au.bootstrap(function (aurelia) {
                aurelia.use
                    .standardConfiguration()
                    .developmentLogging();
                var el = document.getElementById(_this.instanceId);
                aurelia.container.registerInstance("WebPartContext", _this.context);
                aurelia.start().then(function () { return aurelia.setRoot(PLATFORM.moduleName('webparts/laborSheet/app'), el); });
            });
        });
    };
    Object.defineProperty(LaborSheetWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    LaborSheetWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return LaborSheetWebPart;
}(BaseClientSideWebPart));
export default LaborSheetWebPart;
//# sourceMappingURL=LaborSheetWebPart.js.map