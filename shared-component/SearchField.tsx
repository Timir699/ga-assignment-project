import { CopyOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import React from 'react';

const searchValues = (value: any) => {
    console.log(value);
    
}

const SearchField: React.FC = () => (
    <div className="site-input-group-wrapper">
        <Input.Search
            allowClear
            style={{ width: '100%' }}
            onSearch={searchValues}
            enterButton={true}
        />
    </div>
);

export default SearchField;
