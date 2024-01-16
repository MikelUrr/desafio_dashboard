import React, { useMemo } from 'react';
import * as XLSX from 'xlsx';

const BasicTable = ({ columns, data }) => {
    const downloadDataAsExcel = () => {
        try {
          const cleanedData = JSON.parse(JSON.stringify(data));
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.json_to_sheet(cleanedData);
          XLSX.utils.book_append_sheet(workbook, worksheet, 'InfoTrabajadores');
          const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
          const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = URL.createObjectURL(dataBlob);
          const timestamp = Date.now();
          const fileName = `trabajadoresinfo_${timestamp}.xlsx`;
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Error downloading data as Excel:', error);
        }
      };
    
      const memoizedColumns = useMemo(() => columns, [columns]);
    
      return (
        <div className='table-container'>
          <div>
            {/* <button className="download-button" onClick={downloadDataAsExcel}>
              Download Excel
            </button> */}
          </div>
    
          <table className="table">
            <thead>
              <tr>
                {memoizedColumns.map((column) => (
                  <th key={column.Header}>{column.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {memoizedColumns.map((column) => (
                    <td
                      key={column.Header}
                      style={{
                        fontWeight:
                          (column.Header === 'Emocion Compleja' || column.Header === 'Rendimiento') &&
                          typeof row[column.accessor] === 'number' &&
                          row[column.accessor] >= 0
                            ? 'bold'
                            : 'normal',
                      }}
                    >
                      {column.Header === 'Emocion Compleja' || column.Header === 'Rendimiento'
                        ? <strong>{row[column.accessor]}</strong>
                        : row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    

export default BasicTable;
