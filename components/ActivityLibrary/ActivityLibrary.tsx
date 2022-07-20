import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import ActivityContent from './ActivityContent';
const { Sider, Content } = Layout;

const ActivityLibrary = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="mt-12 mx-[12%]">
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="logo" />
        <h2 className="mt-6">Filter</h2>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'All',
            },
            {
              key: '2',
              label: 'My Favorites',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          <ActivityContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ActivityLibrary;
