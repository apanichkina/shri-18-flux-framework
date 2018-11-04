"use strict";
exports.__esModule = true;
function createAction(type, payload) {
    var result;
    if (payload) {
        result = { type: type, payload: payload };
    }
    else {
        result = { type: type };
    }
    return result;
}
exports.createAction = createAction;
