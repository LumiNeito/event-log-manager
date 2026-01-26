import { Descriptions, type DescriptionsProps } from "antd"
import type { EventItem } from "../api/types";

interface SecurityEventCardProps {
    data?: EventItem
}

export const SecurityEventCard = ({ data }: SecurityEventCardProps) => {

    const items: DescriptionsProps['items'] = [
        {
            key: 'code',
            label: 'Код',
            children: data?.code || '',
        },
        {
            key: 'clientId',
            label: 'ИД клиента',
            children: data?.id || '',
        },
        {
            key: 'stationName',
            label: 'Имя станции',
            children: data?.stationName || '',
        },
        {
            key: 'ipAddress',
            label: 'IP-адрес',
            children: data?.address || '',
        },
        {
            key: 'version',
            label: 'Версия',
            children: data?.version || '',
        },
        {
            key: 'effectiveConfig',
            label: 'Эффективная конфигурация',
            children: data?.conf || '',
        },
        {
            key: 'appliedConfig',
            label: 'Применяемая конфигурация',
            children: data?.conf || '',
        },
        {
            key: 'status',
            label: 'Состояние',
            children: data?.status || '',
        },
        {
            key: 'state',
            label: 'Состояние станции',
            children: data?.state || '',
        },
    ];


    return (
        <Descriptions title="User Info"
            column={2}
            items={items} />
    )
}