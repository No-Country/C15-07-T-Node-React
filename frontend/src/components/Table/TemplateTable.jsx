export const TemplateTenants = (handleEdit) => {
  const columns = [
    {
      title: 'identificador',
      field: 'id',
    },
    {
      title: 'Nombre',
      field: 'name',
    },
    {
      title: 'Fecha',
      field: 'date',
    },
    {
      title: 'Email',
      field: 'email',
    },
    {
      title: 'Telefono',
      field: 'tel',
    },
    {
      title: 'Apartamento',
      field: 'apartment',
    },
    {
      title: '',
      field: 'actions1',
      template: (row) => (
        <button
          onClick={() => handleEdit(row.id)}
          className='rounded bg-primary px-8 py-2 text-base font-normal text-white'>
          Editar
        </button>
      ),
    },
  ];

  return columns;
};

export const TemplateAmenities = (handleAccept, handleChangeDate) => {
  const columns = [
    {
      title: 'Nombre',
      field: 'name',
    },
    {
      title: 'Fecha',
      field: 'date',
    },
    {
      title: 'Amenidad',
      field: 'amenity',
    },
    {
      title: '',
      field: 'actions1',
      template: (row) => (
        <button
          onClick={() => handleAccept(row.id)}
          className='rounded bg-primary px-8 py-2 text-base font-normal text-white'>
          Aceptar
        </button>
      ),
    },
    {
      title: '',
      field: 'actions2',
      template: (row) => (
        <button
          onClick={() => handleChangeDate(row.id)}
          className='rounded bg-primary px-8 py-2 text-base font-normal text-white'>
          Cambiar Fecha
        </button>
      ),
    },
  ];

  return columns;
};

export const TemplatePayments = () => {
  const columns = [
    {
      title: 'id',
      field: 'id',
    },
    {
      title: 'Nombre',
      field: 'name',
    },
    {
      title: 'Fecha',
      field: 'date',
    },
    {
      title: 'Status',
      field: 'status',
      template: (row) => {
        return row.status === 'Paid' ? (
          <span className='rounded bg-green-100 px-2 text-green-900'>
            {row.status}
          </span>
        ) : (
          <span className='rounded bg-red-100 px-2 text-red-900'>
            {row.status}
          </span>
        );
      },
    },
    {
      title: 'Amount',
      field: 'amount',
      template: (row) => `$ ${row.amount}`,
    },
  ];

  return columns;
};
export const TemplateMaintenance = () => {
  const columns = [
    {
      title: 'Nombre',
      field: 'name',
    },
    {
      title: 'Mantenimiento',
      field: 'maintenance',
    },
    {
      title: 'Descrición',
      field: 'description',
    },
    {
      title: 'Portero',
      field: 'portero',
    },
    {
      title: 'Status',
      field: 'status',
      template: (row) => {
        return row.status === 'Completed' ? (
          <span className='flex items-center justify-center gap-2 rounded-full bg-green-100 text-xs leading-5 text-green-900'>
            <span className='h-2 w-2 rounded-full bg-green-500'></span>
            {row.status}
          </span>
        ) : (
          <span className='flex items-center justify-center gap-2 rounded-full bg-yellow-100 text-xs leading-5 text-yellow-900'>
            <span className='h-2 w-2 rounded-full bg-yellow-400'></span>
            {row.status}
          </span>
        );
      },
    },
  ];

  return columns;
};
