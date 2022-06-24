import React, { useEffect, useState } from 'react';
import FilterDropdown from '../../shared-component/FilterDropdown';
import GridView from '../../shared-component/GridView';
import ListView from '../../shared-component/ListView';
import PublicGridView from '../../shared-component/PublicGridView';
import PublicListView from '../../shared-component/PublicListView';
import api from "../../api/index"

const bodyObj = {
  "activityType": 0,
  "searchParam": "",
  "filterParam": "",
  "goal": "",
  "category": "",
  "classYearId": ""
}

const ActivityContent = () => {
  const [isList, setIsList] = useState<boolean>(false);
  const [librayActivities, setLibrayActivities] = useState([]);
  
  useEffect(() => {
    const response = api.LibraryActivity.allLibraryActivity(0,12,bodyObj)
   
    response.then((response) => response.data).then(data => {
        setLibrayActivities(data)
    })

  }, []);

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
          <span
            onClick={() => setIsList(!isList)}
            className="cursor-pointer ml-4"
          >
            {isList ? 'Grid view' : 'List View'}
          </span>
        </div>
      </div>
      {isList ? <PublicListView /> : <PublicGridView librayActivities={librayActivities} />}
    </div>
  );
};

export default ActivityContent;
