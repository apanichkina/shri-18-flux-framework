var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Store = /** @class */ (function () {
    function Store(inital, rootReducer, dispatcher, emitter) {
        var _this = this;
        this.store = {};
        this.setInitialStore(inital);
        this.setReducers(rootReducer);
        dispatcher.add(function (action) {
            _this.updateStore(action);
            emitter.emit('storeUpdate', { type: action.type, store: __assign({}, _this.store) });
        });
    }
    Store.prototype.setInitialStore = function (data) {
        this.store = data;
    };
    Store.prototype.setReducers = function (reducer) {
        this.reducers = reducer;
    };
    Store.prototype.getStore = function (field) {
        var value = this.store[field]; // TODO use deep copy
        return value;
    };
    Store.prototype.updateStore = function (action) {
        this.store = this.reducers(this.store, action);
    };
    return Store;
}());
export { Store };
//# sourceMappingURL=Store.js.map