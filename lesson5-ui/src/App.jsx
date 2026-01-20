import { Form, Input, Checkbox, Button, Switch, Radio, Select } from 'antd';
import { useState } from 'react';

function App() {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState(2);
  const [switchValue, setSwitchValue] = useState(false);

  const handleSubmit = (values) => {
    console.log("🚀 ~ handleSubmit ~ values:", values)
  }

  const handleCancel = () => {
    form.resetFields();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            radio: 2,
            switch: false,
            dropdown: 'Dropdown option'
          }}
          className="space-y-4"
        >
          {/* Username Field */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Username</span>}
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              className="rounded-lg"
              size="large"
              placeholder="Enter username"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Password</span>}
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 4, max: 12, message: 'Password must be between 4 and 12 characters!' }
            ]}
            help={<span className="text-gray-500 text-sm">Your password is between 4 and 12 characters</span>}
          >
            <Input.Password
              className="rounded-lg"
              size="large"
              placeholder="Enter password"
            />
          </Form.Item>

          {/* Input Text with Error */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Input Text Label</span>}
            name="errorInput"
            validateStatus="error"
            help={<span className="text-red-500 text-sm">Error message informing me of a problem</span>}
          >
            <Input
              className="rounded-lg border-red-500"
              size="large"
              placeholder="Typing"
              suffix={
                <span className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full text-white text-xs">
                  !
                </span>
              }
            />
          </Form.Item>

          {/* Remember me Checkbox */}
          <Form.Item name="remember" valuePropName="checked" className="mb-6">
            <Checkbox className="text-gray-700">
              Remember me
            </Checkbox>
          </Form.Item>

          {/* Switch */}
          <Form.Item name="switch" valuePropName="checked" className="mb-6">
            <div className="flex items-center gap-3">
              <Switch
                checked={switchValue}
                onChange={setSwitchValue}
                className="bg-gray-300"
              />
              <span className="text-gray-700">Off</span>
            </div>
          </Form.Item>

          {/* Radio Group */}
          <Form.Item name="radio" className="mb-6">
            <Radio.Group
              onChange={(e) => setRadioValue(e.target.value)}
              value={radioValue}
              className="flex flex-col gap-4"
            >
              <Radio value={1} className="text-gray-700">Radio selection 1</Radio>
              <Radio value={2} className="text-gray-700">Radio selection 2</Radio>
              <Radio value={3} className="text-gray-700">Radio selection 3</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Dropdown */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Dropdown Title</span>}
            name="dropdown"
            rules={[{ required: true, message: 'Please select an option!' }]}
          >
            <Select
              size="large"
              className="w-full"
              placeholder="Select an option"
            >
              <Select.Option value="Dropdown option">Dropdown option</Select.Option>
              <Select.Option value="Dropdown option 1">Dropdown option 1</Select.Option>
              <Select.Option value="Dropdown option 2">Dropdown option 2</Select.Option>
            </Select>
          </Form.Item>

          {/* Action Buttons */}
          <Form.Item className="mb-0 pt-6">
            <div className="flex gap-4">
              <Button
                size="large"
                onClick={handleCancel}
                className="flex-1 h-12 rounded-lg border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="flex-1 h-12 rounded-lg bg-indigo-600 hover:bg-indigo-700 font-medium"
              >
                Next
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default App