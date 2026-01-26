import { INITIAL_FILTERS } from "./store";

export const selectHasActiveFilters = (state: {
    status: string | null;
    stationInput: string;
    stationSearch: string;
}) =>
    state.status !== INITIAL_FILTERS.status ||
    state.stationInput !== INITIAL_FILTERS.stationInput ||
    state.stationSearch !== INITIAL_FILTERS.stationSearch;
