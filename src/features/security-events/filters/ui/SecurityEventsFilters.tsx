import { Flex } from "antd"
import { useSecurityFiltersStore } from "../model/store"
import { ResetFiltersButton } from "./ResetFiltersButton"
import { SecurityEventSearch } from "./SecurityEventSearch"
import { SecurityEventStatusSelect } from "./SecurityEventStatusSelect"
import { selectHasActiveFilters } from "../model/selectors"

export const SecurityEventFilters = () => {
    const hasActiveFilters = useSecurityFiltersStore(selectHasActiveFilters);
    const filters = useSecurityFiltersStore()
    return (
        <Flex gap={4}>
            <SecurityEventStatusSelect
                value={filters.status}
                onChange={filters.setStatus}
            />
            <SecurityEventSearch value={filters.searchInput} onChange={filters.setSearchInput} />
            {hasActiveFilters && <ResetFiltersButton resetFilters={filters.resetFilters} />}
        </Flex>
    )
}