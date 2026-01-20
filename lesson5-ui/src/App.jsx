import { Table, Tag, Form, Input, Checkbox, Button } from 'antd';

function App() {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Cuong',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (value, record, index) => {
        console.log("🚀 ~ App ~ record:", record)
        return <Tag color="volcano">{record.name}: {record.age} years old, lives in {record.address}</Tag>
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
  ];

  const handleSubmit = (values) => {
    console.log("🚀 ~ handleSubmit ~ values:", values)
  }

  return (
    <>
      <h1>Antd UI demo</h1>
      <h2>Table</h2>
      <Table dataSource={dataSource} columns={columns} />

      <h2>Form</h2>
      <Form
        onFinish={handleSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }, { min: 6, message: 'Password must be at least 6 characters!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <h1 class="text-3xl font-bold underline text-red-500 hover:text-blue-500">
        Hello world!
      </h1>

    </>
  )

}
export default App