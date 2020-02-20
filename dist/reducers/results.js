import { updateObject } from "./reducerUtils";
export var initialState = {
    count: -1,
    isFetching: false,
    lastUpdated: 0,
    results: []
};
export function results(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "INITIATE_SEARCH":
            return updateObject(state, { isFetching: true });
        case "SET_RESULTS_PROCESSOR":
            return updateObject(state, { resultsProcessor: action.resultsProcessor });
        case "RECEIVE_RESULTS":
            var results_1 = state.resultsProcessor ? state.resultsProcessor(action.results) : action.results;
            return updateObject(state, { isFetching: false, lastUpdated: action.receivedAt, results: results_1, count: action.count });
        case "APPEND_RESULTS":
            results_1 = state.resultsProcessor ? state.results.concat(state.resultsProcessor(action.results)) : state.results.concat(action.results);
            return updateObject(state, { isFetching: false, lastUpdated: action.receivedAt, results: results_1 });
        default:
            return state;
    }
}
//# sourceMappingURL=results.js.map