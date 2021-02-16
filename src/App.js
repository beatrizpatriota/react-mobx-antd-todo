import { useRef, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  Form,
  Input,
  Layout,
  Typography,
  Row,
  Col
} from 'antd'
import {
  DownOutlined
} from '@ant-design/icons'

import Todos from './components/Todos.js'

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

const App = observer(({ store }) => {
  const [form] = Form.useForm()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleFinish (values) {
    const newTodo = values.todo
    store.addTodo(newTodo)
    form.resetFields()
    inputRef.current.focus()
  }

  function handleSetAllClick (ev) {
    const areAllFieldsDone = store.itemsLeft === 0
    store.setAll(!areAllFieldsDone)// areAllFieldsDone? false : true
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: 'transparent', color: 'black', textAlign: 'center' }}>
        <Title>Todos</Title>
      </Header>
      <Content>
        <Row justify='center'>
          <Col span={12}>
            <Form
              form={form}
              onFinish={handleFinish}
            >
              <Form.Item
                name='todo'
                rules={[{ required: true, message: 'Digite uma tarefa!' }]}
                style={{ marginBottom: 0 }}
              >
                <Input
                  ref={inputRef}
                  size='large'
                  prefix={(
                    <Button type='text' onClick={handleSetAllClick}>
                      <DownOutlined />
                    </Button>
                  )}
                  placeholder='What needs to be done?'
                />
              </Form.Item>
            </Form>
            {store.todos.length > 0 ? <Todos store={store} /> : null}
          </Col>
        </Row>

      </Content>
      <Footer style={{ textAlign: 'center' }}><Text type='secondary'>Made with ❤️ by Looplex Front Team</Text></Footer>
    </Layout>
  )
})

export default App
