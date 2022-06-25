import { Button } from 'antd';
import React, {useEffect, useState} from 'react';
import MyActivityContent from '../../../components/ActivityLibrary/MyActivityContent';
import CreateActivityModal from '../../../components/Modals/CreateActivityModal';
import JoinActivityModal from '../../../components/Modals/JoinActivityModal';
import { useRouter } from "next/router";
import {AuthContext} from "../../../auth-context/auth-context"
import api from '../../../api';

const Activities = () => {

  const router = useRouter();
  const authContext = React.useContext(AuthContext);
  const [librayActivities, setLibrayActivities] = useState([]);

  useEffect(() => {

    const tokenStr = localStorage.getItem("token") ? localStorage.getItem("token") : ""
  
    tokenStr
    ? console.log("login success")
    : router.push("/login");
    if(tokenStr){
      const tokenObj = typeof tokenStr == "string" && tokenStr != "" ? JSON.parse(tokenStr) : {access_token:""}

      const response = api.LibraryActivity.getOwnLibraryActivity(tokenObj.access_token)
      
      response.then((response) => response.data).then(data => {
        console.log(data)
          setLibrayActivities(data)
      })
    }
  }, []);
  return (
    <div className="container">
      <div className="mt-12 ml-[5%]">
        <h3 className="text-xl text-indigo-900 bold font-bold">
          My Activities
        </h3>
        <p className="text-slate-400">
          Includes Projects, Companies, Internships & Contests
        </p>

        <JoinActivityModal />
        <CreateActivityModal />
      </div>

      <div className="mt-12 ml-[5%]">
        <MyActivityContent librayActivities={librayActivities} />
      </div>
    </div>
  );
};

export default Activities;
