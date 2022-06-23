import React, { useEffect, useState } from 'react';
import { Col, Pagination, Row } from 'antd';
import CustomCard from './CustomCard';
import Link from 'next/link';

const PublicGroupGridView = ({ groupsData }: any) => {
  console.log(groupsData);

  const pageSize = 5;

  const [paginationState, setPaginationState] = useState({
    data: groupsData,
    totalPage: groupsData.length / pageSize,
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
      groupsData,
      totalPage: groupsData.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    }));
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {groupsData.map(
          (e: any, i: any) =>
            i >= paginationState.minIndex &&
            i < paginationState.maxIndex && (
              <Link key={e.Id} href={`/library/group/${e.Id}`}>
                <Col xs={24} xl={6} lg={12}>
                  <CustomCard
                    image={e.Properties.bannerImage}
                    members={e.TeamCount}
                    name={e.Title}
                    id={e.Id}
                  />
                </Col>
              </Link>
            )
        )}
      </Row>
      <Pagination
        style={{ marginTop: 50 }}
        pageSize={pageSize}
        current={paginationState.current}
        total={groupsData.length}
        onChange={onPageChange}
      />
    </div>
  );
};

export default PublicGroupGridView;
