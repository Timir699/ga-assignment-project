import { Form, Modal, Radio, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useRef, useState } from 'react';
import api from '../api';
import useDebounce from '../hooks/useDebounce';

const JoinGroupModal = (props: any) => {
  const [options, setOptions] = useState<any>([]);
  const [roles, setRoles] = useState([]);
  const { debouncedValue: debouncedSearchTerm, setSearchQuery } =
    useDebounce(500);

  const onFinish = (values: any) => {
    console.log(values);

    const payload = {
      groupId: values.group,
      roles: [values.role],
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

      const response = api.GroupActivity.joinGroup(
        tokenObj.access_token,
        payload
      );

      response
        .then((response) => response?.data)
        .then((data) => {
          setOptions(data);
        });
    }
    props.setJoinIsModalVisible(false);
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

      const response = api.GroupActivity.joinGroupSearch(
        tokenObj.access_token,
        value
      );

      response
        .then((response) => response?.data)
        .then((data) => {
          console.log(data);
          setOptions(data);
        });
    }
  };

  const runOneTime = useRef(true);

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const response = api.GroupActivity.groupRoles();
      response
        .then((response) => response?.data)
        .then((data) => {
          setRoles(data);
        });
    }
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleChange(debouncedSearchTerm);
    } else if (debouncedSearchTerm === '') {
      handleChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <Modal
        title="Join a Group"
        visible={props.isModalVisible}
        onCancel={props.handleCancel}
        okText="Join"
        destroyOnClose={true}
        okButtonProps={{ form: 'joinGroupForm', htmlType: 'submit' }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Form
          id="joinGroupForm"
          name="join-group-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            labelCol={{ span: 24 }}
            label="Group"
            name="group"
            rules={[
              {
                required: true,
                message: 'Please select a group!',
              },
            ]}
          >
            <Select
              style={{ width: '100%' }}
              allowClear
              size="large"
              placeholder="Select a group"
              showSearch={true}
              optionFilterProp="children"
              onSearch={(value) => {
                setSearchQuery(value);
              }}
            >
              {options
                ? options?.map((option: any) => (
                    <Option value={option.Id} key={option.Id}>
                      {option.Title}
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
    </div>
  );
};

export default JoinGroupModal;
