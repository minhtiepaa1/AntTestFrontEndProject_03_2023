import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';
import "./MoreTable.css"

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const MoreTable: React.FC = () => {

//   const expandedRowRender = () => {
//     const columns: TableColumnsType<ExpandedDataType> = [
//       { title: 'Date', dataIndex: 'date', key: 'date' },
//       { title: 'Name', dataIndex: 'name', key: 'name' },
//       {
//         title: 'Status',
//         key: 'state',
//         render: () => <Badge status="success" text="Finished" />,
//       },
//       { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
//       {
//         title: 'Action',
//         dataIndex: 'operation',
//         key: 'operation',
//         render: () => (
//           <Space size="middle">
//             <a>Pause</a>
//             <a>Stop</a>
//             <Dropdown menu={{ items }}>
//               <a>
//                 More <DownOutlined />
//               </a>
//             </Dropdown>
//           </Space>
//         ),
//       },
//     ];

//     const data = [];
//     for (let i = 0; i < 3; ++i) {
//       data.push({
//         key: i.toString(),
//         date: '2014-12-24 23:12:00',
//         name: 'This is production name',
//         upgradeNum: 'Upgraded: 56',
//       });
//     }
//     return <Table columns={columns} dataSource={data} pagination={false} />;
//   };

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name', render: (text) => <span style={{ backgroundColor: 'blue' }}>{text}</span>, },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screen',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }
  const expandedRowRender2 = () => {
    return <Table columns={columns} dataSource={data} pagination={false} bordered={true}/>;
  };
  const expandedRowRender = () => {
    return <Table 
    // expandable={{ expandedRowRender2, defaultExpandedRowKeys: ['0'] }}
    columns={columns} dataSource={data} pagination={false} bordered={true}/>;
  };

  interface DataPart{
    id:number,
    name:string,
  }
  interface DataProject{
    projectId:number,
    name:string,
    value:number,
    childprojects:DataProject[]
  }
  interface DataTable{
    group:string;
    part: DataPart;
    projects: DataProject[]
  }
 const dataTables: DataTable[] = [
  {
    group:"g1",
    part: {id: 1, name: "name1"},
    projects: [{
      projectId:11,
      name:"name2",
      value:112,
      childprojects:[]
    }]
  },
  {
    group:"g1",
    part: {id: 1, name: "name1"},
    projects: [{
      projectId:11,
      name:"name2",
      value:112,
      childprojects:[{
        projectId:1121,
        name:"name2",
        value:1122,
        childprojects:[]
      }]
    },
    {
      projectId:12,
      name:"name2",
      value:113,
      childprojects:[]
    },
  ]
  },
 ]
  return (
    <>
     <style>{`
        .ant-table td, .ant-table th {
          font-family: 'Arial', sans-serif;
          font-size:16px;
          /* thay đổi font chữ tại đây */
        }
        .ant-table-bordered .ant-table-cell {
          // border: 1px solid #d9d9d9 !important;
          border: 1px solid red !important;
          padding: 8px 16px;
        }
      `}</style>

      <Table
      className='moretable'
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        dataSource={data}
        bordered={true}
      />
      {/* <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        dataSource={data}
        size="middle"
      />
      <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        dataSource={data}
        size="small"
        bordered={true}
      /> */}
    </>
  );
};

export default MoreTable;
