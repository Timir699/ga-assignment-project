import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import api from '../../api';

let ActivityType = [
  { value: 'project', label: 'Project' },
  { value: 'company', label: 'Company' },
  { value: 'internship', label: 'Internship' },
  { value: 'challenge', label: 'Challenge' },
  { value: 'service', label: 'Service' },
  { value: 'event', label: 'Event' },
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

const CreateActivityForm = () => {
  const runOneTime = useRef(true);
  const router = useRouter();

  const [groups, setGroups] = useState<any>();
  const [classYear, setClassYear] = useState<any>();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onSecondCityChange = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const tokenStr = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : '';

      if (tokenStr) {
        const tokenObj =
          typeof tokenStr == 'string' && tokenStr != ''
            ? JSON.parse(tokenStr)
            : { access_token: '' };

        const response = api.GroupActivity.groupOptionList(
          tokenObj.access_token
        );

        response
          .then((response) => response.data)
          .then((data) => {
            console.log(data.Groups);
            setGroups(data.Groups);
          });

        const response2 = api.LibraryActivity.getClassYear(
          tokenObj.access_token
        );

        response2
          .then((response2) => response2.data)
          .then((data) => {
            console.log(data);
            setClassYear(data);
          });
      }
    }
  }, []);

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
          {Array.isArray(groups)
            ? groups?.map((option: any) => (
                <Option key={option.Id}>{option.Title}</Option>
              ))
            : null}
        </Select>
      </Form.Item>

      <Form.Item
        labelCol={{ span: 24 }}
        label="Select relevant UN Sustainable Development Goals"
        name="goals"
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
          {Array.isArray(classYear)
            ? classYear.map((option) => (
                <Option key={option.Id}>{option.Title}</Option>
              ))
            : null}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default CreateActivityForm;
