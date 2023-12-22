import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { useUserStore } from '../store/userStore';
import { useEffect } from 'react';
import { LOGIN } from '../router/paths';

const PrivateRoute = () => {
  const authToken = useUserStore((state) => state.authToken);
  const setAuthToken = useUserStore((state) => state.setAuthToken);
  const getMyInfo = useUserStore((state) => state.getMyInfo);
  const loading = useUserStore((state) => state.loading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      const token = localStorage.getItem('token');
      if (token) {
        restoreSession();
      } else {
        navigate(LOGIN);
      }
    }
    async function restoreSession() {
      setAuthToken();
      try {
        const info = await getMyInfo();
        if (info?.status !== 200) {
          localStorage.removeItem('token');
          navigate(LOGIN);
        }
      } catch (error) {
        localStorage.removeItem('token');
        navigate(LOGIN);
      }
    }
  }, [setAuthToken, authToken, getMyInfo, navigate]);

  return (
    <>
      <NavBar />
      {loading ? (
        <div className='flex h-full w-full grow items-center justify-center'>
          <span className='loading loading-spinner loading-lg text-primary'></span>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
export default PrivateRoute;
