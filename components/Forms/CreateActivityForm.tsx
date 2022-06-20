import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';

let SelectOption = [
  { value: 'punaho', label: 'Punaho' },
  { value: 'staging', label: 'Staging Root Group' },
];

const CreateActivityForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onSecondCityChange = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      id="CreateActivityForm"
      name="create-activity-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        labelCol={{ span: 24 }}
        label="Activity Name"
        name="activity-name"
        rules={[
          {
            required: true,
            message: 'Please input Activity Name!',
          },
        ]}
      >
        <Input
          size="large"
          style={{ maxWidth: 500, borderRadius: '5px' }}
          placeholder="Type here"
        />
      </Form.Item>

      <Form.Item
        labelCol={{ span: 24 }}
        label="Activity Type"
        name="activity-type"
        rules={[
          {
            required: true,
            message: 'Please Select a type',
          },
        ]}
      >
        <Select
          size="large"
          placeholder="Select Type"
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
        label="Group"
        name="Group"
        rules={[
          {
            required: true,
            message: 'Please Select a Group',
          },
        ]}
      >
        <Select
          size="large"
          placeholder="Select Group"
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
        label="Select relevant UN Sustainable Development Goals"
        name="goals"
        rules={[
          {
            required: true,
            message: 'Please input your Goals!',
          },
        ]}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Enter Goals"
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
        label="Select Class Year"
        name="class-year"
        rules={[
          {
            required: true,
            message: 'Please Select a year',
          },
        ]}
      >
        <Select
          size="large"
          placeholder="Select Class Year"
          style={{ maxWidth: 500, borderRadius: '5px' }}
          value={SelectOption}
          onChange={onSecondCityChange}
        >
          {SelectOption.map((option) => (
            <Option key={option.value}>{option.label}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default CreateActivityForm;
