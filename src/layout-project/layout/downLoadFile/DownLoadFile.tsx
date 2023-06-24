import useHttp  from 'use-http';

const DownLoadFile = () => {
  const { get, loading, response } = useHttp('<your_api_url>', { responseType: 'blob' });

  const handleDownload = async () => {
    try {
      const data = await get();
      downloadFile(data, 'file_name.extension');
    } catch (error) {
      console.error('Lỗi:', error);
    }
  };

  const downloadFile = (blob: Blob, fileName: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} disabled={loading}>
      Tải xuống
    </button>
  );
};
export default DownLoadFile;