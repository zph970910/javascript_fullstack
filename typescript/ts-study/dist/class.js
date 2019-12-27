"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.run = function () {
        console.log('跑起来。。。');
    };
    Cat.prototype.eat = function () {
        console.log('吃起来。。。');
    };
    Cat.prototype.sleep = function () {
        console.log('睡觉吧。。。');
    };
    return Cat;
}());
var GRT = (function (_super) {
    __extends(GRT, _super);
    function GRT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GRT.prototype.init = function () {
        this.run();
        this.sleep();
    };
    return GRT;
}(Cat));
var car = new GRT();
car.init();
//# sourceMappingURL=class.js.map