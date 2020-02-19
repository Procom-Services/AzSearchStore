import * as Store from "../store";
import "isomorphic-fetch";
import { ThunkAction } from "redux-thunk";
import { Action } from 'redux';
export declare const fetchSearchResults: ThunkAction<Promise<void>, Store.SearchState, {}, Action>;
export declare const loadMoreSearchResults: ThunkAction<Promise<void>, Store.SearchState, {}, Action>;
export declare const fetchSearchResultsFromFacet: ThunkAction<Promise<void>, Store.SearchState, {}, Action>;
export declare const suggest: ThunkAction<Promise<void>, Store.SearchState, {}, Action>;
