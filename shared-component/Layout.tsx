import React from 'react';
import Navbar from '../shared-component/Navbar';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
