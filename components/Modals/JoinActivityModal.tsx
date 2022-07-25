import { Button, Form, Modal, Radio, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useRef, useState } from 'react';
import api from '../../api';
import useDebounce from '../../hooks/useDebounce';

const JoinActivityModal: React.FC = () => {
  const { debouncedValue: debouncedSearchTerm, setSearchQuery } =
    useDebounce(500);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [options, setOptions] = useState<any>();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const handleChange = (value: any) => {
    setSearchQuery(value);
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
          console.log(data);
          setOptions(data);
        });
    }
  };

  const runOneTime = useRef(true);
  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;

      // const response = api.LibraryActivity.joinActivitySearch();

      // response
      //   .then((res: any) => res.data)
      //   .then((data: any) => {
      //     setOptions(data);
      //   });
    }
  }, []);
  useEffect(() => {
    if (debouncedSearchTerm) {
      handleChange(debouncedSearchTerm);
    } else if (debouncedSearchTerm === '') {
    }
  }, [debouncedSearchTerm]);

  return (
    <>
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
              {options?.map((option: any) => (
                <Option key={option.id}>{option.name}</Option>
              ))}
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
              <Radio value={'volunteer'}>Volunteer</Radio>
              <Radio value={'project-manager'}>Project Manager</Radio>
              <Radio value={'observer'}>Observer</Radio>
              <Radio value={'mentor'}>Mentor</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default JoinActivityModal;
