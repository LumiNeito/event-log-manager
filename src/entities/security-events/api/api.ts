import { generateEvent } from './generator';
import type { EventItem, PaginatedResponse } from './types';

interface FetchEventsParams {
    page: number;
    pageSize: number;
    status?: string | null;
    searchString?: string;
    sortByDate?: 'asc' | 'desc';
}

const TOTAL_ITEMS = 137;

export const fetchEventsMock = (
    params: FetchEventsParams,
): Promise<PaginatedResponse<EventItem>> => {
    const { page, pageSize, status, searchString, sortByDate = "asc" } = params;

    return new Promise((resolve) => {
        setTimeout(() => {
            const allData: EventItem[] = [];

            for (let i = 0; i < TOTAL_ITEMS; i += 1) {
                allData.push(generateEvent(i));
            }

            let filteredData = status
                ? allData.filter(event => event.status === status)
                : allData;

            if (searchString && searchString.trim() !== '') {
                const searchLower = searchString.toLowerCase();
                filteredData = filteredData.filter(event =>
                    event.stationName.toLowerCase().includes(searchLower) || event.userName.toLowerCase().includes(searchLower)
                );
            }

            if (sortByDate) {
                filteredData.sort((a, b) => {
                    if (sortByDate === 'asc') {
                        return a.date.getTime() - b.date.getTime();
                    } else {
                        return b.date.getTime() - a.date.getTime();
                    }
                });
            }

            const startIndex = (page - 1) * pageSize;
            const endIndex = Math.min(startIndex + pageSize, filteredData.length);

            const paginatedData = filteredData.slice(startIndex, endIndex);

            resolve({
                data: paginatedData,
                total: filteredData.length,
                page,
                pageSize,
            });
        }, 600);
    });
};
