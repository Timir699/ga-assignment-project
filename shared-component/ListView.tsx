import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 200,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 200,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 200,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const ListView: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ y: 600 }}
    pagination={{
      defaultPageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30'],
    }}
  />
);

export default ListView;
