import { create } from 'zustand'

interface SecurityFiltersStore {
    status: string | null;
    setStatus: (status: string) => void;
    resetFilters: () => void;

    stationInput: string;
    setStationInput: (value: string) => void;

    stationSearch: string;
}

export const useSecurityFiltersStore = create<SecurityFiltersStore>((set) => {
    let searchTimeout: ReturnType<typeof setTimeout> | null = null;

    return {
        status: null,
        stationInput: '',
        stationSearch: '',

        setStatus: (status) => set({ status }),

        setStationInput: (value: string) => {
            set({ stationInput: value });

            if (searchTimeout) clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                set({ stationSearch: value });
            }, 500);
        },

        resetFilters: () => set({ status: null, stationInput: '', stationSearch: '' }),
    };
});
