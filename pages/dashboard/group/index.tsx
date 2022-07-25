import { Button, Pagination } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../../api/index';
import { Col, Row } from 'antd';
import CustomCard from '../../../shared-component/CustomCard';
import Link from 'next/link';
import { AuthContext } from '../../../auth-context/auth-context';

const Groups = () => {
  const router = useRouter();

  const [groupActibities, setGroupActibities] = useState<any>();
  const authContext = React.useContext(AuthContext);

  const runOneTime = useRef(true);

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const tokenStr = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : '';

      tokenStr ? console.log('login success') : router.push('/login');

      if (tokenStr) {
        const tokenObj =
          typeof tokenStr == 'string' && tokenStr != ''
            ? JSON.parse(tokenStr)
            : { access_token: '' };

        const response = api.GroupActivity.getOwnGroupList(
          tokenObj.access_token
        );

        response
          .then((response) => response.data)
          .then((data) => {
            setGroupActibities(data);
          });
      }
    }
  }, []);

  const pageSize = 12;

  const [paginationState, setPaginationState] = useState({
    data: groupActibities,
    totalPage: groupActibities?.Groups?.length / pageSize,
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

  return (
    <div className="container">
      <div className="mt-12 ml-[5%]">
        <h3 className="text-xl text-indigo-900 bold font-bold">My Groups</h3>
        <p className="text-slate-400">Classes, Clubs, Organizations & More!</p>
        <Button type="primary">Join Group</Button>
        <Button className="ml-4">Create a Group</Button>
      </div>
      <div className="mt-12 ml-[5%]">
        <h2>Group List</h2>
        <Row gutter={[16, 16]}>
          {groupActibities?.Groups?.map((e: any) => (
            <Link key={e.Id} href={`/dashboard/group/${e.Id}`}>
              <Col xs={24} xl={8} lg={12}>
                <CustomCard name={e.Title} id={e.Id} TeamCount={e.TeamCount} />
              </Col>
            </Link>
          ))}
        </Row>
        <Pagination
          style={{ marginTop: 50 }}
          pageSize={pageSize}
          current={paginationState.current}
          total={groupActibities?.Groups?.length}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Groups;
