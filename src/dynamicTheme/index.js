import React from 'react'
import {
  Button,
  Radio,
  Checkbox,
  Input,
  Select,
  Table,
  ConfigProvider,
  Space
} from 'antd'
import '../App.css'

function ThemeIndex () {
  return (
    <div class='App'>
      <ConfigProvider theme={{ token: { colorPrimary: 'green' } }}>
        <Space direction='vertical' size={12}>
          <Button type='primary'>Theme button</Button>
          <Checkbox>Checkbox</Checkbox>
          <Radio>Radio</Radio>
          <Input placeholder='Type here.....' />
          <Select
            placeholder='Select'
            options={[
              { label: 'option1', value: 'option1' },
              { label: 'option2', value: 'option2' }
            ]}
          ></Select>
          <Table
            columns={[
              { title: 'Name', dataIndex: 'name' },
              { title: 'Age', dataIndex: 'age' },
              { title: 'Class', dataIndex: 'class' }
            ]}
            dataSource={[
              { name: 'Jagan', age: 10, class: 5 },
              { name: 'Kishore', age: 11, class: 6 },
              { name: 'Ratan', age: 12, class: 7 }
            ]}
          ></Table>
        </Space>
      </ConfigProvider>
    </div>
  )
}

export default ThemeIndex
