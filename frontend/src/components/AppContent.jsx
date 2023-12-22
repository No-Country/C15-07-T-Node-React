import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Login,
  Contact,
  NotFound,
  AdminDashboard,
  Tenants,
  Amenities,
  Maintenance,
  Payments,
  Doormans,
} from '../pages';

import PrivateRoute from './PrivateRoute';
import {
  AMENITIES,
  CONTACT,
  DASHBOARD,
  HOME,
  LOGIN,
  MAINTENANCE,
  TENANTS,
  PAYMENTS,
  DASHBOARD_HOME,
  SUGGS,
  DOORMANS,
  USER,
  USER_PROFILE,
  DEVELOPERS,
} from '../router/paths';
import Dashboard from '../pages/AdminDashboard/Dashboard';
import Suggs from '../pages/Suggs/Suggs';
import UserProfile from '../pages/UserProfile/UserProfile';
import Developers from '../pages/Developers/Developers';
import Home from '../pages/Home/Home';

function AppContent() {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={CONTACT} element={<Contact />} />
      <Route element={<PrivateRoute />}>
        <Route path={DASHBOARD} element={<AdminDashboard />}>
          <Route index element={<Navigate to={DASHBOARD_HOME} />} />
          <Route path={DASHBOARD_HOME} element={<Dashboard />} />
          <Route path={TENANTS} element={<Tenants />} />
          <Route path={AMENITIES} element={<Amenities />} />
          <Route path={MAINTENANCE} element={<Maintenance />} />
          <Route path={PAYMENTS} element={<Payments />} />
          <Route path={DOORMANS} element={<Doormans />} />
          <Route path={SUGGS} element={<Suggs />} />
        </Route>
        <Route path={USER} element={<UserProfile />}>
          <Route index element={<Navigate to={USER_PROFILE} />} />
          <Route path={USER_PROFILE} element={<Amenities />} />
        </Route>
      </Route>
      <Route path={DEVELOPERS} element={<Developers />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppContent;
