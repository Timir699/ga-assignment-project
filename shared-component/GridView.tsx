import React from 'react';
import { Col, Row } from 'antd';
import CustomCard from './CustomCard';

const GridView = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
        <Col xs={24} xl={8} lg={12}>
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};

export default GridView;
