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
exports.CommandManager = void 0;
var dispose_1 = require("./dispose");
var vscode = require("vscode");
var CommandManager = (function (_super) {
    __extends(CommandManager, _super);
    function CommandManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._commandIds = new Set();
        return _this;
    }
    CommandManager.prototype.dispose = function () {
        this._commandIds.clear();
        _super.prototype.dispose.call(this);
    };
    CommandManager.prototype.register = function (command) {
        this._registerCommand(command.id, command.execute, command);
        return command;
    };
    CommandManager.prototype._registerCommand = function (id, handler, thisArg) {
        if (this._commandIds.has(id))
            return;
        this.add(vscode.commands.registerCommand(id, handler, thisArg));
        this._commandIds.add(id);
    };
    return CommandManager;
}(dispose_1.DisposableStore));
exports.CommandManager = CommandManager;
