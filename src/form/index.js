// import 'antd/dist/reset.css'
import '../App.css'
import { Form, Input, Button } from 'antd'

function FormComp () {
  const onFinish = e => {
    console.log('e..', e)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Form onFinish={onFinish}>
          <Form.Item
            label='User Name'
            name='username'
            rules={[
              {
                required: true,
                message: 'username required'
              }
            ]}
          >
            <Input placeholder='please Enter User Name' />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'password required'
              },
              {
                type: 'url',
                message: 'correct password',
                warningOnly: true
              }
            ]}
          >
            <Input placeholder='Please Enter Password' />
          </Form.Item>
          <Button htmlType='submit'>Submit</Button>
        </Form>
      </header>
    </div>
  )
}

export default FormComp
