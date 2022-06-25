import React, { useEffect, useState } from 'react';
import { Col, Pagination, Row } from 'antd';
import CustomCard from './CustomCard';
import Link from 'next/link';



const GridView = ({librayActivities}: any) => {

  const dummyData = librayActivities;
  const pageSize = 2;

  const [paginationState, setPaginationState] = useState({
    data: dummyData,
    totalPage: dummyData.length / pageSize,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

  const onPageChange = (page: any) => {
    setPaginationState((prevState) => ({
      ...prevState,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    }));
  };

  useEffect(() => {
    setPaginationState((prevState) => ({
      ...prevState,
      dummyData,
      totalPage: dummyData.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    }));
  }, []);
  return (
    <div>
      <Row gutter={[16, 16]}>
        {dummyData.map(
          (e, i) =>
            i >= paginationState.minIndex &&
            i < paginationState.maxIndex && (
              <Link key={e.id} href={`/dashboard/activities/${e.id}`}>
                <Col xs={24} xl={8} lg={12}>
                  <CustomCard name={e.name} id={e.id} />
                </Col>
              </Link>
            )
        )}
      </Row>
      <Pagination
        style={{ marginTop: 50 }}
        pageSize={pageSize}
        current={paginationState.current}
        total={dummyData.length}
        onChange={onPageChange}
      />
    </div>
  );
};

export default GridView;
