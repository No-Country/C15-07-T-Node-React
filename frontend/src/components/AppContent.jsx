import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Login,
  Services,
  Contact,
  NotFound,
  AdminDashboard,
  Tenants,
  Amenities,
  Maintenance,
  Payments,
} from '../pages';

import PrivateRoute from './PrivateRoute';
import {
  AMENITIES,
  CONTACT,
  DASHBOARD,
  HOME,
  LOGIN,
  MAINTENANCE,
  SERVICES,
  TENANTS,
  PAYMENTS,
  DASHBOARD_HOME,
} from '../router/paths';
import Dashboard from '../pages/AdminDashboard/Dashboard';

function AppContent() {
  return (
    <Routes>
      <Route path={HOME} element={<Navigate to={'/login'} />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={CONTACT} element={<Contact />} />
      <Route element={<PrivateRoute />}>
        <Route path={DASHBOARD} element={<AdminDashboard />}>
          <Route index element={<Navigate to={DASHBOARD_HOME} />} />
          <Route path={DASHBOARD_HOME} element={<Dashboard />} />
          <Route path={SERVICES} element={<Services />} />
          <Route path={TENANTS} element={<Tenants />} />
          <Route path={AMENITIES} element={<Amenities />} />
          <Route path={MAINTENANCE} element={<Maintenance />} />
          <Route path={PAYMENTS} element={<Payments />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppContent;
