import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { HOME, LOGIN, USER_PROFILE } from '../../router/paths';

function NavBar() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const loading = useUserStore((state) => state.loading);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(LOGIN);
  };

  return (
    <header className='navbar sticky top-0 z-30 w-full bg-base-100 pl-4 pr-8 shadow'>
      <div className='flex-1'>
        <Link
          to={HOME}
          className='btn btn-ghost text-xl hover:bg-neutral hover:text-secondary'
        >
          <img src='/condominium.svg' alt='' className='h-8' />
          <span className='hidden sm:inline-block'>Condominiums</span>
        </Link>
      </div>
      {user ? (
        <div className='flex-none gap-3'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-circle btn-ghost hover:bg-neutral'
            >
              <div className='indicator'>
                <svg
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.125 8.33331L11.3444 13.8129C12.0442 14.2794 12.9558 14.2794 13.6556 13.8129L21.875 8.33331M5.20833 19.7916H19.7917C20.9423 19.7916 21.875 18.8589 21.875 17.7083V7.29165C21.875 6.14105 20.9423 5.20831 19.7917 5.20831H5.20833C4.05774 5.20831 3.125 6.14105 3.125 7.29165V17.7083C3.125 18.8589 4.05774 19.7916 5.20833 19.7916Z'
                    stroke='#3F3F46'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span className='badge indicator-item badge-primary badge-sm'>
                  8
                </span>
              </div>
            </div>
            {/* <div
            tabIndex={0}
            className='card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow'>
            <div className='card-body'>
              <span className='text-lg font-bold'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div> */}
          </div>
          <button className='btn btn-circle btn-ghost hover:bg-neutral'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
              <span className='badge indicator-item badge-primary badge-xs'></span>
            </div>
          </button>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='avatar btn btn-circle btn-ghost hover:bg-neutral'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src={
                    user?.urlImage ||
                    'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
            >
              <li>
                <Link to={USER_PROFILE} className='justify-between'>
                  Perfil
                  <span className='badge badge-primary'>Nuevo</span>
                </Link>
              </li>
              <li>
                <Link>Configuración</Link>
              </li>
              <li>
                <div onClick={handleLogout}>Cerrar sesión</div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        !loading && (
          <Link to={LOGIN} className='btn btn-primary'>
            Iniciar Sesión
          </Link>
        )
      )}
    </header>
  );
}

export default NavBar;
