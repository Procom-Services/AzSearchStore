export var initialState = "*";
export function input(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "SET_INPUT":
            return action.input;
        default:
            return state;
    }
}
//# sourceMappingURL=input.js.map