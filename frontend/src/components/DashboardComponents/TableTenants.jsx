import { Link } from 'react-router-dom';
import { PAYMENTS } from '../../router/paths';

function TableTenants() {
  const data = [
    {
      id: '5146846548465',
      name: 'Jane Cooper',
      email: 'w.lawson@example.com',
      profile:
        'https://img.freepik.com/foto-gratis/feliz-mujer-joven-al-aire-libre_23-2147892780.jpg?size=626&ext=jpg',
      date: '2/19/21',
      status: 'Paid',
      amount: 11234,
    },
    {
      id: '5467319467348',
      name: 'Wade Warren',
      email: 'dat.roberts@example.com',
      profile:
        'https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?size=626&ext=jpg',
      date: '5/7/16',
      status: 'Paid',
      amount: 11159,
    },
    {
      id: '1345705945446',
      name: 'Brooklyn Simmons',
      email: 'jgraham@example.com',
      profile:
        'https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?size=626&ext=jpg',
      date: '9/18/16',
      status: 'Unpaid',
      amount: 10483,
    },
    {
      id: '5440754979777',
      name: 'Dianne Russell',
      email: 'curtis.d@example.com',
      profile:
        'https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg?size=626&ext=jpg',
      date: '2/11/12',
      status: 'Paid',
      amount: 8084,
    },
    {
      id: '1243467984543',
      name: 'Esther Howard',
      email: 'w.lawson@example.com',
      date: '9/18/16',
      status: 'Unpaid',
      amount: '500.00',
    },
    {
      id: '8454134649707',
      name: 'Leslie Alexander',
      email: 'w.lawson@example.com',
      date: '1/28/17',
      status: 'Unpaid',
      amount: '500.00',
    },
    {
      id: '2130164040451',
      name: 'Jenny Wilson',
      email: 'w.lawson@example.com',
      date: '5/27/15',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '0439104645404',
      name: 'Guy Hawkins',
      email: 'w.lawson@example.com',
      date: '8/2/19',
      status: 'Paid',
      amount: '500.00',
    },
  ];

  const renderData = data.slice(0, 4);
  return (
    <section className='rounded-[10px] border border-gray-200 bg-white px-6 pt-4'>
      <div className='flex flex-col'>
        <h3 className='text-base font-bold text-gray-900'>
          Pagos recién recibidos
        </h3>
        <p className='text-xs text-gray-500'>Últimos pagos recibidos</p>
      </div>
      <table className='min-w-full bg-white'>
        <tbody>
          {renderData?.length > 0 &&
            renderData.map((row) => (
              <tr key={row.id} className=''>
                <td className='p-2'>
                  <img
                    className='h-9 w-9 rounded-full object-cover'
                    src={row.profile}
                  />
                </td>
                <td className='p-2'>
                  <p className='mb-1 text-sm font-bold text-gray-900'>
                    {row.name}
                  </p>
                  <p className='text-sm font-medium text-gray-500'>
                    {row.email}
                  </p>
                </td>
                <td className='flex items-start p-2'>
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
          Ver todos los inquilinos
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'>
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
export default TableTenants;
