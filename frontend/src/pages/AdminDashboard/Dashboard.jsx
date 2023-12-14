import { lazy, Suspense } from 'react';
import OccupationChart from '../../components/DashboardComponents/OccupationChart';

const PaymentsChart = lazy(
  () => import('../../components/DashboardComponents/PaymentsChart'),
);
const TableMaintenance = lazy(
  () => import('../../components/DashboardComponents/TableMaintenance'),
);
const TableTenants = lazy(
  () => import('../../components/DashboardComponents/TableTenants'),
);

const Dashboard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className='flex grow flex-col gap-5'>
        <div className='flex h-full w-full flex-col gap-4 xl:flex-row'>
          <PaymentsChart />
          <TableTenants />
        </div>
        <div className='flex h-full w-full grow flex-col gap-4 xl:flex-row'>
          <TableMaintenance />
          <div className='h-full min-w-[350px] grow rounded-[10px] border border-gray-200 bg-white p-4'>
            <h3 className='text-base font-bold text-gray-900'>
              Tasa de ocupación
            </h3>
            <h4 className='text-xs font-normal text-gray-500'>
              Porcentaje de apartamentos ocupados
            </h4>
            <OccupationChart data={0.4} />
          </div>
        </div>
      </section>
    </Suspense>
  );
};
export default Dashboard;
