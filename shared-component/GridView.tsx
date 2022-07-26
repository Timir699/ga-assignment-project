import React, { useEffect, useRef, useState } from 'react';
import { Col, Pagination, Row } from 'antd';
import CustomCard from './CustomCard';
import Link from 'next/link';
import api from '../api';
import { useRouter } from 'next/router';

const GridView = () => {
  const runOneTime = useRef(true);
  const router = useRouter();

  const pageDataSize = 12;

  const [paginationState, setPaginationState] = useState<any>({
    data: null,
    totalDataInPage: pageDataSize,
    current: router.query.pageIndex,
  });

  const onPageChange = (page: number) => {
    const tokenStr = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '';

    if (tokenStr) {
      const tokenObj =
        typeof tokenStr == 'string' && tokenStr != ''
          ? JSON.parse(tokenStr)
          : { access_token: '' };

      const response = api.LibraryActivity.getOwnLibraryActivity(
        tokenObj.access_token,
        page,
        12
      );
      response
        .then((response) => response.data)
        .then((data) => {
          setPaginationState((prevState: any) => ({
            ...prevState,
            data: data,
            totalDataInPage: paginationState?.data?.Count / pageDataSize,
            current: page,
          }));
        });
    }
    router.push({
      pathname: '/dashboard/activities',
      query: { pageIndex: page - 1, pageSize: 12 },
    });
  };

  console.log(router.query.pageIndex);

  useEffect(() => {
    if (runOneTime.current && router.isReady) {
      console.log(router.query.pageIndex);
      runOneTime.current = false;
      const tokenStr = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : '';

      if (tokenStr) {
        const tokenObj =
          typeof tokenStr == 'string' && tokenStr != ''
            ? JSON.parse(tokenStr)
            : { access_token: '' };

        const response = api.LibraryActivity.getOwnLibraryActivity(
          tokenObj.access_token,
          0,
          12
        );
        response
          .then((response) => response.data)
          .then((data) => {
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
    }
  }, [router.isReady]);
  console.log(paginationState?.data?.Items);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {paginationState?.data?.Items?.map((e: any, i: any) => (
          <Link key={e.Id} href={`/dashboard/activities/${e.Id}`}>
            <Col xs={24} xl={8} lg={12}>
              <CustomCard
                name={e.Title}
                id={e.Id}
                ManagerName={e.ManagerName}
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
export default GridView;
