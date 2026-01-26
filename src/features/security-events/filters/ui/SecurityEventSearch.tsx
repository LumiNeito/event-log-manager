import { Input, type GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

interface SecurityEventSearchProps {
    value: string,
    onChange: (value: string) => void
}

export const SecurityEventSearch = ({ value, onChange }: SecurityEventSearchProps) => {
    const handleChange: SearchProps['onChange'] = (e) => onChange(e.currentTarget.value);
    return (
        <Search placeholder="Введите значение" onChange={handleChange} value={value} style={{ width: 200 }} />
    )
}