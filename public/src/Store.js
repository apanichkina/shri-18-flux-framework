"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var StateSingletonClass = (function () {
    function StateSingletonClass() {
        this.reducers = {};
        this.store = {};
        this.listeners = [];
        if (StateSingletonClass.instance) {
            throw new Error('Error: Instantiation failed: Use StateSingletonClass.getInstance() instead of new.');
        }
        StateSingletonClass.instance = this;
    }
    StateSingletonClass.prototype.emitChangedEvent = function () {
        this.listeners.forEach(function (clb) {
            clb.render();
        });
        console.log('changed');
    };
    StateSingletonClass.getInstance = function () {
        return StateSingletonClass.instance;
    };
    StateSingletonClass.prototype.setInitialState = function (data) {
        this.store = data;
    };
    StateSingletonClass.prototype.addReducers = function (reducers) {
        this.reducers = __assign({}, this.reducers, reducers);
    };
    StateSingletonClass.prototype.getStore = function () {
        return this.store;
    };
    StateSingletonClass.prototype.dispatch = function (action) {
        var _this = this;
        console.log('get store');
        Object.keys(this.reducers).forEach(function (key) {
            console.log(key);
            _this.store[key] = _this.reducers[key](_this.store[key], action);
        });
        this.emitChangedEvent();
        return this.store;
    };
    StateSingletonClass.prototype.addListener = function (listener) {
        this.listeners.push(listener);
    };
    return StateSingletonClass;
}());
StateSingletonClass.instance = new StateSingletonClass();
exports.StateSingletonClass = StateSingletonClass;
function dispatch(evt, action) {
    var data = action.payload || {};
    var event = new CustomEvent(action.type, data);
    evt.dispatchEvent(event);
}
exports.dispatch = dispatch;
