import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Form,
  Input,
  Layout,
  Typography
} from 'antd'
import {
  DownOutlined
} from '@ant-design/icons'

import Todos from './components/Todos.js'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const App = observer(({ store }) => {
  const [todo, setTodo] = useState('')

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: 'transparent', color: 'black' }}>
        <Title>Todos</Title>
      </Header>
      <Content>
        <Form
          onFinish={values => {
            store.addTodo(values.todo)
            setTodo('')
          }}
          onFinishFailed={({ values, errorFields, outOfDate }) => { }}
        >
          <Form.Item
            name='todo'
            rules={[{ required: true, message: 'Digite uma tarefa!' }]}
          >
            <Input
              size='large'
              prefix={<DownOutlined />}
              placeholder='What needs to be done?'
              value={todo}
              onChange={ev => { setTodo(ev.target.value) }}
            />
          </Form.Item>
        </Form>
        {store.todos.length > 0 ? <Todos todos={store.todos} /> : null}
      </Content>
      <Footer>Made with ❤️ by Looplex Front Team</Footer>
    </Layout>
  )
})

export default App
