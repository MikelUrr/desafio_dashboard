import React, { useMemo, useState } from 'react';
import { useTable, useFilters } from 'react-table';

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

  return (
    <div className="table-container">
      <div>
        <label>
          Filtrar por nombre:{' '}
          <input
            value={filterInput}
            onChange={(e) => {
              const value = e.target.value;
              setFilter('name', value);
              setFilterInput(value);
            }}
          />
        </label>
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
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
