import type { DescriptionsProps } from "antd";
import type { EventItem } from "../api/types";
import type { TFunction } from "i18next";

export const getSecurityEventDescriptionItems = (
    t: TFunction,
    data?: EventItem
): DescriptionsProps['items'] => [
        {
            key: 'code',
            label: t('details.code'),
            children: data?.code ?? '',
        },
        {
            key: 'clientId',
            label: t('details.clientId'),
            children: data?.id ?? '',
        },
        {
            key: 'userName',
            label: t('details.userName'),
            children: data?.userName ?? '',
        },
        {
            key: 'stationName',
            label: t('details.stationName'),
            children: data?.stationName ?? '',
        },
        {
            key: 'ipAddress',
            label: t('details.ipAddress'),
            children: data?.address ?? '',
        },
        {
            key: 'version',
            label: t('details.version'),
            children: data?.version ?? '',
        },
        {
            key: 'appliedConfig',
            label: t('details.appliedConfig'),
            children: data?.conf ?? '',
        },
        {
            key: 'status',
            label: t('details.status'),
            children: data?.status
                ? t(`status.${data.status}`)
                : '',
        }
    ];
