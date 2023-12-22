import { useNavigate, Outlet } from 'react-router-dom';
import { SideMenu } from '../../components/SideMenu';
import HeaderTop from '../../components/Header/Header-top';
import { useUserStore } from '../../store/userStore';
import { USER } from '../../router/paths';
import { useEffect } from 'react';
import { Toast } from '../../components/Toast/Toast';

const AdminDashboard = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.role || user?.role === 'normal') {
      navigate(USER);
    }
  }, [navigate, user]);

  return (
    <div className='flex h-full grow bg-[#f8f8f8]'>
      <div className='flex min-h-full min-w-[300px] grow flex-col p-3'>
        <SideMenu />
      </div>
      <div className='w-full grow p-5'>
        <Toast />
        <HeaderTop />
        <Outlet />
      </div>
    </div>
  );
};
export default AdminDashboard;
