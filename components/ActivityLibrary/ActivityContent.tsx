import React, { useEffect, useState, useRef } from 'react';
import FilterDropdown from '../../shared-component/FilterDropdown';
import PublicGridView from '../../shared-component/PublicGridView';
import PublicListView from '../../shared-component/PublicListView';
import api from '../../api/index';

const ActivityContent = () => {
  const [isList, setIsList] = useState<boolean>(false);

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
      {isList ? <PublicListView /> : <PublicGridView />}
    </div>
  );
};

export default ActivityContent;
