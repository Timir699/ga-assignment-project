import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DownOutlined } from '@ant-design/icons';

const handleClick = ({ key }: any) => {
  console.log(key);
};
const menu = (
  <Menu
    onClick={handleClick}
    items={[
      {
        key: '1',
        label: <a>all</a>,
      },
      {
        key: '2',
        label: <a>Featured</a>,
      },
    ]}
  />
);

const FilterDropdown: React.FC = () => (
  <Dropdown trigger={['click']} overlay={menu} placement="bottomRight" arrow>
    <Button
      style={{
        border: '2px solid #262262',
        outline: 'none',
        borderRadius: '5px',
        fontWeight: 700,
        marginRight: '15px',
      }}
    >
      All <DownOutlined />
    </Button>
  </Dropdown>
);

export default FilterDropdown;
