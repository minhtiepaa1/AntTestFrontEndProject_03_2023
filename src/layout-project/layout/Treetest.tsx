// import React, { useState } from "react";
// import { Tree, Modal, Form, Input, Button, message } from "antd";
// import { v4 as uuidv4 } from "uuid";

// // Khai báo kiểu dữ liệu cho node trong cây
// interface NodeData {
//   key: string;
//   title: string;
//   children?: NodeData[];
// }

// const Treetest: React.FC<{}> = () => {
//   const [treeData, setTreeData] = useState<NodeData[]>([]);
//   const [modalVisible, setModalVisible] = useState<boolean>(false);
//   const [modalTitle, setModalTitle] = useState<string>("");
//   const [modalValue, setModalValue] = useState<string>("");
//   const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

//   // Hàm tìm node dựa trên key
//   const findNodeByKey = (treeData: NodeData[], key: string): NodeData | null => {
//     for (let node of treeData) {
//       if (node.key === key) {
//         return node;
//       }
//       if (node.children) {
//         const foundNode = findNodeByKey(node.children, key);
//         if (foundNode) {
//           return foundNode;
//         }
//       }
//     }
//     return null;
//   };

//   // Hàm cập nhật giá trị của node dựa trên key
//   const updateNodeByKey = (treeData: NodeData[], key: string, value: string): NodeData[] => {
//     return treeData.map((node) => {
//       if (node.key === key) {
//         return { ...node, title: value };
//       }
//       if (node.children) {
//         return { ...node, children: updateNodeByKey(node.children, key, value) };
//       }
//       return node;
//     });
//   };

//   // Hàm xử lý khi nhấn nút Thêm node
//   const handleAddNode = () => {
//     setModalTitle("Thêm node");
//     setModalValue("");
//     setSelectedNode(null);
//     setModalVisible(true);
//   };

//   // Hàm xử lý khi nhấn nút Xóa node
//   const handleDeleteNode = (key: string) => {
//     const updatedTreeData = treeData.filter((node) => node.key !== key);
//     setTreeData(updatedTreeData);
//   };

//   // Hàm xử lý khi nhấn nút Sửa node
//   const handleEditNode = (key: string) => {
//     setModalTitle("Sửa node");
//     const node = findNodeByKey(treeData, key);
//     if (node) {
//       setSelectedNode(node);
//       setModalValue(node.title);
//       setModalVisible(true);
//     }
//   };

//   // Hàm xử lý khi nhấn OK trên Modal
//   const handleModalOk = () => {
//     if (!selectedNode) {
//       // Thêm node mới
//       const newNode: NodeData = {
//         key: uuidv4(), // Tạo key ngẫu nhiên
//         title: modalValue,
//         children: [],
//       };
//       setTreeData([...treeData, newNode]);
//     } else {
//         // Cập nhật giá trị của node
//         const updatedTreeData = updateNodeByKey(treeData, selectedNode.key, modalValue);
//         setTreeData(updatedTreeData);
//       }
//       setModalVisible(false);
//       setModalTitle("");
//       setModalValue("");
//       setSelectedNode(null);
//     };
  
//     // Hàm xử lý khi nhấn Cancel trên Modal
//     const handleModalCancel = () => {
//       setModalVisible(false);
//       setModalTitle("");
//       setModalValue("");
//       setSelectedNode(null);
//     };
  
    // Render giao diện
  //   return (
  //     <div>
  //       <Button onClick={handleAddNode}>Thêm node</Button>
  //       <Tree
  //         treeData={treeData}
  //         onSelect={(keys:any) => {
  //           if (keys.length > 0) {
  //             const node = findNodeByKey(treeData, keys[0]);
  //             if (node) {
  //               setSelectedNode(node);
  //             }
  //           } else {
  //             setSelectedNode(null);
  //           }
  //         }}
  //       />
  //       <Modal
  //         title={modalTitle}
  //         visible={modalVisible}
  //         onOk={handleModalOk}
  //         onCancel={handleModalCancel}
  //       >
  //         <Form>
  //           <Form.Item label="Giá trị node">
  //             <Input
  //               value={modalValue}
  //               onChange={(e) => setModalValue(e.target.value)}
  //             />
  //           </Form.Item>
  //         </Form>
  //       </Modal>
  //     </div>
  //   );
  // };
  // TreeComponent.tsx

