import { useEffect, useMemo, useState } from 'react';
import HeaderBottom from '../../components/Header/Header-bottom';
import Table from '../../components/Table/Table';
import { TemplateAmenities } from '../../components/Table/TemplateTable';
import { useSearch } from '../../store/useSearch';
import { amenityRequests, amenityTypes } from '../../../mocks/data';
import { useUserStore } from '../../store/userStore';
import AmenityCard from '../../components/AmenityCard/AmenityCard';

function Amenities() {
  const { searchValue } = useSearch();
  const userRole = useUserStore((state) => state.user?.role);

  function handleAccept(id) {
    alert(`Aceptar Amenities ${id}`);
  }
  function handleChangeDate(id) {
    alert(`Cambia Fecha ${id}`);
  }
  const columns = TemplateAmenities(handleAccept, handleChangeDate);

  const data = useMemo(
    () => amenityRequests.map((r) => ({ ...r, key: r.id })),
    [],
  );

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
  }, [searchValue, data]);

  return (
    <>
      {userRole === 'admin' ? (
        <>
          <HeaderBottom />
          <Table columns={columns} data={filteredData} />
        </>
      ) : (
        <div className='grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {amenityTypes.map((a) => (
            <AmenityCard key={a.id} amenity={a} />
          ))}
        </div>
      )}
    </>
  );
}

export default Amenities;
