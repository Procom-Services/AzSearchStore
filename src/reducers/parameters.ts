import * as Store from "../store";
import { combineReducers, Action, Reducer } from "redux";
import { input } from "./input";
import { searchParameters } from "./searchParameters";
import { suggestionsParameters } from "./suggestionsParameters";


export const parameters: Reducer = combineReducers<Store.Parameters>({
    input,
    searchParameters,
    suggestionsParameters
});
