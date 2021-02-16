import { observer } from 'mobx-react-lite'

import {
  Button,
  Checkbox,
  Col,
  Form,
  Row,
  Typography
} from 'antd'

import {
  DeleteOutlined
} from '@ant-design/icons'

const { Text } = Typography

const Todo = observer(({ todo }) => {
  // helpers and proxies
  let textAttrs = {}
  if (todo.done) {
    textAttrs = {
      type: 'secondary',
      delete: true
    }
  } else {
    textAttrs = {
      editable: {
        onChange: todo.rename
      }
    }
  }

  // component renderer
  return (
    <Form.Item>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <Checkbox checked={todo.done} onChange={ev => { todo.toggle() }} />
        </Col>
        <Col span={20}>
          <Text {...textAttrs}>{todo.value}</Text>
        </Col>
        <Col span={2}>
          <Button type='danger' onClick={() => { todo.remove() }}><DeleteOutlined /></Button>
        </Col>
      </Row>
    </Form.Item>
  )
})

export default Todo
