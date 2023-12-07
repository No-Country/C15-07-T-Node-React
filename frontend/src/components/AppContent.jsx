import { Route, Routes, useLocation } from 'react-router-dom';
import {
  Login,
  Services,
  Contact,
  NotFound,
  Inquilinos,
  Amenidades,
  Mantenimientos,
} from '../pages';
import NavBar from './NavBar/NavBar';
import HeaderTop from './Header/Header-top';
import { SideMenu } from './SideMenu';

// eslint-disable-next-line react/prop-types
function AppContent() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {pathname !== '/' && (
        <>
          <NavBar />
          <HeaderTop />
        </>
      )}
      {/* <SideMenu /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Inquilinos' element={<Inquilinos />} />
        <Route path='/Amenidades' element={<Amenidades />} />
        <Route path='/Mantenimientos' element={<Mantenimientos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* {pathname !== 'inserte aqui una ruta para controlar vista del componente :)' && <inserte aqui componente :) />} */}
    </>
  );
}

export default AppContent;
