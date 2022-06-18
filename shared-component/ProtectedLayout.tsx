import React from 'react';
import SideNav from '../components/SideNav/SideNav';

const ProtectedLayout = ({ children }: any) => {
  return (
    <div>
      <SideNav />
    </div>
  );
};

export default ProtectedLayout;
