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
var MainTemplate = (function () {
    function MainTemplate(elementtype) {
        if (elementtype === void 0) { elementtype = "div"; }
        this.content = document.createElement(elementtype);
    }
    MainTemplate.prototype.addClass = function (classname) {
        this.content.className += classname;
    };
    MainTemplate.prototype.addTemplateToId = function (id) {
        document.getElementById(id).appendChild(this.content);
    };
    MainTemplate.prototype.addTemplateToBody = function () {
        document.body.appendChild(this.content);
    };
    return MainTemplate;
}());
var TestTemplate = (function (_super) {
    __extends(TestTemplate, _super);
    function TestTemplate(name) {
        var _this = _super.call(this) || this;
        _this.content.innerHTML =
            "<p>" + name + "</p>";
        return _this;
    }
    return TestTemplate;
}(MainTemplate));
var TestTemplateP = (function (_super) {
    __extends(TestTemplateP, _super);
    function TestTemplateP(name) {
        var _this = _super.call(this, "p") || this;
        _this.addClass("test test2");
        _this.content.innerHTML =
            "" + name;
        return _this;
    }
    return TestTemplateP;
}(MainTemplate));
var AddProductTemplate = (function (_super) {
    __extends(AddProductTemplate, _super);
    function AddProductTemplate() {
        var _this = _super.call(this) || this;
        _this.content.innerHTML =
            "<form method=\"post\" action=\"/addProduct\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-check\">\n          <input type=\"checkbox\" name=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n          <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>";
        return _this;
    }
    return AddProductTemplate;
}(MainTemplate));
var test2 = new TestTemplate("testId").addTemplateToId("Testdiv");
var test3 = new TestTemplateP("testP").addTemplateToId("Testdiv");
var test = new TestTemplate("testBody").addTemplateToBody();
var form = new AddProductTemplate().addTemplateToBody();
