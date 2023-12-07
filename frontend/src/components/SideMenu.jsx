import { NavLink } from 'react-router-dom';
import { Bell, ChartBar, ChartSquare, Drill, Folder } from '../assets/icons';
import { Home, Logout, More, Settings, User, Users } from '../assets/icons';
import {
  AMENITIES,
  DASHBOARD,
  MAINTENANCE,
  TENANTS,
  PAYMENTS,
  REPORTS,
} from '../router/paths';

export const SideMenu = () => {
  const activeStyle = ({ isActive }) =>
    `flex items-center gap-3 rounded-md p-1 hover:bg-neutral/30 ${
      isActive ? 'bg-neutral/80' : ''
    }`;

  return (  
    <div className='flex min-h-full grow flex-col gap-7 p-4'>
    <CreateUser />
      <button className='btn btn-primary flex w-full items-center'>
        <div className='w-5'>
          <img src={More} alt='More' />
        </div>
        Crear Nueva Cuenta
      </button>


      <NavLink to={DASHBOARD} className={activeStyle}>
        <div className='w-5'>
          <img src={Home} alt='Home' />
        </div>
        <div className='font-medium text-zinc-700'>Home</div>
      </NavLink>

      <div>
        <div className='text-m  mb-2 uppercase text-zinc-400'>Personas</div>
        <div className='flex flex-col gap-1'>
          <NavLink to={TENANTS} className={activeStyle}>
            <div className='w-5'>
              <img src={Users} alt='Inquilinos' />
            </div>
            <div className='font-medium text-zinc-700'>Inquilinos</div>
          </NavLink>

          <NavLink to='/' className={activeStyle}>
            <div className='w-5'>
              <img src={User} alt='Porteros' />
            </div>
            <div className=' font-medium  text-zinc-700'>Porteros</div>
          </NavLink>
        </div>
      </div>

      <div>
        <div className='mb-2  uppercase text-zinc-400'>Comunicación</div>

        <div className='flex flex-col gap-1'>
          <NavLink to={AMENITIES} className={activeStyle}>
            <div className='w-5'>
              <img src={Bell} alt='Amenidades' />
            </div>
            <div className=' font-medium  text-zinc-700'>
              Solicitud de Amenidades
            </div>
          </NavLink>

          <NavLink to={MAINTENANCE} className={activeStyle}>
            <div className='w-5'>
              <img src={Drill} alt='Mantenimiento' />
            </div>
            <div className=' font-medium  text-zinc-700'>
              Solicitud de Mantenimiento
            </div>
          </NavLink>

          <NavLink to='/' className={activeStyle}>
            <div className='w-5'>
              <img src={Folder} alt='Q & S' />
            </div>
            <div className=' font-medium  text-zinc-700'>
              Quejas y Sugerencias
            </div>
          </NavLink>
        </div>
      </div>

      <div>
        <div className='mb-2  uppercase text-zinc-400'>Contabilidad</div>

        <div className='flex flex-col gap-1'>
          <NavLink to={PAYMENTS} className={activeStyle}>
            <div className='w-5'>
              <img src={ChartBar} alt='Pagos' />
            </div>
            <div className=' font-medium  text-zinc-700'>
              Pago de Alquileres
            </div>
          </NavLink>

          <NavLink to={REPORTS} className={activeStyle}>
            <div className='w-5'>
              <img src={ChartSquare} alt='Reportes' />
            </div>
            <div className=' font-medium  text-zinc-700'>Reportes</div>
          </NavLink>
        </div>
      </div>

      <div className='mt-20 flex grow flex-col gap-1'>
        <NavLink to='/' className={activeStyle}>
          <div className='w-5'>
            <img src={Settings} alt='Configuraciones' />
          </div>
          <div className=' font-medium  text-zinc-700'>Configuraciones</div>
        </NavLink>

        <NavLink to='/' className={activeStyle}>
          <div className='w-5'>
            <img src={Logout} alt='Cerrar sesión' />
          </div>
          <div className=' font-medium  text-zinc-700'>Cerrar sesión</div>
        </NavLink>
      </div>
    </div>
  );
};
