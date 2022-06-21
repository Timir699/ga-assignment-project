import { Avatar, Breadcrumb, Col, Dropdown, Layout, Menu, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import { BellFilled } from '@ant-design/icons';
import SearchField from './SearchField';

const notifications = (
  <Menu>
    <h2 style={{ paddingLeft: 20, paddingTop: 20, fontSize: 18 }}>
      Notification
    </h2>
    <Menu.Item key="1">Item 1</Menu.Item>
    <Menu.Item key="2">Item 2</Menu.Item>
    <Menu.Item key="3">Item 3</Menu.Item>
  </Menu>
);
const profile = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/user" className="nav-text">
        Profile
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">Logout</Menu.Item>
  </Menu>
);

const ProtectedNav: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div>
        <SearchField />
      </div>
      <div>
        <Menu mode="horizontal">
          <Link href="/library/all">
            <a className="nav-a nav-a-light-bold">Activity Library</a>
          </Link>
          <Link href="/library/group">
            <a className="nav-a nav-a-light-bold">Groups</a>
          </Link>
        </Menu>
      </div>
    </div>
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="text-black">
          <Dropdown
            // overlayClassName="ant-dropdown-height"
            overlayStyle={{ width: '350px' }}
            trigger={['click']}
            overlay={notifications}
            placement="bottomRight"
            arrow
          >
            <BellFilled
              style={{
                fontSize: '120%',
                color: '#262262',
                cursor: 'pointer',
                marginRight: '20px',
              }}
            />
          </Dropdown>

          <a>
            <Dropdown
              overlayStyle={{ width: '200px', textAlign: 'right' }}
              trigger={['click']}
              overlay={profile}
              placement="bottomRight"
              arrow
            >
              <Avatar
                src={
                  <img
                    src="https://joeschmoe.io/api/v1/random"
                    height={40}
                    width={40}
                  />
                }
              />
            </Dropdown>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProtectedNav;
