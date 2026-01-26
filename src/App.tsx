
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { SecurityEventsWidget } from './widgets/security-events/ui/SecurityEventsWidget'

function App() {
  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Header><b>SecurTrack</b> – Отслеживание безопасности</Header>
      <Content style={{ padding: '24px 48px 0px 48px' }}>
        <SecurityEventsWidget />
      </Content>
    </Layout>
  )
}

export default App
