/// <reference types="redux" />
import { Store } from "../store";
import { Action } from "redux";
export declare const reducers: <A extends Action>(state: Store.SearchState, action: A) => Store.SearchState;
