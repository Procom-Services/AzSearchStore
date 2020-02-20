export var initiateSearch = function () { return ({
    type: "INITIATE_SEARCH"
}); };
export var setResultsProcessor = function (resultsProcessor) { return ({
    type: "SET_RESULTS_PROCESSOR",
    resultsProcessor: resultsProcessor
}); };
export var recieveResults = function (results, receivedAt, count) { return ({
    type: "RECEIVE_RESULTS",
    results: results,
    receivedAt: receivedAt,
    count: count
}); };
export var appendResults = function (results, receivedAt) { return ({
    type: "APPEND_RESULTS",
    results: results,
    receivedAt: receivedAt
}); };
export var handleSearchError = function (error) { return ({
    type: "HANDLE_ERROR",
    error: error
}); };
//# sourceMappingURL=resultsActions.js.map