"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Template = (function () {
    function Template() {
        this.content = document.createElement("div");
    }
    Template.prototype.addTemplateToId = function (id) {
        document.getElementById(id).appendChild(this.content);
    };
    Template.prototype.addTemplateToBody = function () {
        document.body.appendChild(this.content);
    };
    return Template;
}());
var Testtemplate = (function (_super) {
    __extends(Testtemplate, _super);
    function Testtemplate(name) {
        var _this = _super.call(this) || this;
        _this.content.innerHTML =
            "<p>" + name + "</p>";
        return _this;
    }
    return Testtemplate;
}(Template));
var test = new Testtemplate("test").addTemplateToBody();
var test2 = new Testtemplate("test2").addTemplateToId("Testdiv");
