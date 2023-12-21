import { useUserStore } from '../../store/userStore';
import { Outlet, useNavigate } from 'react-router-dom';
import { DASHBOARD } from '../../router/paths';
import { useEffect } from 'react';
// import UserAvatar from './UserAvatar';
import { SideMenu } from '../../components/SideMenu';
import HeaderTop from '../../components/Header/Header-top';

export default function UserProfile() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  // const loading = useUserStore((state) => state.loading);

  useEffect(() => {
    user?.role === 'admin' && navigate(DASHBOARD);
  }, [user, navigate]);

  return (
    <div className='flex h-full grow bg-[#f8f8f8]'>
      <div className='flex min-h-full min-w-[300px] grow flex-col p-3'>
        <SideMenu />
      </div>
      <div className='w-full grow p-5'>
        <HeaderTop />
        <Outlet />
      </div>
    </div>
  );
}
