import React, { useContext } from 'react';
import { AuthContext } from '../auth-context/auth-context';
import Navbar from '../shared-component/Navbar';
import ProtectedNav from './ProtectedNav';

const Layout = ({ children }: any) => {
  const authContext = useContext(AuthContext);

  const token = authContext?.authState.token

  return (
    <div>
      {token ? <ProtectedNav /> :  <Navbar />}
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
