import { Select } from "antd";
import { useTranslation } from "react-i18next";

interface SecurityEventsStatusSelect {
    value: string | null;
    onChange: (status: string) => void;
}

export const SecurityEventStatusSelect = ({ value, onChange }: SecurityEventsStatusSelect) => {
    const { t } = useTranslation();

    const options = [
        { value: 'login', label: t('status.login') },
        { value: 'fileAccess', label: t('status.fileAccess') },
        { value: 'logout', label: t('status.logout') },
    ];

    return (
        <Select
            placeholder={t('status.placeholder')}
            allowClear
            style={{ width: 120 }}
            onChange={onChange}
            options={options}
            value={value}
        />
    );
};
