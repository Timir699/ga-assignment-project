import React, { createContext, useEffect, useState } from 'react';
import auth from '../api/auth';

const AuthContext = createContext({
  authState: {},
  setUserAuthInfo: (userInfo: any) => {},
  isUserAuthenticated: (): boolean => false,
  handleLogout: () => {},
});
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState({
    token: '',
  });
  const setUserAuthInfo = (data: any) => {
    localStorage.setItem('token', data);
    setAuthState({
      token: data,
    });
  };
  const handleLogout = async () => {
    localStorage.clear();
    setAuthState({
      token: '',
    });
  };

  const checkLogin = async () => {
    const token = localStorage.getItem('token');
    console.log('CHECKING LOGIN');
    if (token) {
      setAuthState({ token });
    }
  };
  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
    return true;
  };

  console.log(authState.token);

  //   const token = JSON.parse(authState.token);
  //   console.log(token);

  useEffect(() => {
    checkLogin();
    // auth.userInfo();
  }, []);

  return (
    <Provider
      value={{
        authState,
        setUserAuthInfo: (userInfo: any) => setUserAuthInfo(userInfo),
        isUserAuthenticated,
        handleLogout,
      }}
    >
      {children}
    </Provider>
  );
};
export { AuthContext, AuthProvider };
