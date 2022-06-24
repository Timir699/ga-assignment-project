import React, {createContext, Provider, useState} from "react";
import { useRouter } from "next/router";
import { userInfo } from "os";

const AuthContext = createContext(null);

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    "token":""
  });

  const setUserAuthInfo = (data) => {
   
    console.log(data)
    localStorage.setItem("token", data);
   
    setAuthState({
      token:data,
    })
  
 };

 const logout = () => {
   console.log("logout")
   localStorage.clear()
    setAuthState({
      token:"",
    })
 }

 // checks if the user is authenticated or not
 const isUserAuthenticated = () => {
  if (!authState.token) {
   return false;
  }
  return true
 };

 return (
   <Provider value={{
    authState,
    setUserAuthInfo: (userInfo) => setUserAuthInfo(userInfo) , 
    isUserAuthenticated,
    logout,
 }}>
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };