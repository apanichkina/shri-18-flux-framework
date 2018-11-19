var Dispatcher = /** @class */ (function () {
    function Dispatcher() {
        if (Dispatcher.instance) {
            throw new Error('Error: Instantiation failed: Use Dispatcher.getInstance() instead of new.');
        }
        Dispatcher.instance = this;
        this.callbacks = [];
    }
    Dispatcher.getInstance = function () {
        return Dispatcher.instance;
    };
    Dispatcher.prototype.add = function (clb) {
        this.callbacks.push(clb);
    };
    Dispatcher.prototype.dispatch = function (action) {
        this.callbacks.forEach(function (clb) {
            clb(action);
        });
    };
    Dispatcher.instance = new Dispatcher();
    return Dispatcher;
}());
export { Dispatcher };
//# sourceMappingURL=Dispatcher.js.map