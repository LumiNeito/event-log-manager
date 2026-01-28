import type { ColumnsType } from "antd/es/table";
import type { EventItem } from "../api/types";
import type { TFunction } from "i18next";
import { Tag } from "antd";
import dayjs from "dayjs";

const STATUS_COLOR_MAP: Record<EventItem['status'], string> = {
  login: 'cyan',
  fileAccess: 'purple',
  logout: 'magenta',
};

export const getSecurityEventsColumns = (
  t: TFunction,
): ColumnsType<EventItem> => [
    {
      title: t('table.date'),
      dataIndex: 'date',
      key: 'date',
      sorter: true,
      sortDirections: ['ascend', 'descend'],
      defaultSortOrder: "ascend",
      render: (_, { date }) => date ? dayjs(date).format('DD.MM.YYYY HH:mm:ss') : '',
    },
    {
      title: t('table.code'),
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: t('table.clientId'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('table.userName'),
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: t('table.stationName'),
      dataIndex: 'stationName',
      key: 'stationName',
    },
    {
      title: t('table.address'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('table.version'),
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: t('table.conf'),
      dataIndex: 'conf',
      key: 'conf',
    },
    {
      title: t('table.status'),
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Tag color={STATUS_COLOR_MAP[status]} >
          {t(`status.${status}`)}
        </Tag>
      ),
    },
  ];
