function Table({ columns = [], data = [] }) {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={`table-header-${column.field}`}
                className='border-b-2 border-neutral-100 px-2 py-2 text-left text-sm font-semibold text-neutral-500'>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length === 0 && <tr>No data</tr>}
          {data?.length > 0 &&
            data.map((row, rIndex) => (
              <tr key={`table-row-${row.id || rIndex}`}>
                {columns.map((column) => (
                  <td
                    key={`table-row-column-${row.id || rIndex}-${column.field}`}
                    className='border-b-2 border-neutral-100 px-2  py-2 text-base font-normal text-neutral-800'>
                    {column.template ? column.template(row) : row[column.field]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
