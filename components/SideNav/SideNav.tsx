import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import Navbar from '../../shared-component/Navbar';
  
  const { Header, Sider, Content } = Layout;
  
  const SideNav: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={`logo ${collapsed ? "mt-24" : "mt-24"}`} />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'My Activites',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'My Groups',
              },
             
            ]}
          />
         
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
              <Navbar />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: `trigger text-2xl`, 
              onClick: () => setCollapsed(!collapsed),
            })}
            <div>
            Content
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default SideNav;