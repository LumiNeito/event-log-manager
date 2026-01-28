import { type EventItem } from './types';

const USERS = [
    "Иван Петров",
    "Алексей Смирнов",
    "Дмитрий Иванов",
    "Сергей Кузнецов",
    "Андрей Попов",
    "Максим Соколов",
    "Михаил Лебедев",
    "Николай Козлов",
    "Егор Новиков",
    "Владимир Морозов",
];


const STATIONS = [
    'NJ-Win-10B.pe-ri.local',
    'NJ-Win-7A.pe-ri.local',
    'NJ-Win-10G.pe-ri.local',
    'NJ-Win-10C.pe-ri.local',
];

const STATUSES: EventItem['status'][] = [
    'login',
    'fileAccess',
    'logout',
];

export const generateEvent = (index: number): EventItem => {
    const date = new Date(`2022-11-07T09:${50 + (index % 10)}:00`);
    const status = STATUSES[index % STATUSES.length];

    return {
        key: String(index),
        code: String(15 + index).padStart(15, '0'),
        id: crypto.randomUUID(),
        stationName: STATIONS[index % STATIONS.length],
        userName: USERS[index % USERS.length],
        address: `192.168.100.${200 + (index % 50)}`,
        version: '2.8.2.2246',
        conf: `CONF#04${10 + (index % 3)}`,
        status,
        date,
    };
};
