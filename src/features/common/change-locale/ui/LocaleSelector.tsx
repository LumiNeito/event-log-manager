import { Segmented } from "antd"
import { useTranslation } from "react-i18next";

const options = [
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' }
]

export const LocaleSelector = () => {
    const { i18n } = useTranslation();

    const onClick = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <Segmented
            options={options}
            onChange={onClick}
            defaultValue={i18n.language}
        />
    )
}