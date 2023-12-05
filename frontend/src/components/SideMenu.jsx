import { NavLink } from 'react-router-dom';

import More from '../assets/icons/More.svg';
import Users from '../assets/icons/Users.svg';
import User from '../assets/icons/User.svg';
import Bell from '../assets/icons/Bell.svg';
import Drill from '../assets/icons/Drill.svg';
import Folder from '../assets/icons/Folder.svg';
import Home from '../assets/icons/Home.svg';
import ChartBar from '../assets/icons/ChartBar.svg';
import ChartSquare from '../assets/icons/ChartSquare.svg';
import Settings from '../assets/icons/Settings.svg';
import Logout from '../assets/icons/Logout.svg';

export const SideMenu = () => {
  return (
    <div>
      <div className='flex flex-col gap-7 px-4 py-4'>
        <button className='btn btn-primary  flex w-full p-4'>
          <img src={More} alt='More' />
          Crear Nueva Cuenta
        </button>

        <NavLink
          to='/home'
          className={({ isActive }) =>
            isActive
              ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
              : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
          }>
          <img src={Home} alt='Home' />
          <div className=' font-medium  text-zinc-700'>Home</div>
        </NavLink>

        <div>
          <div className='text-m  mb-2 uppercase text-zinc-400'>Personas</div>
          <div className='flex flex-col gap-1'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                  : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
              }>
              <img src={Users} alt='Inquilinos' />
              <div className=' font-medium  text-zinc-700'>Inquilinos</div>
            </NavLink>

            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                  : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
              }>
              <img src={User} alt='Porteros' />
              <div className=' font-medium  text-zinc-700'>Porteros</div>
            </NavLink>
          </div>
        </div>

        <div>
          <div className='mb-2  uppercase text-zinc-400'>Comunicación</div>

          <div className='flex flex-col gap-1'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                  : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
              }>
              <img src={Bell} alt='Amenidades' />
              <div className=' font-medium  text-zinc-700'>
                Solicitud de Amenidades
              </div>
            </NavLink>

            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                  : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
              }>
              <img src={Drill} alt='Mantenimiento' />
              <div className=' font-medium  text-zinc-700'>
                Solicitud de Mantenimiento
              </div>
            </NavLink>

            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                  : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
              }>
              <img src={Folder} alt='Q & S' />
              <div className=' font-medium  text-zinc-700'>
                Quejas y Sugerencias
              </div>
            </NavLink>
          </div>
        </div>

        <div>
          <div className='mb-2  uppercase text-zinc-400'>Contabilidad</div>

          <div className='flex flex-col gap-1'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                  : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
              }>
              <img src={ChartBar} alt='Pagos' />
              <div className=' font-medium  text-zinc-700'>
                Pago de Alquileres
              </div>
            </NavLink>

            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                  : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
              }>
              <img src={ChartSquare} alt='Reportes' />
              <div className=' font-medium  text-zinc-700'>Reportes</div>
            </NavLink>
          </div>
        </div>

        <div className=' mt-20 flex flex-col gap-1'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'flex  flex-row gap-3 rounded-md bg-neutral/80  p-1'
                : 'flex flex-row gap-3  p-1 hover:bg-neutral/30'
            }>
            <img src={Settings} alt='Settings' />
            <div className=' font-medium  text-zinc-700'>Settings</div>
          </NavLink>

          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'flex  flex-row gap-3 rounded-md bg-red-500/80  p-1'
                : 'flex flex-row gap-3  rounded-md p-1 hover:bg-red-300/30'
            }>
            <img src={Logout} alt='Logout' />
            <div className=' font-medium  text-zinc-700'>Logout</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
