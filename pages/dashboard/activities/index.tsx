import { Button } from 'antd';
import React from 'react';
import MyActivityContent from '../../../components/ActivityLibrary/MyActivityContent';

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
        <Button type="primary">Join Activity</Button>
        <Button className="ml-4">Create Activity</Button>
      </div>

      <div className="mt-12 ml-[5%]">
        <MyActivityContent />
      </div>
    </div>
  );
};

export default Activities;
