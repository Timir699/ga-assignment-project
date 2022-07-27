import { Form, Input, Modal, Radio, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useRef, useState } from 'react';
import api from '../api';
import useDebounce from '../hooks/useDebounce';

const CreateGroupModal = (props: any) => {
  console.log(props);

  const [options, setOptions] = useState<any>([]);
  const [roles, setRoles] = useState([]);
  const { debouncedValue: debouncedSearchTerm, setSearchQuery } =
    useDebounce(500);

  const onFinish = (values: any) => {
    console.log(values);

    const payload = {
      ParentModuleId: values.masterGroup,
      Title: values.group,
      ModuleKey: 'ga-group',
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

      const response = api.GroupActivity.createGroup(
        tokenObj.access_token,
        payload
      );

      response
        .then((response) => response?.data)
        .then((data) => {
          setOptions(data);
        });
    }
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

      const response = api.GroupActivity.masterGroupSearch(
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
  console.log(options);

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
  console.log(options);

  return (
    <div>
      <Modal
        title="Create a Group"
        visible={props.isModalVisible}
        onCancel={props.handleCancel}
        okText="Create"
        destroyOnClose={true}
        okButtonProps={{ form: 'groupName', htmlType: 'submit' }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Form
          id="groupName"
          name="create-group-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            labelCol={{ span: 24 }}
            label="Group Name"
            name="group"
            rules={[
              {
                required: true,
                message: 'Please select a group!',
              },
            ]}
          >
            <Input placeholder="Group Name" />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 24 }}
            label="Master Group"
            name="masterGroup"
            rules={[
              {
                required: true,
                message: 'Please select a Master group!',
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
              {Array.isArray(options)
                ? options?.map((option: any) => (
                    <Option value={option.Id} key={option.Id}>
                      {option.Title} <b>Manager:</b> {option.OwnerName}
                    </Option>
                  ))
                : null}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateGroupModal;
