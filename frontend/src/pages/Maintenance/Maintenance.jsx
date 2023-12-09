import { useEffect, useState } from 'react';
import HeaderBottom from '../../components/Header/Header-bottom';
import Table from '../../components/Table/Table';
import { TemplateMaintenance } from '../../components/Table/TemplateTable';
import { useSearch } from '../../store/useSearch';

function Maintenance() {
  const { searchValue } = useSearch();
  const columns = TemplateMaintenance();

  const data = [
    {
      id: '5146846548465',
      name: 'Jane Cooper',
      maintenance: 'Cambio de bombillo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Luis',
      status: 'Pending',
    },
    {
      id: '5467319467348',
      name: 'Wade Warren',
      maintenance: 'Arreglo de ventana',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Carlos',
      status: 'Pending',
    },
    {
      id: '1345705945446',
      name: 'Esther Howard',
      maintenance: 'Gotera en lavatorio',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Roberto',
      status: 'Completed',
    },
    {
      id: '5440754979777',
      name: 'Cameron Williamson',
      maintenance: 'Cambio de cerrojo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Roberto',
      status: 'Completed',
    },
    {
      id: '1243467984543',
      name: 'Brooklyn Simmons',
      maintenance: 'Cambio de bombillo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Carlos',
      status: 'Pending',
    },
    {
      id: '8454134649707',
      name: 'Leslie Alexander',
      maintenance: 'Arreglo de puerta',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Luis',
      status: 'Completed',
    },
    {
      id: '2130164040451',
      name: 'Jenny Wilson',
      maintenance: 'Gotera en ventana',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Roberto',
      status: 'Completed',
    },
    {
      id: '0439104645404',
      name: 'Guy Hawkins',
      maintenance: 'Cambio de bombillo',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      portero: 'Luis',
      status: 'Pending',
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

export default Maintenance;
