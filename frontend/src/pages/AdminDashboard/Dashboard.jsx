import { lazy, Suspense } from 'react';
import OccupationChart from '../../components/DashboardComponents/OccupationChart';
import { useUserStore } from '../../store/userStore';

const PaymentsChart = lazy(
  () => import('../../components/DashboardComponents/PaymentsChart'),
);
const TableMaintenance = lazy(
  () => import('../../components/DashboardComponents/TableMaintenance'),
);
const TableTenants = lazy(
  () => import('../../components/DashboardComponents/TableTenants'),
);
const TableAmenities = lazy(
  () => import('../../components/DashboardComponents/TableAmenities'),
);
const TablePayments = lazy(
  () => import('../../components/DashboardComponents/TablePayments'),
);

const Dashboard = () => {
  const user = useUserStore((state) => state.user);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className='flex grow flex-col gap-5 xl:flex-row'>
        <div className='flex h-full w-full flex-col gap-4 xl:flex-1'>
          {user?.role === 'admin' ? <PaymentsChart /> : null}
          <TableMaintenance />
          {user?.role === 'inquilino' ? <TableAmenities /> : null}
        </div>
        <div className='flex h-full flex-col gap-4'>
          {user?.role === 'inquilino' ? <TablePayments /> : null}
          {user?.role === 'admin' ? <TableTenants /> : null}
          {user?.role === 'admin' ? (
            <div className='h-full min-w-[350px] grow rounded-[10px] border border-gray-200 bg-white p-4'>
              <h3 className='text-base font-bold text-gray-900'>
                Tasa de ocupación
              </h3>
              <h4 className='text-xs font-normal text-gray-500'>
                Porcentaje de apartamentos ocupados
              </h4>
              <OccupationChart data={0.4} />
            </div>
          ) : null}
        </div>
      </section>
    </Suspense>
  );
};
export default Dashboard;
