import { useEffect, useState } from 'react';
import HeaderBottom from '../../components/Header/Header-bottom';
import Table from '../../components/Table/Table';
import { TemplateAmenities } from '../../components/Table/TemplateTable';
import { useSearch } from '../../store/useSearch';

function Amenities() {
  const { searchValue } = useSearch();
  function handleAccept(id) {
    alert(`Aceptar Amenities ${id}`);
  }
  function handleChangeDate(id) {
    alert(`Cambia Fecha ${id}`);
  }
  const columns = TemplateAmenities(handleAccept, handleChangeDate);

  const data = [
    {
      id: '5146846548465',
      name: 'Jane Cooper',
      date: '2/19/21',
      amenity: 'Piscina',
    },
    {
      id: '5467319467348',
      name: 'Wade Warren',
      date: '5/7/16',
      amenity: 'Cancha de Futbol',
    },
    {
      id: '1345705945446',
      name: 'Esther Howard',
      date: '9/18/16',
      amenity: 'Area de eventos',
    },
    {
      id: '5440754979777',
      name: 'Cancha de futbol',
      date: '2/11/12',
      amenity: 'Piscina',
    },
    {
      id: '1243467984543',
      name: 'Brooklyn Simmons',
      date: '9/18/16',
      amenity: 'Piscina',
    },
    {
      id: '8454134649707',
      name: 'Leslie Alexander',
      date: '1/28/17',
      amenity: 'Piscina',
    },
    {
      id: '2130164040451',
      name: 'Jenny Wilson',
      date: '5/27/15',
      amenity: 'Area de eventos',
    },
    {
      id: '0439104645404',
      name: 'Guy Hawkins',
      date: '8/2/19',
      amenity: 'Area de eventos',
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

export default Amenities;
