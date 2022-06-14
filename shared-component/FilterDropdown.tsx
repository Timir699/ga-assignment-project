import { Button, Dropdown, Menu, Select, Space } from 'antd';
import React from 'react';
import { Option } from 'antd/lib/mentions';

let SelectOption = [
    { value: 'all', label: 'All' },
    { value: 'featured', label: 'Featured' },
];

const handleChange = (value: string) => {
    console.log(value);
};

const FilterDropdown: React.FC = () => (
    <>
        <Select
            placeholder="All"
            style={{ width: 100 }}
            onChange={handleChange}
        >
            {SelectOption.map((option) => (
                <Option key={option.value}>{option.label}</Option>
            ))}
        </Select>
    </>
);

export default FilterDropdown;
