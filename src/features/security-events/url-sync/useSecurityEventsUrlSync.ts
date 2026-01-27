import { useSearchParams } from "react-router-dom"
import { useSecurityFiltersStore } from "../filters/model/store"
import { useSecurityEventsTableStore } from "../table-control/model/store"
import { useEffect } from "react"

export const useSecurityEventsUrlSync = () => {
    const { status, stationSearch, setStatus, setStationSearch } = useSecurityFiltersStore()
    const { page, pageSize, sortField, sortOrder, setPage, setPageSize, setSortField, setSortOrder } = useSecurityEventsTableStore()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page')
        const pageSize = searchParams.get('pageSize')
        const sortOrder = searchParams.get('sortOrder')
        const sortField = searchParams.get('sortField')
        const status = searchParams.get('status')
        const stationSearch = searchParams.get('stationSearch')

        if (page) setPage(Number(page))
        if (pageSize) setPageSize(Number(pageSize))
        if (sortOrder) setSortOrder(sortOrder as 'asc' | 'desc')
        if (sortField) setSortField(sortField)
        if (status) setStatus(status)
        if (stationSearch) setStationSearch(stationSearch)
    }, [])

    useEffect(() => {
        const params: Record<string, string> = {};

        params.page = String(page)
        params.pageSize = String(pageSize)
        if (sortField) params.sortField = String(sortField)
        if (sortOrder) params.sortOrder = String(sortOrder)
        if (status) params.status = String(status)
        if (stationSearch) params.stationSearch = String(stationSearch)

        setSearchParams(params, { replace: true });
    }, [page, pageSize, sortField, sortOrder, status, stationSearch])
}