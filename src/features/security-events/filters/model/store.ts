import { create } from 'zustand'

export const INITIAL_FILTERS = {
    status: null,
    stationInput: '',
    stationSearch: '',
}

interface SecurityFiltersStore {
    status: string | null;
    setStatus: (status: string | null) => void;
    resetFilters: () => void;
    stationInput: string;
    setStationInput: (value: string) => void;
    setStationSearch: (value: string) => void;
    stationSearch: string;
}

export const useSecurityFiltersStore = create<SecurityFiltersStore>((set) => {
    let searchTimeout: ReturnType<typeof setTimeout> | null = null;

    return {
        ...INITIAL_FILTERS,
        setStatus: (status: string | null) => set({ status }),
        setStationInput: (value: string) => {
            set({ stationInput: value });

            if (searchTimeout) clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                set({ stationSearch: value });
            }, 500);
        },
        setStationSearch: (value: string) => {
            set({
                stationSearch: value,
                stationInput: value
            })
        },

        resetFilters: () => set({ status: null, stationInput: '', stationSearch: '' }),
    };
});
