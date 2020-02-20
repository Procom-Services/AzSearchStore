import { updateObject } from "./reducerUtils";
export var initialState = {
    index: "",
    queryKey: "",
    service: ""
};
export function config(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "SET_CONFIG":
            return action.config;
        case "SET_SEARCH_CALLBACK":
            return updateObject(state, { searchCallback: action.searchCallback });
        case "SET_SUGGEST_CALLBACK":
            return updateObject(state, { suggestCallback: action.suggestCallback });
        default:
            return state;
    }
}
;
//# sourceMappingURL=config.js.map