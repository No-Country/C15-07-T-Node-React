import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

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
