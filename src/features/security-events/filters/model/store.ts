import { create } from 'zustand'

export const INITIAL_FILTERS = {
    status: null,
    searchInput: '',
    searchString: '',
}

interface SecurityFiltersStore {
    status: string | null;
    setStatus: (status: string | null) => void;
    resetFilters: () => void;
    searchInput: string;
    setSearchInput: (value: string) => void;
    setSearchString: (value: string) => void;
    searchString: string;
}

export const useSecurityFiltersStore = create<SecurityFiltersStore>((set) => {
    let searchTimeout: ReturnType<typeof setTimeout> | null = null;

    return {
        ...INITIAL_FILTERS,
        setStatus: (status: string | null) => set({ status }),
        setSearchInput: (value: string) => {
            set({ searchInput: value });

            if (searchTimeout) clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                set({ searchString: value });
            }, 500);
        },
        setSearchString: (value: string) => {
            set({
                searchString: value,
                searchInput: value
            })
        },

        resetFilters: () => set({ status: null, searchInput: '', searchString: '' }),
    };
});
