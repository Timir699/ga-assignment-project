import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Activities from '../../pages/dashboard/activities';
import Groups from '../../pages/dashboard/group';
import ProtectedNav from '../../shared-component/ProtectedNav';

const { Header, Sider, Content } = Layout;
type Sidebar = {
  title: string;
  icon?: string;
  children?: Sidebar[];
  url?: string;
};

const sidebarList: Sidebar[] = [
  {
    title: 'My Activites',
    icon: '/project.svg',
    url: '/dashboard/activities',
  },
  {
    title: 'My Groups',
    icon: '/employee.svg',
    url: '/dashboard/group',
  },
];

const SideNav: React.FC = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  console.log(router.pathname);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        style={{
          overflow: 'hidden',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className={`logo ${collapsed ? 'mt-36' : 'mt-36'}`} />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {sidebarList?.map((each: Sidebar, index: number) => {
            return (
              <React.Fragment key={index}>
                {!each?.children?.length && (
                  <Menu.Item
                    key={each.url || index}
                    icon={<img src={each?.icon} alt="Icon" />}
                  >
                    <Link
                      href={each?.url || ''}
                      className={`font-semibold ${each.title
                        .split(' ')
                        .join('-')}`}
                    >
                      {each.title}
                    </Link>
                  </Menu.Item>
                )}
              </React.Fragment>
            );
          })}
        </Menu>
        <div className={`mb-24 ${collapsed ? 'ml-[83%]' : 'ml-[94%]'}`}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: `trigger text-2xl collapsed-btn`,
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>
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
            minHeight: '100vh',
          }}
        >
          {router.pathname === '/dashboard/activities' ? (
            <div className={collapsed ? '' : 'container'}>
              <Activities />
            </div>
          ) : (
            <div className={collapsed ? '' : 'container'}>
              <Groups />
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideNav;
