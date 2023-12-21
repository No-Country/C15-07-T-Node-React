import { Link } from 'react-router-dom';
import { PAYMENTS } from '../../router/paths';

function TablePayments() {
  const data = [
    {
      id: '5146846548465',
      name: 'Jane Cooper',
      detail: 'Mensualidad',
      month: 'Diciembre',
      status: 'Unpaid',
      amount: 11234,
    },
    {
      id: '5467319467348',
      name: 'Wade Warren',
      detail: 'Luz y Agua',
      month: 'Diciembre',
      status: 'Unpaid',
      amount: 11159,
    },
    {
      id: '1345705945446',
      name: 'Brooklyn Simmons',
      detail: 'Mensualidad',
      month: 'Noviembre',
      status: 'Paid',
      amount: 10483,
    },
    {
      id: '5440754979777',
      name: 'Dianne Russell',
      detail: 'Luz y Agua',
      month: 'Noviembre',
      status: 'Paid',
      amount: 8084,
    },
    {
      id: '1243467984543',
      name: 'Esther Howard',
      detail: 'Mensualidad',
      month: 'Octubre',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '8454134649707',
      name: 'Leslie Alexander',
      detail: 'Luz y Agua',
      month: 'Octubre',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '2130164040451',
      name: 'Jenny Wilson',
      detail: 'Mensualidad',
      month: 'Septiembre',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '0439104645404',
      name: 'Guy Hawkins',
      detail: 'Luz y Agua',
      month: 'Septiembre',
      status: 'Paid',
      amount: '500.00',
    },
  ];

  return (
    <section className='min-w-[350px] rounded-[10px] border border-gray-200 bg-white px-6 py-4'>
      <div className='flex flex-col'>
        <h3 className='text-base font-bold text-gray-900'>
          Pagos recién recibidos
        </h3>
        <p className='text-xs text-gray-500'>Últimos pagos recibidos</p>
      </div>
      <table className='min-w-full bg-white'>
        <tbody>
          {data?.length > 0 &&
            data.map((row) => (
              <tr key={row.id} className=''>
                <td className='p-2'>
                  <p className='mb-1 text-xs font-bold text-gray-900'>
                    {row.detail}
                  </p>
                  <p className='text-xs font-medium text-gray-500'>
                    {row.month}
                  </p>
                </td>
                <td className='px-2 py-4'>
                  <div
                    className={`flex items-center justify-start gap-2 rounded-full px-[10px] py-1 ${
                      row.status === 'Paid' ? 'bg-green-100' : 'bg-yellow-100'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        row.status === 'Paid' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    ></span>
                    <p
                      className={`text-xs font-medium ${
                        row.status === 'Paid'
                          ? 'text-green-900'
                          : 'text-yellow-900'
                      }`}
                    >
                      {row.status === 'Paid' ? 'Pagado' : 'Pendiente'}
                    </p>
                  </div>
                </td>
                <td className='flex items-center justify-center p-2 text-center'>
                  <p className='mb-1 text-sm font-medium text-gray-900'>
                    ${row.amount}
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link to={PAYMENTS}>
        <button className='mt-3 flex gap-2 text-xs font-bold text-gray-500'>
          Ver todos los Pagos
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <g opacity='0.5'>
              <path
                d='M5.25 2.91671L9.33333 7.00004L5.25 11.0834'
                stroke='#151518'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        </button>
      </Link>
    </section>
  );
}
export default TablePayments;
