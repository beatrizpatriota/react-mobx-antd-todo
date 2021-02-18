import { useRef, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  Form,
  Input
} from 'antd'
import {
  DownOutlined
} from '@ant-design/icons'

const TodoInput = observer(({ store }) => {
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

  )
})

export default TodoInput
