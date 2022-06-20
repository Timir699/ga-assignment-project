import { Button, Modal, Select } from 'antd';
import React, { useState } from 'react';

const CreateActivityModal: React.FC = () => {
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

  return (
    <>
      <Button className="ml-4" onClick={showModal}>
        Create Activity
      </Button>
      <Modal
        title="Create an Activity"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
      ></Modal>
    </>
  );
};

export default CreateActivityModal;
