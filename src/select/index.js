import React from 'react'
import { Select } from 'antd'

function SelectIndex () {
  const fruits = ['Mango', 'Apple', 'Orange', 'Banana']
  return (
    <div>
      <header>
        <p style={{ textAlign: 'center' }}>Which is your favourite fruit?</p>
        <Select
          placeholder={'select your fruit?'}
          style={{ width: '50%', display: 'flex', margin: 'auto' }}
        >
          {fruits.map((fruit, index) => {
            return (
              <Select.Option key={index} value={fruit}>
                {fruit}
              </Select.Option>
            )
          })}
        </Select>
      </header>
    </div>
  )
}

export default SelectIndex
