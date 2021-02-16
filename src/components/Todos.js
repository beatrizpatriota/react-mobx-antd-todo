import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  Card,
  Form,
  Radio,
  Typography
} from 'antd'

import Todo from './Todo.js'

const { Text } = Typography

const Todos = observer(({ store }) => {
  // hooks
  const [filter, setFilter] = useState('ALL')

  // event handlers
  function handleRadioGroupChange(ev) {
    const filter = ev.target.value
    setFilter(filter)
  }

  // helpers and proxies
  const itemsLeft = store.todos.filter(todo => !todo.done)

  // render component
  return (
    <Card
      actions={[
        <Text key='itemsLeft'>{`${itemsLeft.length} item${itemsLeft.length === 1 ? '' : 's'} left`}</Text>,
        <Radio.Group key='filters' size='small' buttonStyle='solid' defaultValue='ALL' onChange={handleRadioGroupChange}>
          <Radio.Button value='ALL'>All</Radio.Button>
          <Radio.Button value='ACTIVE'>Active</Radio.Button>
          <Radio.Button value='COMPLETED'>Completed</Radio.Button>
        </Radio.Group>,
        <Button key='clearComplete' size='small' onClick={ev => { store.clearCompleted() }}>Clear Completed</Button>
      ]}
    >
      <Form
        onFinish={values => { }}
        onFinishFailed={({ values, errorFields, outOfDate }) => { }}
      >
        {store.getFilteredTodos(filter).map(todo => <Todo key={todo.key} todo={todo} />)}
      </Form>
    </Card>
  )
})

export default Todos
