import { Button, Form, Modal, Radio, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { AnyNaptrRecord } from 'dns';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import api from '../../api';
import useDebounce from '../../hooks/useDebounce';

const JoinActivityModal: React.FC = () => {
  const { debouncedValue: debouncedSearchTerm, setSearchQuery } =
    useDebounce(500);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [options, setOptions] = useState<AnyNaptrRecord[]>([]);
  const [roles, setRoles] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    const payload = {
      activityId: values.activity,
      Roles: [values.role],
    };
    console.log('Received values of form: ', values);
    const tokenStr = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '';

    if (tokenStr) {
      const tokenObj =
        typeof tokenStr == 'string' && tokenStr != ''
          ? JSON.parse(tokenStr)
          : { access_token: '' };

      const response = api.LibraryActivity.joinLibrary(
        tokenObj.access_token,
        payload
      );

      response
        .then((response) => response?.data)
        .then((data) => {
          setOptions(data);
        });
    }
    setIsModalVisible(false);
  };

  const handleChange = (value: any) => {
    console.log('search ---' + value);
    const tokenStr = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '';

    if (tokenStr) {
      const tokenObj =
        typeof tokenStr == 'string' && tokenStr != ''
          ? JSON.parse(tokenStr)
          : { access_token: '' };

      const response = api.LibraryActivity.joinActivitySearch(
        tokenObj.access_token,
        value
      );

      response
        .then((response) => response?.data)
        .then((data) => {
          setOptions(data);
        });
    }
  };

  const runOneTime = useRef(true);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleChange(debouncedSearchTerm);
    } else if (debouncedSearchTerm === '') {
      handleChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const response = api.LibraryActivity.getActivityRoles();
      response
        .then((response) => response?.data)
        .then((data) => {
          setRoles(data);
        });
    }
  }, []);

  console.log(options);

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Button type="primary" onClick={showModal}>
        Join Activity
      </Button>
      <Modal
        title="Join an activity"
        visible={isModalVisible}
        okButtonProps={{ form: 'joinActivityForm', htmlType: 'submit' }}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
        okText="Join"
        destroyOnClose={true}
      >
        <Form
          id="joinActivityForm"
          name="join-activity-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            labelCol={{ span: 24 }}
            label="Activity"
            name="activity"
            rules={[
              {
                required: true,
                message: 'Please select an activity!',
              },
            ]}
          >
            <Select
              style={{ width: '100%' }}
              allowClear
              size="large"
              placeholder="Select an activity"
              showSearch={true}
              optionFilterProp="children"
              onSearch={(value) => {
                setSearchQuery(value);
              }}
            >
              {options
                ? options?.map((option: any) => (
                    <Option value={option.ActivityId} key={option.ActivityId}>
                      {option.Name}
                    </Option>
                  ))
                : null}
            </Select>
          </Form.Item>
          <Form.Item
            labelCol={{ span: 24 }}
            label="Select a role"
            name="role"
            rules={[
              {
                required: true,
                message: 'Please select a Role!',
              },
            ]}
          >
            <Radio.Group>
              {roles?.map((role: any) => (
                <Radio key={role.Id} value={role.Id}>
                  {role.RoleName}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </Suspense>
  );
};

export default JoinActivityModal;
