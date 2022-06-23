import React, { useEffect, useState } from 'react';
import FilterDropdown from '../../shared-component/FilterDropdown';
import GridView from '../../shared-component/GridView';
import ListView from '../../shared-component/ListView';
import PublicGridView from '../../shared-component/PublicGridView';
import PublicGroupGridView from '../../shared-component/PublicGroupGridView';
import PublicListView from '../../shared-component/PublicListView';

const GroupContent = () => {
  const [groupsData, setGroupsData] = useState<any>([]);
  const [isList, setIsList] = useState<boolean>(false);

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://api-gagroupservice-dev.saams.xyz/api/v1/group/library?pageIndex=0&pageSize=12&applicationId=e1e0322c-acb0-4a24-958c-23b2ad912a2c&tenantId=af3baf1d-7aae-462c-9d1e-051cef459b86`
      );
      const data = await res.json();
      setGroupsData(data.Groups);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
    console.log(groupsData);
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
