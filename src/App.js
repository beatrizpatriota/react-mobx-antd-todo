import { observer } from 'mobx-react-lite'
import {
  Layout,
  Typography,
  Row,
  Col
} from 'antd'
import TodoInput from './components/TodoInput.js'
import Todos from './components/TodosList.js'

const { Content, Footer } = Layout
const { Title, Text } = Typography

const App = observer(({ store }) => {
  return (
    <Layout style={{ height: '100vh', textAlign: 'center' }}>
      <Title style={{ marginTop: '0.5em' }}>Todos</Title>
      <Content>
        <Row justify='center'>
          <Col span={12}>
            <TodoInput store={store} />
            {store.todos.length > 0 ? <Todos store={store} /> : null}
          </Col>
        </Row>
      </Content>
      <Footer><Text type='secondary'>Made with ❤️ by Looplex Front Team</Text></Footer>
    </Layout>
  )
})

export default App
