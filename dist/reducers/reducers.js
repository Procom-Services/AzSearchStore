import { combineReducers } from "redux";
import { config } from "./config";
import { results } from "./results";
import { parameters } from "./parameters";
import { facets } from "./facets";
import { suggestions } from "./suggestions";
export var reducers = combineReducers({
    config: config,
    results: results,
    parameters: parameters,
    facets: facets,
    suggestions: suggestions
});
//# sourceMappingURL=reducers.js.map