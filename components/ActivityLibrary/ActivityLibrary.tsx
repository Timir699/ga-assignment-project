import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import FilterDropdown from '../../shared-component/FilterDropdown';
import ActivityContent from './ActivityContent';
const { Header, Sider, Content } = Layout;

const ActivityLibrary = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="mt-12 mx-[12%]">
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="logo" />
        <h2 className="mt-6">Types</h2>
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
              label: 'Projects',
            },
            {
              key: '3',
              label: 'Companies',
            },
            {
              key: '4',
              label: 'Internships',
            },
            {
              key: '5',
              label: 'Challenges',
            },
            {
              key: '6',
              label: 'Events',
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
