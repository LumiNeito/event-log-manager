import { Button } from "antd"

interface ResetFiltersButtonProps {
    resetFilters: () => void
}

export const ResetFiltersButton = ({ resetFilters }: ResetFiltersButtonProps) => {
    return (
        <Button type='link'
            onClick={resetFilters}
        >Сбросить фильтры</Button>
    )
}