
import { Button, Empty, Result, Table } from "antd"
import { getSecurityEventsColumns } from "../model/table-columns";
import type { EventItem } from "../api/types";
import { useTranslation } from "react-i18next";

interface SecurityEventsTableProps {
    data?: EventItem[],
    isLoading: boolean,
    isError: boolean;
    refetch: () => void;
    page: number,
    pageSize: number,
    total?: number,
    onPageChange: (page: number) => void,
    onPageSizeChange: (pageSize: number) => void,
    onRowClick: (id: string) => void,
    onSortChange?: (field: string, order: 'asc' | 'desc') => void;
    height?: number;
    sortOrder: 'asc' | 'desc'
}

export const SecurityEventsTable = ({
    data,
    isLoading,
    isError,
    refetch,
    page,
    pageSize,
    total,
    sortOrder,
    onPageChange,
    onPageSizeChange,
    onRowClick,
    onSortChange,
    height = 500 }: SecurityEventsTableProps) => {
    const { t } = useTranslation();

    const handleRetry = () => {
        refetch();
    };

    if (isError) {
        return (
            <Result
                status="error"
                title={t('table.errorTitle')}
                subTitle={t('table.errorText')}
                extra={
                    <Button
                        type="primary"
                        onClick={handleRetry}
                    >
                        {t('table.errorButton')}
                    </Button>
                }
            />
        )
    }


    return (
        <>
            <Table dataSource={data}
                rowKey="key"
                scroll={{ y: height, x: 'max-content' }}
                sticky
                locale={{ emptyText: <Empty description={t('table.noData')} /> }}
                pagination={{
                    current: page,
                    pageSize,
                    total,
                    onChange: (nextPage) => onPageChange(nextPage),
                    onShowSizeChange: (_current, size) => onPageSizeChange(size),
                    locale: {
                        items_per_page: ''
                    }
                }}
                onChange={(_, __, sorter) => {
                    const sortObj = Array.isArray(sorter) ? sorter[0] : sorter;
                    if (sortObj && sortObj.field === 'date' && onSortChange) {
                        const order = sortObj.order === 'ascend' ? 'asc' : 'desc';
                        if (sortOrder === order) return

                        onSortChange(sortObj.field, order);
                    }
                }}

                columns={getSecurityEventsColumns(t)}
                loading={isLoading}
                onRow={(record) => ({
                    onClick: () => onRowClick(record.id),
                    style: { cursor: 'pointer' },
                })}
            />
        </>
    )
}