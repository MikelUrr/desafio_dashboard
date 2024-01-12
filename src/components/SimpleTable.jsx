import React, { useMemo, useState } from 'react';
import { useTable, useFilters } from 'react-table';
import { useNavigate } from 'react-router-dom';

const SimpleTable = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState('');

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows, 
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );

  const memoizedColumns = useMemo(() => columns, [columns]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/personas');
  }

  return (
    <div className="Simpletable-container">
      <div className='Simpletable-container-head'>  
          <h3 className='simpletable-label'>Asistencia</h3>
          <button className='simpletable-button'onClick={handleClick}>Ver todos</button>
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
          {rows.map((row) => {
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
    </div>
  );
};

export default SimpleTable;
