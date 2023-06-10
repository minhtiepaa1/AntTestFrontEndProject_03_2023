import React from 'react';
import { Table } from 'antd';
import styles from "./Table.module.css"

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  childrenMot?: DataType[];
}

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    childrenMot: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        childrenMot: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        childrenMot: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            childrenMot: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

const columns = [
  { title: 'Key', dataIndex: 'key', key: 'key' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

const TabletEST: React.FC = () => {
  const tableProps = {
    dataSource: data,
    columns: columns,
    expandable: { childrenColumnName: 'childrenMot' },
  };
  const constainClassName  = [
    styles['ant-table-wrapper'],
    styles['table'],
    styles['ant-table-thead'],
  ].join(' ');

  return <Table 
  className={constainClassName}
 {...tableProps} 
 
  />
};


export default TabletEST;