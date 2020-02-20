import { updateObject } from "./reducerUtils";
export var initialState = {
    isFetching: false,
    lastUpdated: 0,
    suggestions: []
};
export function suggestions(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "INITIATE_SUGGEST":
            return updateObject(state, { isFetching: true });
        case "SET_SUGGESTIONS_PROCESSOR":
            return updateObject(state, { suggestionsProcessor: action.suggestionsProcessor });
        case "CLEAR_SUGGESTIONS":
            return updateObject(state, { suggestions: [] });
        case "RECEIVE_SUGGESTIONS":
            var suggestions_1 = state.suggestionsProcessor ? state.suggestionsProcessor(action.suggestions) : action.suggestions;
            return updateObject(state, { isFetching: false, lastUpdated: action.receivedAt, suggestions: suggestions_1 });
        default:
            return state;
    }
}
//# sourceMappingURL=suggestions.js.map