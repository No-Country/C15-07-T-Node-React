import { useEffect, useState } from 'react';
import HeaderBottom from '../../components/Header/Header-bottom';
import Table from '../../components/Table/Table';
import { TemplateTenants } from '../../components/Table/TemplateTable';
import { useSearch } from '../../store/useSearch';

function Tenants() {
  const { searchValue } = useSearch();

  function handleEdit(id) {
    alert(`Aceptar Amenities ${id}`);
  }

  const columns = TemplateTenants(handleEdit);

  const data = [
    {
      id: '5146846548465',
      name: 'Jane Cooper',
      date: '2/19/21',
      email: 'correo@correo.com',
      tel: '999-99-99',
      apartment: '1',
    },
    {
      id: '5467319467348',
      name: 'Wade Warren',
      date: '5/7/16',
      email: 'correo1@correo.com',
      tel: '999-99-99',
      apartment: '2',
    },
    {
      id: '1345705945446',
      name: 'Esther Howard',
      date: '9/18/16',
      email: 'correo2@correo.com',
      tel: '999-99-99',
      apartment: '3',
    },
    {
      id: '5440754979777',
      name: 'Cameron Williamson',
      date: '2/11/12',
      email: 'correo2@correo.com',
      tel: '999-99-99',
      apartment: '4',
    },
    {
      id: '1243467984543',
      name: 'Brooklyn Simmons',
      date: '9/18/16',
      email: 'correo2@correo.com',
      tel: '999-99-99',
      apartment: '5',
    },
    {
      id: '8454134649707',
      name: 'Leslie Alexander',
      date: '1/28/17',
      email: 'correo2@correo.com',
      tel: '999-99-99',
      apartment: '6',
    },
    {
      id: '2130164040451',
      name: 'Jenny Wilson',
      date: '5/27/15',
      email: 'correo2@correo.com',
      tel: '999-99-99',
      apartment: '7',
    },
    {
      id: '0439104645404',
      name: 'Guy Hawkins',
      date: '8/2/19',
      email: 'correo2@correo.com',
      tel: '999-99-99',
      apartment: '8',
    },
  ];
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchValue) {
      setFilteredData(
        data.filter((r) =>
          r.name.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else {
      setFilteredData(data);
    }
  }, [searchValue]);

  return (
    <>
      <HeaderBottom />
      <Table columns={columns} data={filteredData} />
    </>
  );
}

export default Tenants;
