import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useFilters } from 'react-table';
import * as XLSX from 'xlsx';
const PaginatedTable = ({ columns, data, typeData }) => {
  const [filterInput, setFilterInput] = useState('');


  const downloadDataAsExcel = () => {
    try {
      // Crear una copia profunda de los datos para evitar modificar el estado original
      const cleanedData = JSON.parse(JSON.stringify(data));

      // Definir los campos que deseas excluir (en este caso, el campo 'userId')
      const excludedFields = ['userId', "_id", "password", "userActive"];

      // Iterar sobre los datos y eliminar campos excluidos
      cleanedData.forEach(item => {
        excludedFields.forEach(excludedField => {
          delete item[excludedField];
        });

        // Además, puedes realizar otras limpiezas específicas según tus necesidades
        // Por ejemplo, reemplazar saltos de línea con espacio en blanco
        Object.keys(item).forEach(key => {
          if (typeof item[key] === 'string') {
            item[key] = item[key].replace(/\n/g, ' ');
          }
        });
      });

      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(cleanedData);

      XLSX.utils.book_append_sheet(workbook, worksheet, 'InfoTrabajadores');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(dataBlob);
      const timestamp = Date.now();
      const fileName = `trabajadoresinfo_${timestamp}.xlsx`
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
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    pageOptions,
    pageCount,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    setFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    usePagination
  );

  const memoizedColumns = useMemo(() => columns, [columns]);

  return (
    <div className='table-container'>

      <div className='header-search-container' >
        <div className='search-container'>
          <img src="/search.svg" alt="busqueda" />
          <input className='search-input' placeholder='Busqueda'
            value={filterInput}
            onChange={(e) => {
              const value = e.target.value;
              setFilter('name', value);
              setFilterInput(value);
              gotoPage(0); // Ir a la primera página cuando se aplica o borra el filtro
            }}
          />

        </div>
        <button className="download-button" onClick={downloadDataAsExcel}>
          <img src="/download.svg" alt="descargar" />
        </button>
      </div>

      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            const lastCell = row.cells[row.cells.length - 1];
            const status = String(lastCell.value);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps({
                      className: index === row.cells.length - 1 ? `status-${status.toLowerCase()}` : '',
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='footer-table'>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((pageSizeOption) => (
            <option key={pageSizeOption} value={pageSizeOption}>
              {pageSizeOption}
            </option>
          ))}
        </select>
        <div className='page-info'>
          <button className='button-flecha' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <img src="/arrow-right.svg" alt="flecha" />
          </button>

          <div className='num-page'>

            {pageOptions.map((page, index) => (
              <span
                key={index}
                onClick={() => gotoPage(index)}
                style={{
                  cursor: 'pointer',
                  margin: '0 5px',
                  fontWeight: pageIndex === index ? 'bold' : 'normal',
                  borderRadius: pageIndex === index ? '8px' : '0',
                  backgroundColor: pageIndex === index ? '#0012FF' : 'transparent',
                  color: pageIndex === index ? '#fff' : '#16151C',
                  width: pageIndex === index ? '35px' : 'auto',
                }}
              >
                {index + 1}
              </span>
            ))}
          </div>

          <button className='button-flecha' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <img src="/arrow-left.svg" alt="flecha" />
          </button>
        </div>


      </div>
    </div>
  );
};

export default PaginatedTable;
