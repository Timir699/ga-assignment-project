import React, { useEffect, useRef, useState } from 'react';
import api from '../../api';
import FilterDropdown from '../../shared-component/FilterDropdown';
import PublicGroupGridView from '../../shared-component/PublicGroupGridView';
import PublicListView from '../../shared-component/PublicListView';

const applicationId = 'e1e0322c-acb0-4a24-958c-23b2ad912a2c';
const tenantId = 'af3baf1d-7aae-462c-9d1e-051cef459b86';

const GroupContent = () => {
  const [groupsData, setGroupsData] = useState<any>([]);
  const [isList, setIsList] = useState<boolean>(false);

  const runOneTime = useRef(true);

  useEffect(() => {
    if (runOneTime.current) {
      runOneTime.current = false;

      const response = api.GroupActivity.getGroupList(
        0,
        12,
        applicationId,
        tenantId
      );

      response
        .then((response) => response.data)
        .then((data) => {
          setGroupsData(data);
        });
      console.log(groupsData);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between mt-12">
        <div>
          <h3 style={{ color: '#262262', fontWeight: 900 }} className="text-xl">
            Groups
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
      {isList ? (
        <PublicListView />
      ) : (
        <PublicGroupGridView groupsData={groupsData} />
      )}
    </div>
  );
};

export default GroupContent;
