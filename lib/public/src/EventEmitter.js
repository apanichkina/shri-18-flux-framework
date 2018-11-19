var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listeners = {};
    }
    EventEmitter.prototype.on = function (event, clb) {
        var _this = this;
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(clb);
        var positionClb = this.listeners[event].length - 1;
        return function () {
            _this.unsubscribe(event, positionClb);
        };
    };
    EventEmitter.prototype.unsubscribe = function (event, position) {
        this.listeners[event].splice(position, 1);
    };
    EventEmitter.prototype.emit = function (event, data) {
        this.listeners[event].forEach(function (clb) {
            clb(data);
        });
    };
    return EventEmitter;
}());
export { EventEmitter };
//# sourceMappingURL=EventEmitter.js.map