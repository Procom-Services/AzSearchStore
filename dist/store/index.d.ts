export declare type Config = {
    index: string;
    queryKey: string;
    service: string;
    suggestCallback?: (state: SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>;
    searchCallback?: (state: SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>;
};
export declare type SearchApiVersion = "2016-09-01" | "2015-02-28-Preview";
export declare type SearchMode = "any" | "all";
export declare type QueryType = "simple" | "full";
export declare type SearchParameters = {
    count: boolean;
    top: number;
    skip: number;
    orderby: string;
    searchMode: SearchMode;
    scoringProfile: string;
    select: string;
    searchFields: string;
    minimumCoverage?: string;
    apiVersion: SearchApiVersion;
    queryType: QueryType;
    scoringParameters: string[];
    highlight: string;
    highlightPreTag: string;
    highlightPostTag: string;
};
export declare type SearchParametersUpdate = {
    count?: boolean;
    top?: number;
    skip?: number;
    orderby?: string;
    searchMode?: SearchMode;
    scoringProfile?: string;
    select?: string;
    searchFields?: string;
    minimumCoverage?: string;
    apiVersion?: SearchApiVersion;
    queryType?: QueryType;
    scoringParameters?: string[];
    highlight?: string;
    highlightPreTag?: string;
    highlightPostTag?: string;
};
export declare type SuggestionsParameters = {
    top: number;
    filter: string;
    orderby: string;
    fuzzy: boolean;
    highlightPreTag: string;
    highlightPostTag: string;
    select: string;
    searchFields: string;
    minimumCoverage?: string;
    apiVersion: SearchApiVersion;
    suggesterName: string;
};
export declare type SuggestionsParametersUpdate = {
    top?: number;
    filter?: string;
    orderby?: string;
    fuzzy?: boolean;
    highlightPreTag?: string;
    highlightPostTag?: string;
    select?: string;
    searchFields?: string;
    minimumCoverage?: string;
    apiVersion?: SearchApiVersion;
    suggesterName?: string;
};
export declare type Parameters = {
    searchParameters: SearchParameters;
    suggestionsParameters: SuggestionsParameters;
    input: string;
};
export declare type SearchResults = {
    count: number;
    isFetching: boolean;
    lastUpdated: number;
    resultsProcessor?: (results: {}[]) => {}[];
    results: {}[];
};
export declare type Suggestions = {
    isFetching: boolean;
    lastUpdated: number;
    suggestionsProcessor?: (suggestions: {}[]) => {}[];
    suggestions: {}[];
};
export declare type CheckboxFacetItem = {
    value: string | number;
    count: number;
    selected: boolean;
};
export declare type FacetSortingMode = "count" | "count-" | "value" | "value-";
export declare type RangeDataType = "number" | "date";
export declare type RangeFacet = {
    type: "RangeFacet";
    dataType: RangeDataType;
    key: string;
    min: number | Date;
    max: number | Date;
    filterLowerBound: number | Date;
    filterUpperBound: number | Date;
    lowerBucketCount: number;
    middleBucketCount: number;
    upperBucketCount: number;
    facetClause: string;
    filterClause: string;
};
export declare type CheckboxDataType = "number" | "string" | "collection";
export declare type CheckboxFacet = {
    type: "CheckboxFacet";
    dataType: CheckboxDataType;
    key: string;
    values: {
        [key: string]: CheckboxFacetItem;
    };
    count: number;
    sort: FacetSortingMode;
    facetClause: string;
    filterClause: string;
};
export declare type FacetResult = {
    count: number;
    value?: string | number;
    from?: number | Date;
    to?: number | Date;
};
export declare type FacetMode = "simple" | "advanced";
export declare type Facets = {
    facetMode: FacetMode;
    globalFilters: {
        [key: string]: string;
    };
    facets: {
        [key: string]: Facet;
    };
};
export declare type Facet = RangeFacet | CheckboxFacet;
export declare type SearchState = {
    config: Config;
    results: SearchResults;
    suggestions: Suggestions;
    facets: Facets;
    parameters: Parameters;
};
