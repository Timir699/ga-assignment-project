import React, { useEffect, useRef, useState } from 'react';
import { Col, Pagination, Row } from 'antd';
import CustomCard from './CustomCard';
import Link from 'next/link';
import type { PaginationProps } from 'antd';
import api from '../api';
import { useRouter } from 'next/router';

const PublicGridView = (props: any) => {
  const runOneTime = useRef(true);
  const router = useRouter();
  console.log(router.query);

  const [librayActivities, setLibrayActivities] = useState<any>();

  const pageSize = 12;
  const dummyData = librayActivities?.Items;

  const [paginationState, setPaginationState] = useState({
    data: dummyData,
    totalPage: librayActivities?.Count || pageSize,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const [pageIndex, setPageIndex] = useState<any>();
  const onPageChange = (page: number) => {
    setPageIndex(page - 1);
    // const response = api.LibraryActivity.allLibraryActivity(
    //   page - 1,
    //   12,
    //   bodyObj
    // );
    // response
    //   .then((response) => response.data)
    //   .then((data) => {
    //     console.log(data);

    //     setLibrayActivities(data);
    //   });
    setPaginationState((prevState) => ({
      ...prevState,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    }));
  };

  console.log(pageIndex);

  const bodyObj = {
    activityType: null,
  };

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const response = api.LibraryActivity.allLibraryActivity(
        pageIndex,
        12,
        bodyObj
      );

      response
        .then((response) => response.data)
        .then((data) => {
          setLibrayActivities(data);
        });
    }
    setPaginationState((prevState) => ({
      ...prevState,
      dummyData,
      totalPage: librayActivities?.Count || pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    }));
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {dummyData?.map(
          (e: any, i: any) =>
            i >= paginationState?.minIndex &&
            i < paginationState?.maxIndex && (
              <Link key={e.id} href={`/library/all/${e.id}`}>
                <Col xs={24} xl={8} lg={12}>
                  <CustomCard
                    name={e.Title}
                    id={e.id}
                    members={e.MemberCount}
                  />
                </Col>
              </Link>
            )
        )}
      </Row>
      <Pagination
        style={{ marginTop: 50 }}
        pageSize={pageSize}
        current={paginationState?.current}
        total={librayActivities?.Count}
        onChange={onPageChange}
      />
    </div>
  );
};

export default PublicGridView;
