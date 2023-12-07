import { Outlet } from 'react-router-dom';
import { SideMenu } from '../../components/SideMenu';
import HeaderTop from '../../components/Header/Header-top';

const AdminDashboard = () => {
  return (
    <div className='flex h-full grow bg-[#f8f8f8]'>
      <div className='flex min-h-full min-w-[300px] grow flex-col p-3'>
        <SideMenu />
      </div>
      <div className='w-full p-5'>
        <HeaderTop />
        <Outlet />
      </div>
    </div>
  );
};
export default AdminDashboard;
