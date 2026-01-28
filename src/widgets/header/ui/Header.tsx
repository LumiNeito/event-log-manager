import { Flex } from "antd";
import { LocaleSelector } from "../../../features/common/change-locale/ui/LocaleSelector";
import { Header as AntHeader } from 'antd/es/layout/layout'

export const Header = () => (
    <AntHeader>
        <Flex justify="space-between" align="center">
            <div style={{ color: '#fff' }}><b>SecurTrack</b> – Отслеживание безопасности</div>
            <LocaleSelector />
        </Flex>
    </AntHeader>
);
