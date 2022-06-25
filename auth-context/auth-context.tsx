import React, { useState } from "react";
import { useRouter } from "next/router";
import { userInfo } from "os";
const AuthContext = React.createContext();
const { Provider } = AuthContext;
const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState({
    token: ""
  });
  const setUserAuthInfo = data => {
    localStorage.setItem("token", data);
    setAuthState({
      token: data
    });
  };
  const handleLogout = async () => {
    // localStorage.removeItem("bottega_workshop_token");
    localStorage.clear();
    setAuthState({
      token: ""
    });
  };
  React.useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    const token = localStorage.getItem("token");
    console.log("CHECKING LOGIN");
    if (token) {
      setUserAuthInfo(token);
    }
  };
  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
    return true;
  };
  return (
    <Provider
      value={{
        authState,
        setUserAuthInfo: userInfo => setUserAuthInfo(userInfo),
        isUserAuthenticated,
        handleLogout
      }}
    >
      {children}
    </Provider>
  );
};
export { AuthContext, AuthProvider };
