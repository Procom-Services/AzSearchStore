export var initiateSuggest = function () { return ({
    type: "INITIATE_SUGGEST"
}); };
export var setSuggestionsProcessor = function (suggestionsProcessor) { return ({
    type: "SET_SUGGESTIONS_PROCESSOR",
    suggestionsProcessor: suggestionsProcessor
}); };
export var recieveSuggestions = function (suggestions, receivedAt) { return ({
    type: "RECEIVE_SUGGESTIONS",
    suggestions: suggestions,
    receivedAt: receivedAt,
}); };
export var clearSuggestions = function () { return ({
    type: "CLEAR_SUGGESTIONS",
}); };
export var handleSuggestError = function (error) { return ({
    type: "HANDLE_ERROR",
    error: error
}); };
//# sourceMappingURL=suggestionsActions.js.map