import { generateEvent } from './generator';
import { type EventItem, type PaginatedResponse } from './types';

interface FetchEventsParams {
    page: number;
    pageSize: number;
    status?: string | null;
    stationName?: string;
}

const TOTAL_ITEMS = 137;

export const fetchEventsMock = (
    params: FetchEventsParams,
): Promise<PaginatedResponse<EventItem>> => {
    const { page, pageSize, status, stationName } = params;

    return new Promise((resolve) => {
        setTimeout(() => {
            const allData: EventItem[] = [];

            for (let i = 0; i < TOTAL_ITEMS; i += 1) {
                allData.push(generateEvent(i));
            }

            let filteredData = status
                ? allData.filter(event => event.status === status)
                : allData;

            if (stationName && stationName.trim() !== '') {
                const searchLower = stationName.toLowerCase();
                filteredData = filteredData.filter(event =>
                    event.stationName.toLowerCase().includes(searchLower)
                );
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
