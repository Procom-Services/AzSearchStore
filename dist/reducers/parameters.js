import { combineReducers } from "redux";
import { input } from "./input";
import { searchParameters } from "./searchParameters";
import { suggestionsParameters } from "./suggestionsParameters";
export var parameters = combineReducers({
    input: input,
    searchParameters: searchParameters,
    suggestionsParameters: suggestionsParameters
});
//# sourceMappingURL=parameters.js.map