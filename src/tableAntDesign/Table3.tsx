import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface DataPart {
  id: number;
  name: string;
}

interface DataProject {
  projectId: number;
  name: string;
  value: number;
  childprojects: DataProject[];
}

interface DataTable {
  group: string;
  part: DataPart;
  projects: DataProject[];
}

const dataTables: DataTable[] = [
  {
    group: "g1",
    part: { id: 1, name: "name1" },
    projects: [
      {
        projectId: 11,
        name: "name2",
        value: 112,
        childprojects: []
      }
    ]
  },
  {
    group: "g1",
    part: { id: 1, name: "name1" },
    projects: [
      {
        projectId: 11,
        name: "name2",
        value: 112,
        childprojects: [
          {
            projectId: 1121,
            name: "name2",
            value: 1122,
            childprojects: []
          }
        ]
      },
      {
        projectId: 12,
        name: "name2",
        value: 113,
        childprojects: []
      }
    ]
  },
];

const Table3 = () => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [tableData, setTableData] = useState<ExpandedDataTable[]>([]);

  interface ExpandedDataTable extends DataTable {
    key: string;
    expanded: boolean;
  }

  const renderData = (data: DataProject[], group: string, part: DataPart, parentKey: string) => {
    data.forEach((project, index) => {
      const rowKey = `${parentKey}-${index}`;
      const expanded = expandedRows.includes(rowKey);

      const row: ExpandedDataTable = {
        key: rowKey,
        group,
        part,
        projects: [project],
        expanded
      };

      setTableData((prevData) => [...prevData, row]);

      if (project.childprojects.length > 0) {
        renderData(project.childprojects, group, part, rowKey);
      }
    });
  };

  const toggleExpand = (rowKey: string) => {
    const expanded = expandedRows.includes(rowKey);
    const newExpandedRows = expanded ? expandedRows.filter(row => row !== rowKey) : [...expandedRows, rowKey];
    setExpandedRows(newExpandedRows);
  };

  const columns = [
    {
      title: 'Expand',
      dataIndex: 'expanded',
      key: 'expanded',
      render: (expanded: boolean, record: ExpandedDataTable) => (
        <Button type="text" icon={expanded ? <MinusOutlined /> : <PlusOutlined />} onClick={() => toggleExpand(record.key)} />
      )
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Part ID',
      dataIndex: 'part',
      key: 'part',
      render: (part: DataPart) => part.id,
    },
    {
      title: 'Part Name',
      dataIndex: 'part',
      key: 'partName',
      render: (part: DataPart) => part.name,
    },
    {
      title: 'Project ID',
      dataIndex: 'projects',
      key: 'projectId',
      render: (projects: DataProject[]) => projects[0].projectId,
    },
    {
      title: 'Project Name',
      dataIndex: 'projects',
      key: 'projectName',
      render: (projects: DataProject[]) => projects[0].name,
    },
    {
      title: 'Value',
      dataIndex: 'projects',
      key: 'value',
      render: (projects: DataProject[]) => projects[0].value,
    },
  ];

  const childColumns = [
    {
      title: 'Project ID',
      dataIndex: 'projectId',
      key: 'projectId',
    },
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'projectName',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const expandedRowRender = (record: ExpandedDataTable) => (
    <Table
      dataSource={record.projects[0].childprojects}
      columns={childColumns}
      pagination={false}
    />
  );



  const ExpandableRow = ({ children, ...restProps }: any) => {
    const record = tableData.find(row => row.key === restProps['data-row-key']);
    return (
      <tr {...restProps}>
        <td colSpan={columns.length}>
          {record && record.projects[0].childprojects.length > 0 && (
            <Table
              dataSource={record.projects}
              columns={childColumns}
              pagination={false}
            />
          )}
        </td>
      </tr>
    );
  };

  // const components = {
  //   body: {
  //     row: ExpandableRow,
  //   },
  // };

  React.useEffect(() => {
    dataTables.forEach((table) => {
      renderData(table.projects, table.group, table.part, table.group);
    });
  }, []);

  return (
    <Table
      dataSource={tableData}
      columns={columns}
      expandable={{
        expandedRowRender,
        // expandRowByClick: true,
        expandIconColumnIndex: 2,
        // components,
      }}
    />
  );
};


export default Table3;