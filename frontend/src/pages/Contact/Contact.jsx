import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      alert(
        'Los datos fueron enviados al administrador: ' + JSON.stringify(data),
      );
      reset();
    } catch (error) {
      console.error('Error durante el registro:', error);
      alert('Error durante el registro: ' + error.message);
    }
  };
  return (
    <div>
      <section className='flex h-screen w-full items-start'>
        <article className='relative hidden h-full w-1/2 bg-neutral lg:flex'>
          <img
            src='https://www.publicdomainpictures.net/pictures/370000/velka/tall-building-windows.jpg'
            className='fixed h-full w-1/2 object-cover'
          />
        </article>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto flex h-full w-full flex-col justify-between bg-[base-100] px-4 py-10 lg:w-1/2 lg:p-28'
        >
          <h1 className='mx-auto mb-2 flex items-center gap-2 text-xl font-semibold'>
            <img src='condominium.svg' alt='Condominium' className='h-8' />
            Condominiums
          </h1>

          <div className='mx-auto flex w-full max-w-[550px] flex-col'>
            <div className='mb-2 flex w-full flex-col'>
              <h3 className='mb-4 text-3xl font-semibold'>
                Registra una Cuenta
              </h3>
              <p className='mb-2 text-base'>
                Por favor, ingresa los datos para que un administrador cree su
                cuenta.
              </p>
            </div>

            <div className='flex space-x-4'>
              <div className='flex flex-col'>
                <label className='font-medium'>Nombre</label>
                <input
                  type='text'
                  className={`input input-bordered font-medium ${
                    errors.firstName ? 'input-error' : 'input-primary'
                  }`}
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
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
                    errors.lastname ? 'input-error' : 'input-primary'
                  }`}
                  {...register('lastname', { required: true })}
                />
                {errors.lastname && (
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
                  errors.email ? 'input-error' : 'input-primary'
                }`}
                {...register('email', {
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:
                      'Ingresa una dirección de correo electrónico válida',
                  },
                })}
              />
              {errors.email && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='flex flex-col'>
              <label className='font-medium'>Número de teléfono</label>
              <input
                type='number'
                className={`input input-bordered ${
                  errors.phone ? 'input-error' : 'input-primary'
                }`}
                {...register('phone', {
                  required: 'El número de teléfono es obligatorio',

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
              {errors.phone && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Fecha de Nacimiento</label>
              <input
                type='date'
                className={`input input-bordered ${
                  errors.birthday ? 'input-error' : 'input-primary'
                }`}
                {...register('birthday', { required: true })}
              />
              {errors.birthday && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  La Fecha de Nacimiento es requerida
                </span>
              )}
            </div>

            <div className='my-4 flex w-full flex-col'>
              <button className='btn btn-primary my-2 flex w-full p-4'>
                Enviar
              </button>
              {/* <button
          className='btn btn-secondary my-2 flex w-full p-4'
          disabled={loading}>
          Registro
        </button> */}
            </div>
          </div>

          <div className='flex w-full items-center justify-center pb-20'></div>
        </form>
      </section>
      );
    </div>
  );
}

export default Contact;
