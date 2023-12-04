import { Route, Routes, useLocation } from 'react-router-dom';
import { Login, Services, Contact, NotFound }  from '../pages';
import NavBar from './NavBar/NavBar';

// eslint-disable-next-line react/prop-types
function AppContent() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {pathname !== '/' && <NavBar />}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* {pathname !== 'inserte aqui una ruta para controlar vista del componente :)' && <inserte aqui componente :) />} */}
    </>
  );
}

export default AppContent;
