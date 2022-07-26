import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import MyActivityContent from '../../../components/ActivityLibrary/MyActivityContent';
import CreateActivityModal from '../../../components/Modals/CreateActivityModal';
import JoinActivityModal from '../../../components/Modals/JoinActivityModal';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../auth-context/auth-context';
import api from '../../../api';

const Activities = () => {
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
        <MyActivityContent />
      </div>
    </div>
  );
};

export default Activities;
