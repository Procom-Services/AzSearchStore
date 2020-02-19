/// <reference types="redux" />
import { Store } from "../store";
import { Action } from "redux";
export declare const parameters: <A extends Action>(state: Store.Parameters, action: A) => Store.Parameters;
