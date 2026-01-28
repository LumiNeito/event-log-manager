import { useSearchParams } from "react-router-dom"
import { useSecurityFiltersStore } from "../filters/model/store"
import { useSecurityEventsTableStore } from "../table-control/model/store"
import { useEffect } from "react"

export const useSecurityEventsUrlSync = () => {
    const { status, searchString, setStatus, setSearchString } = useSecurityFiltersStore()
    const { page, pageSize, sortField, sortOrder, setPage, setPageSize, setSortField, setSortOrder } = useSecurityEventsTableStore()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page')
        const pageSize = searchParams.get('pageSize')
        const sortOrder = searchParams.get('sortOrder')
        const sortField = searchParams.get('sortField')
        const status = searchParams.get('status')
        const searchString = searchParams.get('searchString')

        if (page) setPage(Number(page))
        if (pageSize) setPageSize(Number(pageSize))
        if (sortOrder) setSortOrder(sortOrder as 'asc' | 'desc')
        if (sortField) setSortField(sortField)
        if (status) setStatus(status)
        if (searchString) setSearchString(searchString)
    }, [])

    useEffect(() => {
        const params: Record<string, string> = {};

        params.page = String(page)
        params.pageSize = String(pageSize)
        if (sortField) params.sortField = String(sortField)
        if (sortOrder) params.sortOrder = String(sortOrder)
        if (status) params.status = String(status)
        if (searchString) params.searchString = String(searchString)

        setSearchParams(params, { replace: true });
    }, [page, pageSize, sortField, sortOrder, status, searchString])
}