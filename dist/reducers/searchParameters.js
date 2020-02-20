import { updateObject } from "./reducerUtils";
export var initialState = {
    count: false,
    orderby: null,
    scoringProfile: null,
    searchFields: null,
    select: null,
    skip: 0,
    top: 50,
    apiVersion: "2016-09-01",
    searchMode: "any",
    queryType: "simple",
    highlight: null,
    highlightPreTag: null,
    highlightPostTag: null,
    scoringParameters: null
};
export function searchParameters(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "SET_SEARCH_APIVERSION":
            return updateObject(state, { apiVersion: action.apiVersion });
        case "SET_SEARCH_PARAMETERS":
            return action.parameters;
        case "UPDATE_SEARCH_PARAMETERS":
            return updateObject(state, action.parameters);
        case "INCREMENT_SKIP":
            return updateObject(state, { skip: state.skip + state.top });
        case "DECREMENT_SKIP":
            var skip = state.skip - state.top;
            skip = skip >= 0 ? skip : 0;
            return updateObject(state, { skip: skip });
        case "SET_PAGE":
            skip = (action.page - 1) * state.top;
            skip = skip >= 0 ? skip : 0;
            skip = skip <= 100000 ? skip : 100000;
            return updateObject(state, { skip: skip });
        default:
            return state;
    }
}
//# sourceMappingURL=searchParameters.js.map