export var setSearchApiVersion = function (apiVersion) { return ({
    type: "SET_SEARCH_APIVERSION",
    apiVersion: apiVersion
}); };
export var setSearchParameters = function (parameters) { return ({
    type: "SET_SEARCH_PARAMETERS",
    parameters: parameters
}); };
export var updateSearchParameters = function (parameters) { return ({
    type: "UPDATE_SEARCH_PARAMETERS",
    parameters: parameters
}); };
export var incrementSkip = function () { return ({
    type: "INCREMENT_SKIP",
}); };
export var decrementSkip = function () { return ({
    type: "DECREMENT_SKIP",
}); };
export var setPage = function (page) { return ({
    type: "SET_PAGE",
    page: page
}); };
//# sourceMappingURL=searchParametersActions.js.map