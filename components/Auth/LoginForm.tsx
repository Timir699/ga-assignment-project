import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
          style={{ maxWidth: 500, borderRadius: '5px' }}
          placeholder="Enter Your Email"
        />
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
          style={{
            maxWidth: 500,
            borderRadius: '5px',
          }}
          type="password"
          placeholder="Enter Your Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ width: 500, marginTop: 20 }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
