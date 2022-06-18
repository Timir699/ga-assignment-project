import { Button } from 'antd';
import React from 'react';

const Groups = () => {
  return (
    <div className="container">
      <div className="mt-12 ml-[5%]">
        <h3 className="text-xl text-indigo-900 bold font-bold">My Groups</h3>
        <p className="text-slate-400">Classes, Clubs, Organizations & More!</p>
        <Button type="primary">Join Group</Button>
        <Button className="ml-4">Create a Group</Button>
      </div>
    </div>
  );
};

export default Groups;
