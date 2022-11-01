"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disposable = exports.DisposableStore = void 0;
var DisposableStore = (function () {
    function DisposableStore() {
        this._toDispose = new Set();
        this._isDisposed = false;
    }
    DisposableStore.prototype.add = function (disposable) {
        if (!disposable)
            return disposable;
        if (disposable === this) {
            throw new Error('Cannot register a disposable on itself!');
        }
        if (this._isDisposed)
            disposable.dispose();
        else
            this._toDispose.add(disposable);
        return disposable;
    };
    DisposableStore.prototype.clear = function () {
        var e_1, _a;
        try {
            try {
                for (var _b = __values(this._toDispose.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
                    value.dispose();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        finally {
            this._toDispose.clear();
        }
    };
    DisposableStore.prototype.dispose = function () {
        if (this._isDisposed)
            return;
        this._isDisposed = true;
        this.clear();
    };
    return DisposableStore;
}());
exports.DisposableStore = DisposableStore;
var Disposable = (function () {
    function Disposable() {
        this._store = new DisposableStore();
    }
    Disposable.prototype.dispose = function () {
        this._store.dispose();
    };
    Disposable.prototype.register = function (disposables) {
        var e_2, _a;
        disposables = disposables instanceof Array ? disposables : [disposables];
        try {
            for (var disposables_1 = __values(disposables), disposables_1_1 = disposables_1.next(); !disposables_1_1.done; disposables_1_1 = disposables_1.next()) {
                var v = disposables_1_1.value;
                if (v === this) {
                    throw new Error('Cannot register a disposable on itself!');
                }
                this._store.add(v);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (disposables_1_1 && !disposables_1_1.done && (_a = disposables_1.return)) _a.call(disposables_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return Disposable;
}());
exports.Disposable = Disposable;
