import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import Link from 'next/link';
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
    render: (name: any, record: any) => (
      <Link href={`/library/all/${record?.key}`}>
        <a className="text-blue-500 text-shadow-hover quote-no-link">{name}</a>
      </Link>
    ),
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
  {
    title: 'Address',
    dataIndex: 'address',
    width: 200,
  },
];

const data: DataType[] = [];

for (let i = 0; i < 50; i++) {
  data.push({
    key: i,
    name: `Edward King`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const PublicListView: React.FC = () => (
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

export default PublicListView;
