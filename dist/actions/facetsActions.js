export var setFacetsValues = function (facets) { return ({
    type: "SET_FACETS_VALUES",
    facets: facets
}); };
export var updateFacetsValues = function (facets) { return ({
    type: "UPDATE_FACETS_VALUES",
    facets: facets
}); };
export var addCheckboxFacet = function (key, dataType, count, sort) {
    if (count === void 0) { count = 5; }
    if (sort === void 0) { sort = "count"; }
    return ({
        type: "ADD_CHECKBOX_FACET",
        key: key,
        dataType: dataType,
        count: count,
        sort: sort
    });
};
export var addRangeFacet = function (key, dataType, min, max) { return ({
    type: "ADD_RANGE_FACET",
    dataType: dataType,
    key: key,
    min: min,
    max: max
}); };
export var setFacetMode = function (facetMode) { return ({
    type: "SET_FACET_MODE",
    facetMode: facetMode
}); };
export var toggleCheckboxFacetSelection = function (key, value) { return ({
    type: "TOGGLE_CHECKBOX_SELECTION",
    key: key,
    value: value
}); };
export var setFacetRange = function (key, lowerBound, upperBound) { return ({
    type: "SET_FACET_RANGE",
    key: key,
    lowerBound: lowerBound,
    upperBound: upperBound
}); };
export var clearFacetsSelections = function () { return ({ type: "CLEAR_FACETS_SELECTIONS" }); };
export var setGlobalFilter = function (key, filter) { return ({ type: "SET_GLOBAL_FILTER", key: key, filter: filter }); };
//# sourceMappingURL=facetsActions.js.map