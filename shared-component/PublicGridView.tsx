import React from 'react';
import { Col, Row } from 'antd';
import CustomCard from './CustomCard';
import Link from 'next/link';

const dummyData = [
  { name: 'Europe Street beat', id: '1' },
  { name: 'hello', id: '2' },
];

const PublicGridView = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {dummyData.map((e) => (
          <Link href={`/library/all/${e.id}`}>
            <Col xs={24} xl={8} lg={12}>
              <CustomCard name={e.name} id={e.id} />
            </Col>
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default PublicGridView;
