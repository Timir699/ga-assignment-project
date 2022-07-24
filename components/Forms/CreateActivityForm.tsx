import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';

let ActivityType = [
  { value: 'project', label: 'Project' },
  { value: 'company', label: 'Company' },
  { value: 'internship', label: 'Internship' },
  { value: 'challenge', label: 'Challenge' },
  { value: 'service', label: 'Service' },
  { value: 'event', label: 'Event' },
];
let groups = [
  { value: 'stagging', label: 'Stagging Root Group' },
  { value: 'testing', label: 'Testing sub group of root' },
];
let developementGoals = [
  { value: 'animals', label: 'Animals' },
  { value: 'clean', label: 'Clean Oceans' },
  { value: 'climate', label: 'Climate Action' },
  { value: 'culture', label: 'Culture' },
  { value: 'gender', label: 'Gender Equality' },
  { value: 'health', label: 'Health & Wellness' },
  { value: 'hunger', label: 'Hunger' },
  { value: 'mental', label: 'Mental Health' },
  { value: 'partnerShips', label: 'PartnerShips for the goals' },
  { value: 'peace building', label: 'Peace Building' },
  { value: 'peace justice', label: 'Peace Justice & Strong Institutions' },
  { value: 'poverty', label: 'Poverty' },
  { value: 'quality education', label: 'Quality Education' },
  { value: 'social entrepreneurship', label: 'Social Entrepreneurship' },
  { value: 'social justice', label: 'Social Justice' },
  { value: 'sustainability', label: 'Sustainability' },
  { value: 'technology', label: 'Technology' },
];
let classYear = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
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
          value={ActivityType}
          onChange={onSecondCityChange}
        >
          {ActivityType.map((option) => (
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
          value={groups}
          onChange={onSecondCityChange}
        >
          {groups.map((option) => (
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
          value={developementGoals}
          onChange={onSecondCityChange}
        >
          {developementGoals.map((option) => (
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
          value={classYear}
          onChange={onSecondCityChange}
        >
          {classYear.map((option) => (
            <Option key={option.value}>{option.label}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default CreateActivityForm;
