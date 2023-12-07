import More from '../../assets/icons/More.svg';

export default function CreateUser() {
  return (
    <>
      <button
        className='btn btn-primary  flex w-full p-4'
        onClick={() => document.getElementById('my_modal_4').showModal()}>
        <img src={More} alt='More' />
        Crear Nueva Cuenta
      </button>
      <dialog id='my_modal_4' className='open modal '>
        <div className='modal-box flex flex-col items-center overflow-hidden'>
          <h3 className='justify-center text-4xl font-bold'>Nuevo Usuario</h3>
          <p className='py-4'>Ingrese la informacion solicitada </p>

          <form className='mt-4 space-y-4'>
            <div className='flex space-x-4'>
              <div className='flex flex-col'>
                <label className='font-medium'>Nombre</label>
                <input type='text' className='input input-bordered' />
              </div>
              <div className='flex flex-col'>
                <label className='font-medium'>Apellido</label>
                <input type='text' className='input input-bordered' />
              </div>
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Email</label>
              <input type='email' className='input input-bordered' />
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Número de teléfono</label>
              <input type='number' className='input input-bordered' />
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Fecha de Nacimiento</label>
              <input type='date' className='input input-bordered' />
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Tipo de Usuario</label>
              <select type='text' className='input input-bordered'>
                <option value=''></option>
                <option value='usuario'>Usuario</option>
                <option value='portero'>Portero</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <button
                type='button'
                className='btn btn-primary mt-4'
                onClick={() => document.getElementById('my_modal_4').close()}>
                Crear Usuario
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
