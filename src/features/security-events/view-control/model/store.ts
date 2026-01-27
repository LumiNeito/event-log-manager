import { create } from 'zustand'

interface SecurityEventCardStore {
    open: boolean;
    selectedId: string | null;
    setShowEventCard: () => void;
    setCloseEventCard: () => void;
    setSelectedId: (selectedId: string | null) => void;
}

const initialFields = {
    open: false,
    selectedId: null
}

export const useSecurityEventCardStore = create<SecurityEventCardStore>((set) => {
    return {
        ...initialFields,
        setShowEventCard: () => set({ open: true }),
        setCloseEventCard: () => set({ open: false }),
        setSelectedId: (selectedId) => set({ selectedId })
    };
});
