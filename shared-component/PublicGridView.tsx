import React, { useEffect, useRef, useState } from 'react';
import { Col, Pagination, Row } from 'antd';
import CustomCard from './CustomCard';
import Link from 'next/link';
import api from '../api';
import { useRouter } from 'next/router';

const PublicGridView = () => {
  const runOneTime = useRef(true);
  const router = useRouter();

  const pageDataSize = 12;

  const [paginationState, setPaginationState] = useState<any>({
    data: null,
    totalDataInPage: pageDataSize,
    current: router.query.pageIndex,
  });

  const onPageChange = (page: number) => {
    const response = api.LibraryActivity.allLibraryActivity(
      page - 1,
      12,
      bodyObj
    );

    response
      .then((response: any) => response.data)
      .then((data: any) => {
        setPaginationState((prevState: any) => ({
          ...prevState,
          data: data,
          totalDataInPage: paginationState?.data?.Count / pageDataSize,
          current: page,
        }));
      });

    router.push({
      pathname: '/library/all',
      query: { pageIndex: page - 1, pageSize: 12 },
    });
  };

  const bodyObj = {
    activityType: null,
  };

  useEffect(() => {
    if (runOneTime.current && router.isReady) {
      console.log(router.query.pageIndex);
      runOneTime.current = false;
      const response = api.LibraryActivity.allLibraryActivity(
        router.query.pageIndex,
        12,
        bodyObj
      );

      response
        .then((response: any) => response.data)
        .then((data: any) => {
          setPaginationState((prevState: any) => ({
            ...prevState,
            data: data,
            totalDataInPage: paginationState?.data?.Count / pageDataSize,
            current: router.query.pageIndex,
            minIndex: 0,
            maxIndex: pageDataSize,
          }));
        });
    }
  }, [router.isReady]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {paginationState?.data?.Items?.map((e: any, i: any) => (
          <Link key={e.ActivityId} href={`/library/all/${e.ActivityId}`}>
            <Col xs={24} xl={8} lg={12}>
              <CustomCard
                name={e.Title}
                id={e.ActivityId}
                members={e.MemberCount}
              />
            </Col>
          </Link>
        ))}
      </Row>
      <Pagination
        style={{ marginTop: 50 }}
        pageSize={pageDataSize}
        current={paginationState?.current}
        total={paginationState?.data?.Count}
        onChange={onPageChange}
      />
    </div>
  );
};

export default PublicGridView;
