import { useState } from 'react';
import { Tree, Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { DataNode } from 'antd/lib/tree';

const { TreeNode } = Tree;

const treeData: DataNode[] = [
  {
    title: 'Node 1',
    key: '0-0',
    children: [
      {
        title: 'Child Node 1',
        key: '0-0-0',
        children: [
          {
            title: 'Child Node 1-1',
            key: '0-0-0-0',
            isLeaf: true,
          },
          {
            title: 'Child Node 1-2',
            key: '0-0-0-1',
            isLeaf: true,
          },
        ],
      },
      {
        title: 'Child Node 2',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'Node 2',
    key: '0-1',
    isLeaf: true,
  },
];

const ClickRight: React.FC= () => {
  const [rightClickNodeKey, setRightClickNodeKey] = useState<string | null>(null);

  const handleRightClick = ({ event, node }: { event: any; node:any }) => {
    console.log("ri",node.key )
    event.preventDefault();
    setRightClickNodeKey(node.key);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    // do something with the clicked menu item
    console.log("key",key)
  };

  const renderTreeNodes = (data: DataNode[]) =>
    data.map((item:any) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} key={item.key} />;
    });

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={['contextMenu']}
      open={!!rightClickNodeKey}
      onOpenChange={(visible) => !visible && setRightClickNodeKey(null)}
    >
      <Tree onRightClick={handleRightClick}>{renderTreeNodes(treeData)}</Tree>
    </Dropdown>
  );
};

export default ClickRight;