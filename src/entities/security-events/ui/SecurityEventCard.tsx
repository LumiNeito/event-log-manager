import { Descriptions } from "antd"
import type { EventItem } from "../api/types";
import { getSecurityEventDescriptionItems } from "../model/card-items";
import { useTranslation } from "react-i18next";

interface SecurityEventCardProps {
    data?: EventItem
}

export const SecurityEventCard = ({ data }: SecurityEventCardProps) => {
    const { t } = useTranslation()

    return (
        <Descriptions
            column={2}
            items={getSecurityEventDescriptionItems(t, data)} />
    )
}