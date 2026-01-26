import { useSecurityFiltersStore } from "../model/store"
import { ResetFiltersButton } from "./ResetFiltersButton"
import { SecurityEventSearch } from "./SecurityEventSearch"
import { SecurityEventStatusSelect } from "./SecurityEventStatusSelect"

export const SecurityEventFilters = () => {
    const filters = useSecurityFiltersStore()
    return (
        <>
            <SecurityEventStatusSelect
                value={filters.status}
                onChange={filters.setStatus}
            />
            <SecurityEventSearch value={filters.stationInput} onChange={filters.setStationInput} />
            <ResetFiltersButton resetFilters={filters.resetFilters} />
        </>
    )
}