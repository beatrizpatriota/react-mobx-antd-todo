import React from 'react'
import '../../node_modules/antd/dist/antd.css'
import { Form, Card, Row, Col, Typography } from 'antd'

const { Text } = Typography

export default function ({ children, itemsLeft, todos }) {
  return (
    <Card>
      <Form style={{ width: 550 }}>
        {children}
      </Form>
      <div className='todoListFooter'>
        <Row>
          <Col>
            {itemsLeft === 0
              ? <Text className='items'>No item, please add one</Text>
              : <Text>{itemsLeft} todos left</Text>}
          </Col>
        </Row>
      </div>
    </Card>
  )
}
