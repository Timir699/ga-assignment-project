import { Button, Form, Modal, Radio, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';

const options = [
  {
    name: 'hello',
    id: '1',
  },
  {
    name: 'abc',
    id: '2',
  },
];

const JoinActivityModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Join Activity
      </Button>
      <Modal
        title="Join an activity"
        visible={isModalVisible}
        okButtonProps={{ form: 'myForm', htmlType: 'submit' }}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
        okText="Join"
      >
        <Form
          id="myForm"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
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
            >
              {options.map((option) => (
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
