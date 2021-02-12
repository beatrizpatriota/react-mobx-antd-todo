import './App.css'

import '../node_modules/antd/dist/antd.css'

import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { Card, Input, Row, Col, PageHeader } from 'antd'

import { PlusOutlined } from '@ant-design/icons'

import TodoView from '../src/components/TodoView'
import TodoList from '../src/components/TodoList'

const App = observer(({ store }) => {
  const [todo, setTodo] = useState('')

  function handleSubmit (ev) {
    ev.preventDefault()
    store.addTodo(todo)
    console.log(todo)
    setTodo('')
  }

  return (
    <div className='App-header'>

      <Row>
        <PageHeader
            title='Todo List'
            subTitle='To add a todo, just fill the form below and press enter.'
          />
      </Row>

      <Row className='app'>
        <Col>
          <Card title='Add a todo'>
            <Input
              onPressEnter={handleSubmit}
              style={{ width: 600, height: 55 }}
              placeholder='What needs to be done?'
              prefix={<PlusOutlined />}
              name='todo'
              value={todo}
              onChange={ev => setTodo(ev.target.value)}
            />
          </Card>
        </Col>
      </Row>

      <Row className='app'>
        <Col>
          <Card title='Heres your list'>
            <TodoList
              onChange={ev => setTodo(ev.target.value)}
              itemsLeft={store.itemsLeft}
            >
              {store.todos.map(todo => (
                <TodoView
                  key={todo.key}
                  todo={todo}
                />
              ))}
            </TodoList>
          </Card>
        </Col>
      </Row>

    </div>
  )
})

export default App
