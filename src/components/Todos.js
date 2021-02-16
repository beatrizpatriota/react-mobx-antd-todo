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

const Todos = observer(({ todos }) => {
  // event handlers
  function handleRadioGroupChange (ev) {
    console.log(ev)
  }

  function handleClearCompleteClick (ev) {
    console.log(ev)
  }

  // helpers and proxies
  const itemsLeft = todos.filter(todo => !todo.done)

  // render component
  return (
    <Card
      actions={[
        <Text>{`${itemsLeft.length} item${itemsLeft.length === 1 ? '' : 's'} left`}</Text>,
        <Radio.Group size='small' buttonStyle='solid' onChange={handleRadioGroupChange}>
          <Radio.Button value='ALL'>All</Radio.Button>
          <Radio.Button value='ACTIVE'>Active</Radio.Button>
          <Radio.Button value='COMPLETED'>Completed</Radio.Button>
        </Radio.Group>,
        <Button size='small' onClick={handleClearCompleteClick}>Clear Completed</Button>
      ]}
    >
      <Form
        onFinish={values => {}}
        onFinishFailed={({ values, errorFields, outOfDate }) => { }}
      >
        {todos.map(todo => <Todo todo={todo} />)}
      </Form>
    </Card>
  )
})

export default Todos
