import { useDownloadPdf } from '../../store/useDownloadPdf';
import { useReactToPrint } from 'react-to-print';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useUserStore } from '../../store/userStore';
import { payments as data } from '../../../mocks/data';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className='rounded-lg border border-accent bg-white p-2'>
        <p>{payload[0]?.payload.month}</p>
        <p>{`$ ${payload[0]?.value}`}</p>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default function PaymentsChart() {
  const [payments, setPayments] = useState(data);
  const [activeMonths, setActiveMonths] = useState(12);
  const tableRef = useRef(null);
  const isPrinting = useDownloadPdf((state) => state.isPrinting);
  const setIsPrinting = useDownloadPdf((state) => state.setIsPrinting);

  function handleButtonPrint() {
    if (!isPrinting) {
      setIsPrinting(true);
    }
  }

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

  function handleShowMonths(array, n) {
    if (n > array.length) {
      console.warn(
        'El número n es mayor que la longitud del array. Devolviendo el array completo.',
      );
      setPayments([...array]);
    }
    setPayments([...array.slice(-n)]);
    setActiveMonths(n);
  }
  const loading = useUserStore((state) => state.loading);
  return (
    <div
      className='relative min-h-[160px] w-full rounded-[10px] border border-gray-200 bg-white p-4 sm:h-[340px]'
      ref={tableRef}
    >
      <style>{getPageMargins()}</style>
      <div className='absolute z-20 flex w-full items-center justify-between gap-4'>
        <h3 className='text-base font-bold text-gray-900'>
          Reporte de ingresos
        </h3>
        <div className='z-10 flex gap-2'>
          <button
            onClick={() => handleShowMonths(data, 12)}
            className={`btn btn-ghost ${
              activeMonths === 12 ? 'btn-outline hover:btn-secondary' : ''
            } btn-sm font-bold text-gray-500`}
          >
            12 Meses
          </button>
          <button
            onClick={() => handleShowMonths(data, 6)}
            className={`btn btn-ghost ${
              activeMonths === 6 ? 'btn-outline hover:btn-secondary' : ''
            } btn-sm font-bold text-gray-500`}
          >
            6 Meses
          </button>
          <button className='btn  btn-ghost btn-sm font-bold text-gray-500'>
            30 Días
          </button>
        </div>
        <button className='btn btn-ghost btn-sm mr-8'>
          <svg
            width='17'
            height='16'
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.5 10V12.6667C14.5 13.0203 14.3595 13.3594 14.1095 13.6095C13.8594 13.8595 13.5203 14 13.1667 14H3.83333C3.47971 14 3.14057 13.8595 2.89052 13.6095C2.64048 13.3594 2.5 13.0203 2.5 12.6667V10'
              stroke='#191D23'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5.16666 6.66666L8.49999 9.99999L11.8333 6.66666'
              stroke='#191D23'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M8.5 10V2'
              stroke='#191D23'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='hidden xl:inline' onClick={handleButtonPrint}>
            Exportar PDF
          </span>
        </button>
      </div>
      {loading ? (
        <div className='flex h-full w-full items-center justify-center'>
          Cargando
          <span className='loading loading-spinner loading-md ml-4 pt-24'></span>
        </div>
      ) : (
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            data={payments}
            vertical={false}
            width={500}
            height={400}
            margin={{
              top: 60,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              fillOpacity={0.16}
              stroke='#e0e8e0'
            />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ stroke: '#9B9EAC' }}
              interval='preserveStartEnd'
            />
            <Tooltip content={CustomTooltip} />
            <Area
              type='monotone'
              dataKey='paid'
              stroke='#094067'
              strokeWidth={2}
              fill='#d8eefe'
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