import React, { useState } from 'react';
import { Button, Tree, Modal, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { DownOutlined } from '@ant-design/icons';

interface NodeData {
  key: string;
  title: string;
  children?: NodeData[];
}

const  Treetest: React.FC = () => {
  const [treeData, setTreeData] = useState<NodeData[]>([]);
  const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [nodeTitle, setNodeTitle] = useState('');

  // Hàm tìm kiếm node dựa trên key
  const findNodeByKey = (treeData: NodeData[], key: string): NodeData | null => {
    for (let node of treeData) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        const foundNode = findNodeByKey(node.children, key);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  };

  // Hàm xử lý khi chọn node trên cây
  const handleSelect = (keys: any, event: any) => {
    setSelectedNodeKey(keys[0]);
  };

  // Hàm xử lý khi mở rộng node trên cây
  const handleExpand = (keys: any) => {
    console.log('Expanded keys:', keys);
  };

  // Hàm xử lý khi nhấn nút thêm node
  const handleAddNode = () => {
    setVisible(true);
    setModalMode('add');
  };

  // Hàm xử lý khi nhấn nút sửa node
  const handleEditNode = () => {
    if (selectedNodeKey) {
      const foundNode = findNodeByKey(treeData, selectedNodeKey);
      if (foundNode) {
        setNodeTitle(foundNode.title);
        setVisible(true);
        setModalMode('edit');
      }
    }
  };

  // Hàm xử lý khi nhấn nút xóa node
  const handleDeleteNode = () => {
    if (selectedNodeKey) {
      const foundNode = findNodeByKey(treeData, selectedNodeKey);
      if (foundNode) {
        setVisible(true);
        setModalMode('delete');
      }
    }
  };

  // Hàm xử lý khi nhấn nút OK trên Modal
  const handleOk = () => {
    if (modalMode === 'add') {
      // Xử lý thêm node
      if (nodeTitle) {
        const newNode: NodeData = {
          key: uuidv4(),
          title: nodeTitle,
        };
        if (selectedNodeKey) {
          const foundNode = findNodeByKey(treeData, selectedNodeKey);
          if (foundNode) {
            foundNode.children = foundNode.children ? [...foundNode.children, newNode] : [newNode];
          }
        } else {
          setTreeData([...treeData, newNode]);
        }
      }
    }
  }
  // 
  const handleCancel = () => {
    setVisible(false);
    setModalMode(null);
    setNodeTitle('');
  };

  const handleNodeTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodeTitle(e.target.value);
  };
  return (
    <div>
      <Button onClick={handleAddNode}>Thêm node</Button>
      <Button onClick={handleEditNode} disabled={!selectedNodeKey}>
        Sửa node
      </Button>
      <Button onClick={handleDeleteNode} disabled={!selectedNodeKey}>
        Xóa node
      </Button>
      <Tree
        treeData={treeData}
        onSelect={handleSelect}
        onExpand={handleExpand}
        switcherIcon={<DownOutlined />}
      />
      <Modal
        title={modalMode === 'add' ? 'Thêm node' : modalMode === 'edit' ? 'Sửa node' : 'Xóa node'}
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={modalMode === 'delete' ? 'Xóa' : 'OK'}
        cancelText="Hủy"
      >
        {modalMode === 'delete' ? (
          <p>Bạn có chắc chắn muốn xóa node này không?</p>
        ) : (
          <Input value={nodeTitle} onChange={handleNodeTitleChange} />
        )}
      </Modal>
    </div>
  );
}
export default Treetest;
