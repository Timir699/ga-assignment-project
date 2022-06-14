import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';

let SelectOption = [
  { value: 'punaho', label: 'Punaho' },
  { value: 'staging', label: 'Staging Root Group' },
];

const SignUpForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onSecondCityChange = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        labelCol={{ span: 24 }}
        label="Full Name"
        name="Full Name"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          size="large"
          style={{ maxWidth: 500, borderRadius: '5px' }}
          placeholder="Enter Full Name"
        />
      </Form.Item>
      <Form.Item
        labelCol={{ span: 24 }}
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          size="large"
          style={{ maxWidth: 500 }}
          placeholder="Enter Email Address"
        />
      </Form.Item>
      <Form.Item
        labelCol={{ span: 24 }}
        label="School"
        name="School"
        rules={[
          {
            required: true,
            message: 'Please Select a school',
          },
        ]}
      >
        <Select
          size="large"
          placeholder="Select a School"
          style={{ maxWidth: 500, borderRadius: '5px' }}
          value={SelectOption}
          onChange={onSecondCityChange}
        >
          {SelectOption.map((option) => (
            <Option key={option.value}>{option.label}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        labelCol={{ span: 24 }}
        label="Password"
        name="Password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          size="large"
          style={{ maxWidth: 500, borderRadius: '5px' }}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ width: 500, marginTop: 20 }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign Up
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
