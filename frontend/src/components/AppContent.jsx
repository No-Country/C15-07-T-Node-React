import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
  Login,
  Services,
  Contact,
  NotFound,
  AdminDashboard,
  Tenants,
  Amenities,
  Maintenance,
} from '../pages';
import HeaderTop from './Header/Header-top';
import PrivateRoute from './PrivateRoute';
import {
  AMENITIES,
  CONTACT,
  DASHBOARD,
  HOME,
  LOGIN,
  MAINTENANCE,
  NOT_FOUND,
  SERVICES,
  TENANTS,
} from '../router/paths';

function AppContent() {
  return (
    <Routes>
      <Route path={HOME} element={<Navigate to={'/login'} />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={CONTACT} element={<Contact />} />
      <Route element={<PrivateRoute />}>
        <Route path={DASHBOARD} element={<AdminDashboard />}>
          <Route index element={<HeaderTop />} />
          <Route path={SERVICES} element={<Services />} />
          <Route path={TENANTS} element={<Tenants />} />
          <Route path={AMENITIES} element={<Amenities />} />
          <Route path={MAINTENANCE} element={<Maintenance />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppContent;
