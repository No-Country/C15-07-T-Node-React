import { useEffect, useRef } from 'react';
import { useDownloadPdf } from '../../store/useDownloadPdf';
import { useReactToPrint } from 'react-to-print';
import PropTypes from 'prop-types';

function Table({ columns = [], data = [] }) {
  const tableRef = useRef(null);
  const isPrinting = useDownloadPdf((state) => state.isPrinting);
  const setIsPrinting = useDownloadPdf((state) => state.setIsPrinting);
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  useEffect(() => {
    if (isPrinting) {
      handlePrint();
      setIsPrinting(false);
    }
  }, [isPrinting, setIsPrinting, handlePrint]);

  const getPageMargins = () => {
    return `@page { margin: 12px !important; };`;
  };

  return (
    <div className='overflow-x-auto' ref={tableRef}>
      <style>{getPageMargins()}</style>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={`table-header-${column.field}`}
                className='border-b-2 border-neutral-100 px-2 py-2 text-left text-sm font-semibold text-neutral-500'
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length === 0 && (
            <tr>
              <td>No existe el usuario buscado</td>
            </tr>
          )}
          {data?.length > 0 &&
            data.map((row, rIndex) => (
              <tr key={`table-row-${row.id || rIndex}`}>
                {columns.map((column) => (
                  <td
                    key={`table-row-column-${row.id || rIndex}-${column.field}`}
                    className='border-b-2 border-neutral-100 px-2  py-2 text-base font-normal text-neutral-800'
                  >
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

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};
