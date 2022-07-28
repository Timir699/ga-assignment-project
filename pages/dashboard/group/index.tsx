import { Button, Modal, Pagination } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../../api/index';
import { Col, Row } from 'antd';
import CustomCard from '../../../shared-component/CustomCard';
import Link from 'next/link';
import JoinGroupModal from '../../../shared-component/JoinGroupModal';
import CreateGroupModal from '../../../shared-component/CreateGroupModal';
import ProtectedLayout from '../../../shared-component/ProtectedLayout';

const Groups = () => {
  const runOneTime = useRef(true);
  const router = useRouter();

  const [groupActibities, setGroupActibities] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isJoinModalVisible, setJoinIsModalVisible] = useState(false);

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

      const response = api.GroupActivity.getOwnGroupList(
        tokenObj.access_token,
        page - 1,
        12
      );

      response
        .then((response) => response.data)
        .then((data) => {
          setPaginationState((prevState: any) => ({
            ...prevState,
            data: data,
            totalDataInPage: paginationState?.data?.TotalCount / pageDataSize,
            current: page,
          }));
        });
    }
    router.push({
      pathname: '/dashboard/group',
      query: { pageIndex: page - 1, pageSize: 12 },
    });
  };

  useEffect(() => {
    if (runOneTime.current && router.isReady) {
      runOneTime.current = false;
      const tokenStr = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : '';

      if (tokenStr) {
        const tokenObj =
          typeof tokenStr == 'string' && tokenStr != ''
            ? JSON.parse(tokenStr)
            : { access_token: '' };

        const response = api.GroupActivity.getOwnGroupList(
          tokenObj.access_token,
          0,
          12
        );

        response
          .then((response) => response.data)
          .then((data) => {
            console.log(data);

            setPaginationState((prevState: any) => ({
              ...prevState,
              data: data,
              totalDataInPage: paginationState?.data?.TotalCount / pageDataSize,
              current: router.query.pageIndex,
            }));
          });
      }
    }
  }, [router.isReady]);

  const showJoinModal = () => {
    setJoinIsModalVisible(true);
  };
  const joinModalHandleOk = () => {
    setJoinIsModalVisible(false);
  };
  const joinModalHandleCancel = () => {
    setJoinIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(paginationState?.data?.Groups);

  return (
    <div className="container">
      <div className="mt-12 ml-[5%]">
        <h3 className="text-xl text-indigo-900 bold font-bold">My Groups</h3>
        <p className="text-slate-400">Classes, Clubs, Organizations & More!</p>
        <JoinGroupModal
          setJoinIsModalVisible={setJoinIsModalVisible}
          handleOk={joinModalHandleOk}
          handleCancel={joinModalHandleCancel}
          isModalVisible={isJoinModalVisible}
        />
        <CreateGroupModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        />
        <Button type="primary" onClick={showJoinModal}>
          Join Group
        </Button>

        <Button className="ml-4" onClick={showModal}>
          Create a Group
        </Button>
      </div>
      <div className="mt-12 ml-[5%]">
        <h2>Group List</h2>
        <Row gutter={[16, 16]}>
          {paginationState?.data?.Groups?.map((e: any) => (
            <Link key={e.Id} href={`/dashboard/group/${e.Id}`}>
              <Col xs={24} xl={8} lg={12}>
                <CustomCard name={e.Title} id={e.Id} TeamCount={e.TeamCount} />
              </Col>
            </Link>
          ))}
        </Row>
        <Pagination
          style={{ marginTop: 50 }}
          pageSize={pageDataSize}
          current={paginationState.current}
          total={paginationState?.data?.TotalCount}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Groups;
