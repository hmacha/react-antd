import React, { useState, useEffect } from 'react'
import { Button, Form, Input, Select, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

function App () {
  const onFinish = values => {
    console.log('values...', values)
  }
  const initialValues = {
    teacher: 'dddd',
    students: [
      { firstname: 'qq', lastname: 'ww' },
      { firstname: 'eee', lastname: 'rr' }
    ]
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Form
          onFinish={onFinish}
          style={{ width: 500 }}
          initialValues={initialValues}
        >
          <Form.Item name='teacher' label='Teacher Name'>
            <Input placeholder='Teacher Name' />
          </Form.Item>
          <Form.Item name='class' label='Class Name'>
            <Input placeholder='Class Name' />
          </Form.Item>
          <Form.List name='students'>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => {
                  return (
                    <Space key={index} direction='horizontal'>
                      <Form.Item
                        name={[field.name, 'firstname']}
                        label='firstname'
                        key={index + 1}
                        rules={[
                          { required: true, message: 'First Name is Required' }
                        ]}
                      >
                        <Input placeholder='first name' />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, 'lastname']}
                        label='lastname'
                        key={index + 2}
                        rules={[
                          { required: true, message: 'Lastname is required' }
                        ]}
                      >
                        <Input placeholder='lastname' />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, 'gender']}
                        rules={[
                          { required: true, message: 'Gender is required' }
                        ]}
                      >
                        <Select placeholder='Gender'>
                          {['Male', 'Female'].map(gender => (
                            <Select.Option key={gender} value={gender}>
                              {gender}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <MinusCircleOutlined
                        style={{ height: 40, color: 'red' }}
                        onClick={() => remove(field.name)}
                      />
                    </Space>
                  )
                })}
                <Form.Item>
                  <Button
                    type='dashed'
                    block
                    onClick={() => {
                      add()
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add Student
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Button htmlType='submit' type='primary'>
            Submit
          </Button>
        </Form>
      </header>
    </div>
  )
}

export default App
