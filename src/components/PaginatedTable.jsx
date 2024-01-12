import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useFilters } from 'react-table';

const PaginatedTable = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState('');

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
        
      <div>
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
                borderRadius:pageIndex === index ? '8px' : '0',
                backgroundColor: pageIndex === index ? '#0012FF' : 'transparent',
                color: pageIndex === index ? '#fff' : '#16151C',
                width: pageIndex === index ? '25px' : 'auto',
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
