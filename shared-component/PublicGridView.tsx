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

  const [pageIndex, setPageIndex] = useState<any>(0);

  const pageDataSize = 12;

  const [paginationState, setPaginationState] = useState<any>({
    data: null,
    totalDataInPage: pageDataSize,
    current: pageIndex,
  });

  const onPageChange = (page: number) => {
    setPageIndex(page - 1);
    const response = api.LibraryActivity.allLibraryActivity(
      page - 1,
      12,
      bodyObj
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

    router.push({ pathname: '/library/all', query: { pageIndex: page - 1 } });
  };

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
          setPaginationState((prevState: any) => ({
            ...prevState,
            data: data,
            totalDataInPage: paginationState?.data?.Count / pageDataSize,
            current: pageIndex,
            minIndex: 0,
            maxIndex: pageDataSize,
          }));
        });
    }
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {paginationState?.data?.Items?.map((e: any, i: any) => (
          <Link key={e.id} href={`/library/all/${e.id}`}>
            <Col xs={24} xl={8} lg={12}>
              <CustomCard name={e.Title} id={e.id} members={e.MemberCount} />
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
