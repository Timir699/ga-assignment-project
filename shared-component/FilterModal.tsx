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

const FilterModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <span className="cursor-pointer" onClick={showModal}>
        Filter
      </span>
      <Modal
        title="Filter"
        visible={isModalVisible}
        okButtonProps={{ form: 'joinActivityForm', htmlType: 'submit' }}
        onCancel={handleCancel}
        okText="Submit"
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
          <Form.Item labelCol={{ span: 24 }} label="Activity" name="activity">
            <Radio.Group>
              <div className="flex justify-between">
                <Radio value={'all'}>All</Radio>
                <Radio value={'project'}>Project</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'company'}>Company</Radio>
                <Radio value={'internship'}>Internship</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'challenge'}>Challenge</Radio>
                <Radio value={'service'}>Service</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'event'}>Event</Radio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }} label="My Role" name="role">
            <Radio.Group>
              <div className="flex justify-between">
                <Radio value={'all'}>All</Radio>
                <Radio value={'member'}>Member</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'manager'}>Manager</Radio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }} label="Progress" name="progress">
            <Radio.Group>
              <div className="flex justify-between">
                <Radio value={'all'}>All</Radio>
                <Radio value={'in-progress'}>In Progress</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'completed'}>Completed</Radio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }} label="Status" name="status">
            <Radio.Group>
              <div className="flex justify-between">
                <Radio value={'all'}>All</Radio>
                <Radio value={'active'}>Active</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'inactive'}>Inactive</Radio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }} label="Class year" name="class">
            <Radio.Group>
              <div className="flex justify-between">
                <Radio value={'all'}>All</Radio>
                <Radio value={'2020'}>2020</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'2021'}>2021</Radio>
                <Radio value={'2024'}>2024</Radio>
              </div>
              <div className="flex justify-between">
                <Radio value={'2025'}>2025</Radio>
              </div>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FilterModal;
