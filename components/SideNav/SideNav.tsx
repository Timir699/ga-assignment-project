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
import ProtectedNav from '../../shared-component/ProtectedNav';

const { Header, Sider, Content } = Layout;

const SideNav: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                theme="light"
                style={{
                    //   overflow: "auto",
                    height: '100vh',
                    position: 'sticky',
                    top: 0,
                    left: 0,
                }}
            >
                <div className={`logo ${collapsed ? 'mt-24' : 'mt-24'}`} />
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
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                        className: `trigger text-2xl collapsed-btn`,
                        onClick: () => setCollapsed(!collapsed),
                    }
                )}
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        position: 'sticky',
                        top: 0,
                        left: 0,
                        padding: 0,
                        borderBottom: '1px solid #eee',
                        overflow: 'hidden',
                    }}
                >
                    <ProtectedNav />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <div>
                        <div
                            style={{
                                padding: 24,
                                background: '#fff',
                                textAlign: 'center',
                            }}
                        >
                            ...
                            <br />
                            Really
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            long
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            content
                        </div>
                        Content
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default SideNav;
