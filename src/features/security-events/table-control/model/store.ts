import { create } from 'zustand'

type SortOrder = 'asc' | 'desc';

interface SecurityEventsTableStore {
    page: number;
    setPage: (page: number) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
    sortField: string | null;
    setSortField: (value: string | null) => void;
    sortOrder: SortOrder;
    setSortOrder: (value: SortOrder) => void;
}

const initialFields = {
    page: 1,
    pageSize: 10,
    sortField: null,
    sortOrder: 'asc' as SortOrder
}

export const useSecurityEventsTableStore = create<SecurityEventsTableStore>((set) => {
    return {
        ...initialFields,
        setPage: (page) => set({ page }),
        setPageSize: (pageSize) => {
            set({ pageSize });
        },
        setSortField: (sortField) => {
            set({ sortField })
        },
        setSortOrder: (sortOrder: SortOrder) => {
            set({ sortOrder })
        }
    };
});
