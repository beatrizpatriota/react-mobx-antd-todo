import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import {
  Form,
  Input,
  Typography
} from 'antd'

const { Text } = Typography

const Todo = observer(({ todo }) => {
  function handleChange () {
    console.log()
  }
  return (
    <Form.Item>
      <Text
editable={{onChange: handleChange }} value={todo.value}
      />
    </Form.Item>
  )
})

export default Todo
