import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilterDropdown from '../../shared-component/FilterDropdown';
import FilterModal from '../../shared-component/FilterModal';
import GridView from '../../shared-component/GridView';
import ListView from '../../shared-component/ListView';

const MyActivityContent = () => {
  const [isList, setIsList] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 style={{ color: '#262262', fontWeight: 900 }} className="text-xl">
            My Activity Library
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
