import React from 'react';

const PrinFileButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {/* Nội dung của trang */}
      <h1 className='mot'>Đây là trang của tôi</h1>
      <p>...</p>

      {/* Nút in */}
      <button onClick={handlePrint}>
        Print
      </button>

      {/* CSS để chỉ in phần nội dung cần thiết */}
      <style>
        {`
          @media print {
            /* Ẩn các phần không muốn in */
            // body * {
            //   visibility: hidden;
            // }
            .mot{
                visibility: hidden;
            }
          
            /* Hiển thị phần nội dung cần in */
            .printable-content {
              visibility: visible;
            }
          }
        `}
      </style>

      {/* Phần nội dung cần in */}
      <div className="printable-content">
        <h1 style={{color:"black"}}>Đây là phần tôi muốn in</h1>
        <p>...</p>
      </div>
    </div>
  );
};

export default PrinFileButton;