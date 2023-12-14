import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { useUserStore } from '../store/userStore';
import { useEffect } from 'react';
import { LOGIN } from '../router/paths';

const PrivateRoute = () => {
  const authToken = useUserStore((state) => state.authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate(LOGIN);
    }
  }, [authToken, navigate]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default PrivateRoute;
