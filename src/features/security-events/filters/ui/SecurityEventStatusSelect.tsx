import { Select } from "antd"

interface SecurityEventsStatusSelect {
    value: string | null,
    onChange: (status: string) => void
}

export const SecurityEventStatusSelect = ({ value, onChange }: SecurityEventsStatusSelect) => {

    const options = [
        { value: 'login', label: 'Login' },
        { value: 'fileAccess', label: 'File Access' },
        { value: 'logout', label: 'Logout' },
    ]

    return (
        <Select
            defaultValue={null}
            placeholder='Статус'
            allowClear
            style={{ width: 120 }}
            onChange={onChange}
            options={options}
            value={value}
        />
    )
}