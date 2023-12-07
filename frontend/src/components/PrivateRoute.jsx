import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const PrivateRoute = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default PrivateRoute;
