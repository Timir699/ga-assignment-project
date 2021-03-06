import { Menu } from 'antd';
import Link from 'next/link';
import React from 'react';
import SearchField from './SearchField';

const Navbar: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '20px',
      paddingBottom: '20px',
      boxShadow: '0px 0px 40px 30px #F6F6F6',
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
      <Menu mode="horizontal">
        <Link href="/login">
          <a className="nav-a nav-a-bold ">Log in</a>
        </Link>
        <Link href="/signup">
          <a className="nav-a nav-a-bold ">Sign Up</a>
        </Link>
      </Menu>
    </div>
  </div>
);

export default Navbar;
