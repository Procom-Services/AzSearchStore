import * as Store from "../store";
import { combineReducers, Reducer } from "redux";
import { config } from "./config";
import { results } from "./results";
import { parameters } from "./parameters";
import { facets } from "./facets";
import { suggestions } from "./suggestions";

export const reducers: Reducer = combineReducers<Store.SearchState>({
    config,
    results,
    parameters,
    facets,
    suggestions
});
