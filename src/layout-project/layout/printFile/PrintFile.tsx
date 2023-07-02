import React, { useEffect } from 'react';

const PrintFile: React.FC = () => {
  useEffect(() => {
    const handleBeforePrint = () => {
      const nonPrintableElements = document.querySelectorAll('.non-printable');

      nonPrintableElements.forEach((element: Element) => {
        element.classList.add('hidden');
      });
    };

    const handleAfterPrint = () => {
      const nonPrintableElements = document.querySelectorAll('.non-printable');

      nonPrintableElements.forEach((element: Element) => {
        element.classList.remove('hidden');
      });
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  return (
    <div>
      <h1>Đây là trang của tôi</h1>

      <div className="non-printable">
        <p>Đây là một phần không được in</p>
      </div>

      <div>
        <p>Đây là một phần được in</p>
      </div>

      <button onClick={() => window.print()}>Print</button>
    </div>
  );
};

export default PrintFile;
