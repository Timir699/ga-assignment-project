import { Button, Dropdown, Menu, Select, Space } from 'antd';
import React from 'react';
import { Option } from 'antd/lib/mentions';
import { useRouter } from 'next/router';

const FilterDropdown: React.FC = () => {
  const router = useRouter();
  let SelectOption = [
    { value: 'all', label: 'All' },
    { value: 'featured', label: 'Featured' },
  ];

  const handleChange = (value: any) => {
    router.push({
      pathname: '/library/all',
      query: { keyword: value },
    });
  };
  return (
    <>
      <Select placeholder="All" style={{ width: 100 }} onChange={handleChange}>
        {SelectOption.map((option) => (
          <Option key={option.value}>{option.label}</Option>
        ))}
      </Select>
    </>
  );
};

export default FilterDropdown;
