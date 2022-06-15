import { Breadcrumb, Col, Layout, Menu, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const ProtectedNav: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
    //   boxShadow: '0px 0px 40px 30px #F6F6F6',
    // borderBottom: '1px solid #eee'
    }}
  >
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={['activities']}>
        <Link href="/library/all">
          <a className="nav-a nav-a-light-bold">Activity Library</a>
        </Link>
        <Link href="/library/group">
          <a className="nav-a nav-a-light-bold">Groups</a>
        </Link>
      </Menu>
    </div>
    <div>
     
    </div>
  </div>
);

export default ProtectedNav;
