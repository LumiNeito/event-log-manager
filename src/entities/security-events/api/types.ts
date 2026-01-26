
export type EventStatus = 'login' | 'fileAccess' | 'logout';

export interface EventItem {
    key: string;
    code: string;
    id: string;
    stationName: string;
    address: string;
    version: string;
    conf: string;
    status: EventStatus
    date: Date
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
}