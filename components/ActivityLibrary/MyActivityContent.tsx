import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilterDropdown from '../../shared-component/FilterDropdown';
import FilterModal from '../../shared-component/FilterModal';
import GridView from '../../shared-component/GridView';
import ListView from '../../shared-component/ListView';

const MyActivityContent = () => {
  const [isList, setIsList] = useState<boolean>(false);
  const [activitiesData, setActivitiesData] = useState<boolean>();

  // useEffect(() => {
  //   fetch(
  //     'https://api-globalalohaservice-dev.saams.xyz/v1/activity/library?pageIndex=0&pageSize=12',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         activityType: 0,
  //         searchParam: 'string',
  //         filterParam: 'string',
  //         goal: 'string',
  //         category: 'string',
  //         classYearId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  //       }),
  //     }
  //   ).then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 style={{ color: '#262262', fontWeight: 900 }} className="text-xl">
            Activity Library
          </h3>
        </div>
        <div>
          <FilterModal />
          <span
            onClick={() => setIsList(!isList)}
            className="cursor-pointer ml-4"
          >
            {isList ? 'Grid view' : 'List View'}
          </span>
        </div>
      </div>
      {isList ? <ListView /> : <GridView />}
    </div>
  );
};

export default MyActivityContent;
