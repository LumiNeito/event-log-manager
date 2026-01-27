import { useQuery } from "@tanstack/react-query";
import { fetchEventsMock } from "../../../entities/security-events/api/api";
import { SecurityEventsTable } from "../../../entities/security-events/ui/SecurityEventsTable";
import { Drawer, Flex } from "antd";
import { SecurityEventCard } from "../../../entities/security-events/ui/SecurityEventCard";
import { useSecurityFiltersStore } from "../../../features/security-events/filters/model/store";
import { SecurityEventFilters } from "../../../features/security-events/filters/ui/SecurityEventsFilters";
import { useSecurityEventsTableStore } from "../../../features/security-events/table-control/model/store";
import { useSecurityEventCardStore } from "../../../features/security-events/view-control/model/store";
import { useSecurityEventsUrlSync } from "../../../features/security-events/url-sync/useSecurityEventsUrlSync";
import { useTranslation } from "react-i18next";

export const SecurityEventsWidget = () => {
    const { t } = useTranslation()
    const { open, setShowEventCard, setCloseEventCard, selectedId, setSelectedId } = useSecurityEventCardStore()

    useSecurityEventsUrlSync()

    const { status, stationSearch } = useSecurityFiltersStore()
    const { page, pageSize, sortField, sortOrder, setPage, setPageSize, setSortField, setSortOrder } = useSecurityEventsTableStore()

    const { data, isLoading } = useQuery({
        queryKey: ['events', page, pageSize, status, stationSearch, sortField, sortOrder],
        queryFn: () =>
            fetchEventsMock({
                page,
                pageSize,
                status: status,
                stationName: stationSearch,
                sortByDate: sortField === 'date' && sortOrder ? sortOrder : undefined
            }),
    });

    const currentEvent = data?.data.find((el) => el.id === selectedId)

    return (
        <Flex vertical gap={16}>
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
                    setShowEventCard()
                    setSelectedId(id)
                }}
                onSortChange={(field, order) => {
                    if (page !== 1) setPage(1);
                    setSortField(field);
                    setSortOrder(order);
                }}
                sortOrder={sortOrder}
            />
            <Drawer
                title={t('details.title')}
                closable={{ 'aria-label': 'Close Button' }}
                onClose={setCloseEventCard}
                open={open}
                size='large'
            >
                <SecurityEventCard data={currentEvent} />
            </Drawer>
        </Flex>
    )
}