import { useEffect, useState } from 'react';
import useUsers from '../../api/queries/users/useUsers';
import HeaderBottom from '../../components/Header/Header-bottom';
import Table from '../../components/Table/Table';
import { TemplateTenants } from '../../components/Table/TemplateTable';
import { useSearch } from '../../store/useSearch';

function Tenants() {
  const { data: users } = useUsers();
  const { searchValue } = useSearch();

  function handleEdit(id) {
    alert(`Editar Inquilino ${id}`);
  }

  const columns = TemplateTenants(handleEdit);
  const [filteredData, setFilteredData] = useState(users);

  useEffect(() => {
    if (searchValue) {
      setFilteredData(
        users?.filter(
          (r) =>
            (r.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
              r.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
              r.email.toLowerCase().includes(searchValue.toLowerCase()) ||
              r.phone.toLowerCase().includes(searchValue.toLowerCase())) &&
            r.role === 'inquilino',
        ),
      );
    } else {
      setFilteredData(users?.filter((r) => r.role === 'inquilino'));
    }
  }, [searchValue, users]);

  return (
    <>
      <HeaderBottom />
      <div className='flex w-full justify-center'>
        {users?.length > 0 ? (
          <Table columns={columns} data={filteredData} />
        ) : (
          <span className='loading loading-spinner loading-lg text-primary'></span>
        )}
      </div>
    </>
  );
}

export default Tenants;
