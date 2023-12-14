import More from '../../assets/icons/More.svg';
import { useUserStore } from '../../store/userStore';
import { useForm } from 'react-hook-form';

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { register: registerUser } = useUserStore();

  const onSubmit = async (data) => {
    try {
      console.log('Enviando datos al servidor:', data);
      alert('Enviando datos al servidor: ' + JSON.stringify(data));

      // Llama a la función de registro de Zustand
      const registrationResult = await registerUser(data);

      // Muestra el resultado del registro en la consola
      console.log('Resultado del registro:', registrationResult);

      // Puedes manejar el resultado del registro aquí si es necesario
      console.log(
        'Registro exitoso Datos del usuario:',
        registrationResult.data,
      );
      // Cierra el modal después de un registro exitoso
      document.getElementById('my_modal_4').close();
      reset();
    } catch (error) {
      // Muestra cualquier error que pueda ocurrir durante el registro
      console.error('Error al intentar registrar usuario:', error);
      document.getElementById('my_modal_4').close();
    }
  };
  return (
    <>
      <button
        className='btn btn-primary  flex w-full p-4'
        onClick={() => document.getElementById('my_modal_4').showModal()}>
        <img src={More} alt='More' />
        Crear Nueva Cuenta
      </button>
      <dialog id='my_modal_4' className='open modal '>
        <div className='modal-box flex flex-col items-center overflow-auto overflow-x-hidden'>
          <h3 className='justify-center text-4xl font-bold'>Nuevo Usuario</h3>
          <p className='py-4'>Ingrese la informacion solicitada </p>

          <form
            className='mt-4 space-y-4'
            method='dialog'
            onSubmit={handleSubmit(onSubmit)}>
            <div
              className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
              onClick={() => {
                document.getElementById('my_modal_4').close();
                reset();
              }}>
              ✕
            </div>
            <div className='flex space-x-4'>
              <div className='flex flex-col'>
                <label className='font-medium'>Nombre</label>
                <input
                  type='text'
                  className={`input input-bordered font-medium ${
                    errors.Nombre ? 'input-error' : 'input-primary'
                  }`}
                  {...register('Nombre', { required: true })}
                />
                {errors.Nombre && (
                  <span className='mb-1 text-center text-sm text-error-content'>
                    El Nombre es requerido
                  </span>
                )}
              </div>
              <div className='flex flex-col'>
                <label className='font-medium'>Apellido</label>
                <input
                  type='text'
                  className={`input input-bordered font-medium ${
                    errors.Apellido ? 'input-error' : 'input-primary'
                  }`}
                  {...register('Apellido', { required: true })}
                />
                {errors.Apellido && (
                  <span className='mb-1 text-center text-sm text-error-content'>
                    El Apellido es requerido
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                className={`input input-bordered ${
                  errors.Email ? 'input-error' : 'input-primary'
                }`}
                {...register('Email', {
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:
                      'Ingresa una dirección de correo electrónico válida',
                  },
                })}
              />
              {errors.Email && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  {errors.Email.message}
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Número de teléfono</label>
              <input
                type='number'
                className={`input input-bordered ${
                  errors.NumberPhone ? 'input-error' : 'input-primary'
                }`}
                {...register('NumberPhone', {
                  required: 'El número de teléfono es obligatorio',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      'Ingresa un número de teléfono válido (10 dígitos)',
                  },
                  maxLength: {
                    value: 10,
                    message:
                      'El número de teléfono no debe exceder los 10 dígitos',
                  },
                  minLength: {
                    value: 10,
                    message:
                      'El número de teléfono debe tener al menos 10 dígitos',
                  },
                })}
              />
              {errors.NumberPhone && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  {errors.NumberPhone.message}
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Fecha de Nacimiento</label>
              <input
                type='date'
                className={`input input-bordered ${
                  errors.Date ? 'input-error' : 'input-primary'
                }`}
                {...register('Date', { required: true })}
              />
              {errors.Date && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  La Fecha de Nacimiento es requerida
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Tipo de Usuario</label>
              <select
                type='text'
                className={`input input-bordered ${
                  errors.UserType ? 'input-error' : 'input-primary'
                }`}
                {...register('UserType', { required: true })}>
                <option value=''></option>
                <option value='usuario' className='text-neutral-950'>
                  Usuario
                </option>
                <option value='portero' className='text-neutral-950'>
                  Portero
                </option>
              </select>
              {errors.UserType && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  Selecciona un tipo de usuario
                </span>
              )}
            </div>
            <div className='flex flex-col'>
              <button
                type='submit'
                className='btn btn-primary mt-4'
                // onClick={() => document.getElementById('my_modal_4').close()}
              >
                Crear Usuario
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
