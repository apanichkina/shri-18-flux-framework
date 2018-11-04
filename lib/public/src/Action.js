export function createAction(type, payload) {
    var result;
    if (payload) {
        result = { type: type, payload: payload };
    }
    else {
        result = { type: type };
    }
    return result;
}
//# sourceMappingURL=Action.js.map