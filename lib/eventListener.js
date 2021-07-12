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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEventListener = exports.EventListenerBase = void 0;
var dispose_1 = require("./dispose");
var EventListenerBase = (function (_super) {
    __extends(EventListenerBase, _super);
    function EventListenerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventListenerBase;
}(dispose_1.Disposable));
exports.EventListenerBase = EventListenerBase;
var AggregateEventListener = (function (_super) {
    __extends(AggregateEventListener, _super);
    function AggregateEventListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AggregateEventListener;
}(dispose_1.DisposableStore));
exports.AggregateEventListener = AggregateEventListener;
