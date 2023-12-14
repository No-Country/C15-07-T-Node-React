import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { useUserStore } from '../store/userStore';
import { useEffect } from 'react';
import { LOGIN } from '../router/paths';

const PrivateRoute = () => {
  const authToken = useUserStore((state) => state.authToken);
  const setAuthToken = useUserStore((state) => state.setAuthToken);
  const getMyInfo = useUserStore((state) => state.getMyInfo);
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
      await getMyInfo();
    }
  }, [setAuthToken, authToken, getMyInfo, navigate]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default PrivateRoute;
