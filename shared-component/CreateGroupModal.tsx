import { Modal } from 'antd';
import React from 'react';

const CreateGroupModal = (props: any) => {
  return (
    <div>
      <Modal
        title="Create Group"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default CreateGroupModal;
