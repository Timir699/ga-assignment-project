import { Input, Select } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

const SearchField: React.FC = () => {
  const router = useRouter();
  const searchValues = (value: any) => {
    router.push({
      pathname: '/search',
      query: { keyword: value },
    });
  };
  return (
    <div className="site-input-group-wrapper">
      <Input.Search
        allowClear
        style={{ width: '100%' }}
        onSearch={searchValues}
        enterButton={true}
      />
    </div>
  );
};

export default SearchField;
