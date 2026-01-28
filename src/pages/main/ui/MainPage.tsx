import { Layout } from "antd"
import { Header } from "../../../widgets/header/ui/Header"
import { Content } from "antd/es/layout/layout"
import { SecurityEventsWidget } from "../../../widgets/security-events/ui/SecurityEventsWidget"

export const MainPage = () => {
    return (
        <Layout style={{ minHeight: '100vh', width: '100%' }}>
            <Header />
            <Content style={{ padding: '24px 48px 0px 48px' }}>
                <SecurityEventsWidget />
            </Content>
        </Layout>
    )
}