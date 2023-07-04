

import React, { useRef } from 'react';
import Table3 from '../../../tableAntDesign/Table3';
function PrintFile() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    const printableContent = document.getElementById('content')?.innerHTML;

    if (printableContent) {
      const iframe = iframeRef.current;
      if (iframe) {
        const doc = iframe.contentDocument;
        if (doc) {
          doc.open();
          doc.write(`
            <html>
            <head>
              <style>
                /* CSS cho phần nội dung cần in */
                .printable-content {
                  /* Kiểu dáng, định dạng và bố cục cho phần cần in */
                }
              </style>
            </head>
            <body>
              <div class="printable-content">${printableContent}</div>
              <script>
                window.onload = function() {
                  window.print();
                };
              </script>
            </body>
            </html>
          `);
          doc.close();
        }
      }
    }
  };

  return (
    <div>
      {/* Nội dung của trang */}
      <h1 className="mot">Đây là trang của tôi</h1>
      <p>...</p>

      {/* Nút in */}
      <button onClick={handlePrint}>
        Print
      </button>

      {/* Phần nội dung cần in */}
      <div id="content" className="printable-content">
        <h1 style={{ color: 'black' }}>Đây là phần tôi muốn in</h1>
        <Table3/>
        <p>...</p>
      </div>

      {/* Phần iframe ẩn */}
      <iframe ref={iframeRef} style={{ display: 'none' }} title="Print Frame" />
    </div>
  );
};


export default PrintFile;
