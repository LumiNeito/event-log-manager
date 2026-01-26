import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchEventsMock } from "../../../entities/security-events/api/api";
import { SecurityEventsTable } from "../../../entities/security-events/ui/SecurityEventsTable";
import { Drawer } from "antd";
import { SecurityEventCard } from "../../../entities/security-events/ui/SecurityEventCard";
import { useSecurityFiltersStore } from "../../../features/security-events/filters/model/store";
import { SecurityEventFilters } from "../../../features/security-events/filters/ui/SecurityEventsFilters";

export const SecurityEventsWidget = () => {
    const filters = useSecurityFiltersStore()

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10)
    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<string | null>(null)

    const showDrawer = () => {
        setOpen(true);
    };

    const onCloseDrawer = () => {
        setOpen(false);
    };

    const { data, isLoading } = useQuery({
        queryKey: ['events', page, pageSize, filters.status, filters.stationSearch],
        queryFn: () =>
            fetchEventsMock({
                page,
                pageSize,
                status: filters.status,
                stationName: filters.stationSearch
            }),
    });

    const currentEvent = data?.data.find((el) => el.id === selectedId)

    return (
        <>
            <SecurityEventFilters />
            <SecurityEventsTable
                data={data?.data}
                isLoading={isLoading}
                page={page}
                pageSize={pageSize}
                total={data?.total}
                onPageChange={setPage}
                onPageSizeChange={setPageSize}
                onRowClick={(id) => {
                    showDrawer()
                    setSelectedId(id)
                }}
            />
            <Drawer
                title="Статус рабочей станции"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onCloseDrawer}
                open={open}
                size='large'
            >
                <SecurityEventCard data={currentEvent} />
            </Drawer>
        </>
    )
}