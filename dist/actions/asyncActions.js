import * as resultsActions from "./resultsActions";
import * as suggestionsActions from "./suggestionsActions";
import * as facetsActions from "./facetsActions";
import * as promise from "es6-promise";
import "isomorphic-fetch";
import { buildSearchURI, buildSuggestionsURI, buildPostBody, suggestParameterValidator, searchParameterValidator } from "../utils/uriHelper";
// todo this should probably be at the entry point of app
promise.polyfill();
var userAgent = "AzSearchStore/Preview";
var searchAndDispatch = function (dispatch, getState, _a) {
    var resultsActionToDispatch = _a.resultsActionToDispatch, facetsActionToDispatch = _a.facetsActionToDispatch;
    var searchState = getState();
    var service = searchState.config.service;
    var index = searchState.config.index;
    var parameters = searchState.parameters;
    var searchCallback = searchState.config.searchCallback;
    var searchURI = buildSearchURI(searchState.config, parameters);
    var postBody = buildPostBody(parameters.searchParameters, parameters.input, searchParameterValidator, searchState.facets);
    var headers = new Headers({
        "api-key": searchState.config.queryKey,
        "Content-Type": "application/json",
        "User-Agent": userAgent,
        "x-ms-client-user-agent": userAgent
    });
    dispatch(resultsActions.initiateSearch());
    var promise = searchCallback ? searchCallback(searchState, postBody) :
        fetch(searchURI, {
            mode: "cors",
            headers: headers,
            method: "POST",
            body: JSON.stringify(postBody)
        });
    return promise.then(function (response) { return response.json(); })
        .then(function (json) {
        var results = json["value"];
        var count = json["@odata.count"];
        count = count >= 0 ? count : -1;
        dispatch(resultsActionToDispatch(results, Date.now(), count));
        var facets = json["@search.facets"];
        if (facetsActionToDispatch) {
            dispatch(facetsActionToDispatch(facets));
        }
    })
        .catch(function (error) {
        dispatch(resultsActions.handleSearchError(error.message));
    });
};
export var fetchSearchResults = function (dispatch, getState) {
    return searchAndDispatch(dispatch, getState, { resultsActionToDispatch: resultsActions.recieveResults, facetsActionToDispatch: facetsActions.setFacetsValues });
};
export var loadMoreSearchResults = function (dispatch, getState) {
    return searchAndDispatch(dispatch, getState, { resultsActionToDispatch: resultsActions.appendResults, facetsActionToDispatch: null });
};
export var fetchSearchResultsFromFacet = function (dispatch, getState) {
    return searchAndDispatch(dispatch, getState, { resultsActionToDispatch: resultsActions.recieveResults, facetsActionToDispatch: facetsActions.updateFacetsValues });
};
export var suggest = function (dispatch, getState) {
    var searchState = getState();
    var service = searchState.config.service;
    var index = searchState.config.index;
    var suggestCallBack = searchState.config.suggestCallback;
    var parameters = searchState.parameters;
    var suggestURI = buildSuggestionsURI(searchState.config, searchState.parameters);
    var postBody = buildPostBody(parameters.suggestionsParameters, parameters.input, suggestParameterValidator);
    var headers = new Headers({
        "api-key": searchState.config.queryKey,
        "Content-Type": "application/json",
        "User-Agent": userAgent,
        "x-ms-client-user-agent": userAgent
    });
    dispatch(suggestionsActions.initiateSuggest());
    var promise = suggestCallBack ? suggestCallBack(searchState, postBody) :
        fetch(suggestURI, {
            mode: "cors",
            headers: headers,
            method: "POST",
            body: JSON.stringify(postBody)
        });
    return promise.then(function (response) { return response.json(); })
        .then(function (json) {
        var suggestions = json["value"];
        dispatch(suggestionsActions.recieveSuggestions(suggestions, Date.now()));
    })
        .catch(function (error) {
        dispatch(suggestionsActions.handleSuggestError(error.message));
    });
};
//# sourceMappingURL=asyncActions.js.map