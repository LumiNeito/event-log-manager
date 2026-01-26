
import { Table } from "antd"
import { columns } from "../model/table-columns";
import type { EventItem } from "../api/types";


interface SecurityEventsTableProps {
    data?: EventItem[],
    isLoading: boolean,
    page: number,
    pageSize: number,
    total?: number,
    onPageChange: (page: number) => void,
    onPageSizeChange: (pageSize: number) => void,
    onRowClick: (id: string) => void
}



export const SecurityEventsTable = ({ data, isLoading, page, pageSize, total, onPageChange, onPageSizeChange, onRowClick }: SecurityEventsTableProps) => {

    return (
        <>
            <Table dataSource={data}
                rowKey="key"
                pagination={{
                    current: page,
                    pageSize,
                    total,
                    onChange: (nextPage) => onPageChange(nextPage),
                    onShowSizeChange: (_current, size) => onPageSizeChange(size)
                }}
                columns={columns}
                loading={isLoading}
                onRow={(record) => ({
                    onClick: () => onRowClick(record.id),
                    style: { cursor: 'pointer' },
                })}
            />

        </>
    )
}