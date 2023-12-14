import PaymentsChart from '../../components/DashboardComponents/PaymentsChart';
import TableMaintenance from '../../components/DashboardComponents/TableMaintenance';
import TableTenants from '../../components/DashboardComponents/TableTenants';

const Dashboard = () => {
  return (
    <section className='flex flex-col gap-5'>
      <div className='flex h-full w-full flex-col gap-4 xl:flex-row'>
        <PaymentsChart />
        <TableTenants />
      </div>
      <div className='flex h-full w-full flex-col gap-4 xl:flex-row'>
        <TableMaintenance />
        <div className='h-full min-w-[350px]'></div>
      </div>
    </section>
  );
};
export default Dashboard;
