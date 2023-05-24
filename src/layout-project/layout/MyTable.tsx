import { Table } from 'antd';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

const MyTable:React.FC = () => {
  const columns = [    {      title: 'Name',      dataIndex: 'name',      key: 'name',    },    {      title: 'Age',      dataIndex: 'age',      key: 'age',    },    {      title: 'Address',      dataIndex: 'address',      key: 'address',    },  ];

  const dataSource: DataItem[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  // const MiddleHeader = ({ columns }: { columns: any[] }) => (
    const MiddleHeader = () => (
    <thead className="ant-table-thead-middle">
      <tr>
        {columns.map((col) => (
          <th key={col.key} className="ant-table-cell ant-table-header-column">
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
  );

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      summary={() => (
        <Table.Summary.Row>
          <Table.Summary.Cell index={0} colSpan={2}>
            Total
          </Table.Summary.Cell>
          <Table.Summary.Cell index={1}>94</Table.Summary.Cell>
        </Table.Summary.Row>
      )}
      components={{
        header: {
          wrapper: MiddleHeader,
        },
      }}
      onHeaderRow={() => ({
        className: 'ant-table-thead-middle',
      })}
    />
  );
};

export default MyTable;
