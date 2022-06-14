import { Button } from 'antd';
import React, { useState } from 'react';
import FilterDropdown from '../../shared-component/FilterDropdown';
import GridView from '../../shared-component/GridView';
import ListView from '../../shared-component/ListView';

const ActivityContent = () => {
  const [isList, setIsList] = useState<boolean>(false);
  console.log(isList);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 style={{ color: '#262262', fontWeight: 900 }} className="text-xl">
            Activity Library
          </h3>
        </div>
        <div>
          <FilterDropdown />
          <span onClick={() => setIsList(!isList)} className="cursor-pointer">
            {isList ? 'List View' : 'Grid view'}
          </span>
        </div>
      </div>
      {isList ? <GridView /> : <ListView />}
    </div>
  );
};

export default ActivityContent;
