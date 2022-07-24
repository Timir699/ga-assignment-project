import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import api from '../api';

const { Header, Sider, Content } = Layout;

const onFinish = (value: any) => {
  console.log(value);
};

const GroupsDetails = () => {
  const router = useRouter();
  console.log(router.query.Id);

  const [GroupsDetailsData, setGroupsDetailsData] = useState<any>();

  const runOneTime = useRef(true);

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;
      const response = api.GroupActivity.groupDetails(router.query.Id);

      response
        .then((res: any) => res.data)
        .then((data: any) => {
          setGroupsDetailsData(data);
        });
    }
  }, []);
  console.log(GroupsDetailsData?.Properties?.keys);

  return (
    <div className="container">
      <>
        <div className="h-48 w-[100%] bg-slate-100 rounded-md"></div>
        <div>
          <Layout>
            <Sider>
              <div>
                <div className="h-48 w-48 bg-slate-300 rounded-md"></div>
              </div>
              {/* <h2 className="mt-8">Profile Settings</h2>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    label: 'Personal Info',
                  },
                ]}
              /> */}
            </Sider>
            <Layout>
              <Header
                style={{ height: '200px', borderBottom: '1px solid #eee' }}
              >
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-3xl">{GroupsDetailsData?.Title}</h2>
                    <h4 className="text-2xl">
                      {GroupsDetailsData?.Owner?.Name}
                    </h4>
                  </div>
                  <div className="mt-24">
                    {/* <Button>Preview</Button>
                    <Button htmlType="submit" className="ml-4" type="primary">
                      Update
                    </Button> */}
                  </div>
                </div>
              </Header>
              <Content style={{ background: '#fff', padding: '20px' }}>
                <h2>Description: </h2>
              </Content>
            </Layout>
          </Layout>
        </div>
      </>
    </div>
  );
};

export default GroupsDetails;
