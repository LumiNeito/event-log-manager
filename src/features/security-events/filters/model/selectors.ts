import { INITIAL_FILTERS } from "./store";

export const selectHasActiveFilters = (state: {
    status: string | null;
    searchInput: string;
    searchString: string;
}) =>
    state.status !== INITIAL_FILTERS.status ||
    state.searchString !== INITIAL_FILTERS.searchString;
