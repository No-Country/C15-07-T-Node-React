import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AMENITIES, MAINTENANCE, TENANTS, SUGGS } from '../../router/paths';
import { useSearch } from '../../store/useSearch';
import ModalComponent from '../Modal/ModalComponent';
import useFormData from '../../store/useFortData';

function HeaderBottom() {
  const location = useLocation();
  const [headerContent, setHeaderContent] = useState('');
  const { searchValue, setSearchValue } = useSearch();

  const formData = useFormData((state) => state.formData);
  const {
    sendMaintenanceRequest,
    sendAmenitiesRequest,
    sendComplaintsSuggestionsRequest,
  } = useFormData();

  useEffect(() => {
    const getTitleAndSubtitle = () => {
      switch (location.pathname) {
        case SUGGS:
          return {
            title: 'Quejas y Sugerencias',
            subtitle: 'Gestión de Quejas y Sugerencias',
            action: '+ Crear observacion',
          };
        case TENANTS:
          return {
            title: 'Inquilinos',
            subtitle: 'Gestión de Inquilinos',
          };
        case MAINTENANCE:
          return {
            title: 'Solicitud de Mantenimientos',
            subtitle: 'Gestión de solicitudes para uso de mantenimientos',
            action: '+ Solicitar Mantenimiento',
          };
        case AMENITIES:
          return {
            title: 'Solicitud de Amenidades',
            subtitle: 'Gestión de solicitudes para uso de amenidades',
            action: '+ Solicitar Nueva Amenidad',
          };
        default:
          return {
            title: 'Condominiums App',
            subtitle: 'Administra tu condominio de forma fácil y rápida',
          };
      }
    };

    const { title, subtitle, action } = getTitleAndSubtitle();
    setHeaderContent((prev) => ({ ...prev, title, subtitle, action }));
  }, [location.pathname]);

  const handleSubmit = async (data) => {
    console.log(data);

    try {
      switch (headerContent.title) {
        case 'Solicitud de Mantenimientos':
          await sendMaintenanceRequest(data);
          break;
        case 'Solicitud de Amenidades':
          await sendAmenitiesRequest(data);
          break;
        case 'Quejas y Sugerencias':
          await sendComplaintsSuggestionsRequest(data);
          break;
        default:
          console.error('Tipo de solicitud desconocido:', headerContent.title);
      }
    } catch (error) {
      console.error('Error al intentar enviar la solicitud:', error);
    }
  };

  return (
    <section className='w-full'>
      <div className='flex w-full justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold text-neutral-800'>
            {headerContent.title}
          </h1>
          <h3 className='text-lg text-neutral-500'>{headerContent.subtitle}</h3>
        </div>
        <div className='flex items-center gap-3'>
          {[
            'Solicitud de Mantenimientos',
            'Solicitud de Amenidades',
            'Quejas y Sugerencias',
          ].includes(headerContent.title) && (
            <ModalComponent
              title={headerContent.title}
              button={headerContent.action}
              onSubmit={handleSubmit}
            />
          )}
          <button className='btn btn-ghost'>
            <svg
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
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
            Download PDF Report
          </button>
        </div>
      </div>

      <div className='flex justify-between px-3 py-11'>
        <div className='flex h-10 w-[430px] items-center justify-start gap-2 rounded border border-neutral-100 bg-white pl-2'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333C7.71489 11.3333 8.68239 10.9877 9.46145 10.4043L12.1953 13.1381C12.4557 13.3985 12.8778 13.3985 13.1381 13.1381C13.3985 12.8778 13.3985 12.4557 13.1381 12.1953L10.4043 9.46145C10.9877 8.68239 11.3333 7.71489 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2ZM3.33333 6.66667C3.33333 4.82572 4.82572 3.33333 6.66667 3.33333C8.50762 3.33333 10 4.82572 10 6.66667C10 8.50762 8.50762 10 6.66667 10C4.82572 10 3.33333 8.50762 3.33333 6.66667Z'
              fill='#64748B'
            />
          </svg>

          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Buscar por nombre...'
            className='h-full w-full font-normal text-neutral-500 outline-none'
          />
        </div>
        <button className='flex items-center justify-center gap-2 bg-white px-4 py-2 text-neutral-500'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.6667 2H1.33334L6.66668 8.30667V12.6667L9.33334 14V8.30667L14.6667 2Z'
              stroke='#64748B'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Filter
        </button>
      </div>
    </section>
  );
}

export default HeaderBottom;
