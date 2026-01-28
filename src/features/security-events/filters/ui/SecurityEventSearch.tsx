import { Input, type GetProps } from "antd";
import { useTranslation } from "react-i18next";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

interface SecurityEventSearchProps {
    value: string,
    onChange: (value: string) => void
}

export const SecurityEventSearch = ({ value, onChange }: SecurityEventSearchProps) => {
    const { t } = useTranslation()

    const handleChange: SearchProps['onChange'] = (e) => onChange(e.currentTarget.value);

    return (
        <Search placeholder={t('searchPlaceholder')} onChange={handleChange} value={value} style={{ width: 200 }} />
    )
}