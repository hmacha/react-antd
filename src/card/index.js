import React from 'react'
import { Button, Card } from 'antd'
import {
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
  YoutubeFilled
} from '@ant-design/icons'
import '../App.css'

function CardIndex () {
  return (
    <div className='App'>
      <Card
        hoverable={true}
        title='need more details?'
        extra={<Button type='primary'>Details</Button>}
        style={{ width: '320px', margin: '100px auto' }}
        actions={[
          <FacebookFilled style={{ color: 'blue' }} />,
          <TwitterOutlined style={{ color: 'skyblue' }} />,
          <InstagramFilled style={{ color: 'purple' }} />,
          <YoutubeFilled style={{ color: 'red' }} />
        ]}
        cover={
          <div
            style={{
              height: 150,
              width: '100%',
              background: 'linear-gradient(#ef2a1a, #2a329a)',
              color: 'white',
              fontSize: 30,
              paddingTop: 20,
              fontFamily: 'cursive'
            }}
          >
            Ant Design Card
          </div>
        }
      >
        This is the content of the card
      </Card>
    </div>
  )
}

export default CardIndex
