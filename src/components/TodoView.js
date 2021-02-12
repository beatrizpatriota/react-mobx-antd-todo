import '../../node_modules/antd/dist/antd.css'

import { React } from 'react'
import { observer } from 'mobx-react-lite'

import { Checkbox, Col, Row, Form, Typography, Divider, Button, Popconfirm } from 'antd'

const { Text } = Typography

const TodoView = observer(({ todo }) => {
  function handleRemoveClick (ev) {
    ev.preventDefault()
    todo.remove()
  }

  function onChange (e) {
    console.log(`checked = ${e.target.checked}`)
    todo.toggle()
  }

  if (!todo.done) {
    return (
      <Form.Item>
        <Row>
          <Col span='2'>
            <Checkbox onChange={onChange} />
          </Col>
          <Col span='20'>
            <Text>{todo.value}</Text>
          </Col>
          <Col span='2' justify='end'>
            <Popconfirm
              title='Are you sure you want to delete?'
              onConfirm={handleRemoveClick}
            >
              <Button className='remove-todo-button' type='primary' danger>
                X
              </Button>
            </Popconfirm>
          </Col>
        </Row>
        <Divider />
      </Form.Item>
    )
  } else {
    return (
      <Form.Item>
        <Row>
          <Col span='2'>
            <Checkbox onChange={onChange} />
          </Col>
          <Col span='20'>
            <Text editable='true' type='secondary' delete>{todo.value}</Text>
          </Col>
          <Col span='2' justify='end'>
            <Popconfirm
              title='Are you sure you want to delete?'
              onConfirm={handleRemoveClick}
            >
              <Button className='remove-todo-button' type='primary' danger>
                X
              </Button>
            </Popconfirm>
          </Col>
        </Row>
        <Divider />
      </Form.Item>
    )
  }
})

export default TodoView
