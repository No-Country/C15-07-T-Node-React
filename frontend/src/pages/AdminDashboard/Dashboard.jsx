import TableMaintenance from '../../components/DashboardComponents/TableMaintenance';
import TableTenants from '../../components/DashboardComponents/TableTenants';

const Dashboard = () => {
  return (
    <section className='flex gap-5'>
      <TableMaintenance />
      <TableTenants />
    </section>
  );
};
export default Dashboard;
