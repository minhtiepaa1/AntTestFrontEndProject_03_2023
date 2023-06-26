import React, { useState, useEffect } from 'react';
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
const Right: React.FC = () => {
    const [rightClickNodeKey, setRightClickNodeKey] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState('');
    const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  
    useEffect(() => {
      const keys: string[] = [];
  
      const traverseTree = (data: any, parentKey?:any) => {
        for (const item of data) {
          const lowerCaseTitle = item.title.toLowerCase();
          const lowerCaseSearchValue = searchValue.toLowerCase();
          const isMatched = lowerCaseTitle.includes(lowerCaseSearchValue);
  
          if (isMatched && parentKey !== '') {
            keys.push(parentKey);
          }
  
          if (item.children) {
            traverseTree(item?.children, item.key);
          }
        }
      };
  
      traverseTree(treeData);
      setExpandedKeys(keys);
    }, [searchValue]);
  
    const handleRightClick = ({ event, node }: { event: any; node: any }) => {
      event.preventDefault();
      setRightClickNodeKey(node.key);
    };
  
    const handleMenuClick = ({ key }: { key: string }) => {
      console.log('key', key);
    };
  
    const handleSearch = (value: string) => {
      setSearchValue(value);
    };
  
    const renderTreeNodes = (data: DataNode[], parentKey = '') =>
      data.map((item: any) => {
        const lowerCaseTitle = item.title.toLowerCase();
        const lowerCaseSearchValue = searchValue.toLowerCase();
        const isMatched = lowerCaseTitle.includes(lowerCaseSearchValue);
  
        if (isMatched) {
          return (
            <TreeNode
              title={item.title}
              key={item.key}
              className={isMatched ? 'matched-node' : ''}
            />
          );
        }
  
        if (item.children) {
          const childNodes = renderTreeNodes(item.children, item.key);
          if (childNodes && childNodes.length > 0) {
            return (
              <TreeNode
                title={item.title}
                key={item.key}
                className={isMatched ? 'matched-node' : ''}
              >
                {childNodes}
              </TreeNode>
            );
          }
        }
  
        return null;
      });
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="edit">Edit</Menu.Item>
          <Menu.Item key="delete">Delete</Menu.Item>
        </Menu>
      );
    
      return (
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Dropdown
            overlay={menu}
            trigger={['contextMenu']}
            open={!!rightClickNodeKey}
            onOpenChange={(visible) => !visible && setRightClickNodeKey(null)}
          >
            <Tree
              expandedKeys={expandedKeys}
              onExpand={(keys) => setExpandedKeys(keys as string[])}
              onRightClick={handleRightClick}
            >
              {renderTreeNodes(treeData)}
            </Tree>
          </Dropdown>
        </div>
      );
    };

export default Right;