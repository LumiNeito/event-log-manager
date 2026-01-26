import { type EventItem } from './types';

const STATIONS = [
    'NJ-Win-10B.pe-ri.local',
    'NJ-Win-7A.pe-ri.local',
    'NJ-Win-10G.pe-ri.local',
    'NJ-Win-10C.pe-ri.local',
];

const STATES = [
    'Защищена',
    'Shutdown',
];

const STATUSES: EventItem['status'][] = [
    'login',
    'fileAccess',
    'logout',
];

export const generateEvent = (index: number): EventItem => {
    const state = STATES[index % STATES.length];
    const date = `07.11.2022 09:${50 + (index % 10)}`;
    const status = STATUSES[index % STATUSES.length];

    return {
        key: String(index),
        code: String(15 + index).padStart(15, '0'),
        id: crypto.randomUUID(),
        stationName: STATIONS[index % STATIONS.length],
        address: `192.168.100.${200 + (index % 50)}`,
        version: '2.8.2.2246',
        conf: `CONF#04${10 + (index % 3)}`,
        state: `${state}, ${date}`,
        status
    };
};
