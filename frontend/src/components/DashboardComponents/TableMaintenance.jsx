import { Link } from 'react-router-dom';
import { MAINTENANCE } from '../../router/paths';

function TableMaintenance() {
  const data = [
    {
      id: '5146846548465',
      name: 'Jane Cooper',
      date: '12/08/2023',
      maintenance: 'Cambio de bombillo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Luis',
      status: 'Pending',
      apartment: 1,
    },
    {
      id: '5467319467348',
      name: 'Wade Warren',
      date: '12/06/2023',
      maintenance: 'Arreglo de ventana',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Carlos',
      status: 'Pending',
      apartment: 8,
    },
    {
      id: '1345705945446',
      name: 'Esther Howard',
      date: '12/04/2023',
      maintenance: 'Gotera en lavatorio',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Roberto',
      status: 'Completed',
      apartment: 6,
    },
    {
      id: '5440754979777',
      name: 'Cameron Williamson',
      date: '12/01/2023',
      maintenance: 'Cambio de cerrojo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Roberto',
      status: 'Completed',
      apartment: 3,
    },
    {
      id: '1243467984543',
      name: 'Brooklyn Simmons',
      date: '03/12/2023',
      maintenance: 'Cambio de bombillo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Carlos',
      status: 'Pending',
      apartment: 2,
    },
    {
      id: '8454134649707',
      name: 'Leslie Alexander',
      date: '05/12/2023',
      maintenance: 'Arreglo de puerta',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Luis',
      status: 'Completed',
      apartment: 7,
    },
    {
      id: '2130164040451',
      name: 'Jenny Wilson',
      date: '02/12/2023',
      maintenance: 'Gotera en ventana',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Roberto',
      status: 'Completed',
      apartment: 4,
    },
    {
      id: '0439104645404',
      name: 'Guy Hawkins',
      date: '07/12/2023',
      maintenance: 'Cambio de bombillo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Luis',
      status: 'Pending',
      apartment: 5,
    },
  ];
  const renderData = data.slice(0, 4);

  const calcularDias = (date) => {
    const fechaActual = new Date();
    console.log(fechaActual);
    const fechaIngresada = new Date(date);
    console.log(fechaIngresada);
    const diferencia = fechaActual.getTime() - fechaIngresada.getTime();
    return Math.ceil(diferencia / (1000 * 3600 * 24));
  };

  return (
    <section className='w-[60%] rounded-[10px] border border-gray-200 bg-white pt-4'>
      <div className='flex items-start justify-between px-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-base font-bold text-gray-900'>
            Solicitudes recientes de mantenimiento
          </h3>
          <h4 className='text-xs font-normal text-gray-500'>
            Aquí podras encontrar las ultimas solicitudes de mantenimiento
          </h4>
        </div>
        <Link to={MAINTENANCE}>
          <button className='flex h-5 items-center justify-center text-xs font-medium text-gray-500'>
            Ver todas las solicitudes
            <svg
              width='11'
              height='12'
              viewBox='0 0 11 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4.125 2.79171L7.33333 6.00004L4.125 9.20837'
                stroke='#828282'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </Link>
      </div>
      <table className='min-w-full bg-white'>
        <tbody>
          {renderData?.length > 0 &&
            renderData.map((row) => (
              <tr key={row.id} className='border-b-2 border-neutral-100'>
                <td className='inline-block px-2 py-4'>
                  <div
                    className={`flex items-center justify-start gap-2 rounded-full px-[10px] py-1 ${
                      row.status === 'Completed'
                        ? 'bg-green-100'
                        : 'bg-yellow-100'
                    }`}>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        row.status === 'Completed'
                          ? 'bg-green-500'
                          : 'bg-yellow-500'
                      }`}></span>
                    <p
                      className={`text-xs font-medium ${
                        row.status === 'Completed'
                          ? 'text-green-900'
                          : 'text-yellow-900'
                      }`}>
                      {row.status}
                    </p>
                  </div>
                </td>
                <td className='px-2 py-4 text-xs font-bold text-gray-900'>
                  <p className='mb-1 text-xs font-bold text-gray-900'>
                    {row.maintenance}
                  </p>
                  <p className='text-xs font-medium text-gray-500'>
                    Hace {calcularDias(row.date)} días
                  </p>
                </td>
                <td className='px-2 py-4 '>
                  <p className='mb-1 text-xs font-bold text-gray-900'>{`Apartamento ${row.apartment}`}</p>
                  <p className='text-xs font-medium text-gray-500'>
                    {row.date}
                  </p>
                </td>
                <td className='px-2 py-4'>
                  <p className='mb-1 text-xs font-bold text-gray-900'>
                    Encargado
                  </p>
                  <p className='text-xs font-medium text-gray-500'>
                    {row.portero}
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
export default TableMaintenance;
