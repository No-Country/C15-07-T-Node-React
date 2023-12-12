import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useUserStore } from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
  const login = useUserStore((state) => state.login);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const authToken = useUserStore((state) => state.token);
  const getMyInfo = useUserStore((state) => state.getMyInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await login(data);

    const info = await getMyInfo();

    if (info.status === 200 || res.status === 200) navigate('/dashboard');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard');
  }, [authToken]);

  return (
    <section className='flex h-screen w-full items-start'>
      <article className='relative hidden h-full w-1/2 bg-neutral lg:flex'>
        <img
          src='https://www.publicdomainpictures.net/pictures/370000/velka/tall-building-windows.jpg'
          className='fixed h-full w-1/2 object-cover'
        />
      </article>
      <form
        className='mx-auto flex h-full w-full flex-col justify-between bg-[base-100] px-4 py-10 lg:w-1/2 lg:p-28'
        onSubmit={handleSubmit(onSubmit)}>
        <h1 className='mx-auto mb-2 flex items-center gap-2 text-xl font-semibold'>
          <img src='condominium.svg' alt='Condominium' className='h-8' />
          Condominiums
        </h1>

        <div className='mx-auto flex w-full max-w-[550px] flex-col'>
          <div className='mb-2 flex w-full flex-col'>
            <h3 className='mb-4 text-3xl font-semibold'>Iniciar sesión</h3>
            <p className='mb-2 text-base'>
              Bienvenido! Por favor, ingresa tus credenciales.
            </p>
          </div>

          <div className='flex w-full flex-col'>
            {error ? (
              <span className='alert alert-error mb-3 rounded-lg p-3 text-xs'>
                Credenciales inválidas. Revisa tu correo o contraseña
              </span>
            ) : null}
            <input
              type='email'
              placeholder='Correo'
              className={`input input-bordered ${
                errors.email ? 'input-error' : 'input-primary'
              } my-2 w-full`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className='mb-1 text-center text-sm text-error-content'>
                El correo es requerido
              </span>
            )}
          </div>

          <div className='flex w-full flex-col'>
            <input
              type='password'
              placeholder='Contraseña'
              className={`input input-bordered ${
                errors.password ? 'input-error' : 'input-primary'
              } my-2 w-full`}
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className='mb-1 text-center text-sm text-error-content'>
                La contraseña es requerida
              </span>
            )}
          </div>

          <div className='flex w-full items-center justify-between'>
            <div className='flex w-full items-center'>
              <input
                id='remember'
                type='checkbox'
                className='checkbox-primary checkbox mr-2'
              />
              <label htmlFor='remember' className='text-sm'>
                Recordar
              </label>
            </div>

            <p className='cursor-pointer whitespace-nowrap text-sm font-medium underline underline-offset-2 hover:text-accent'>
              ¿Olvidaste la contraseña?
            </p>
          </div>

          <div className='my-4 flex w-full flex-col'>
            <button
              className='btn btn-primary my-2 flex w-full p-4'
              disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner loading-sm'></span>
              ) : (
                'Iniciar sesión'
              )}
            </button>
            <button
              className='btn btn-secondary my-2 flex w-full p-4'
              disabled={loading}>
              Registro
            </button>
          </div>
        </div>

        <div className='flex w-full items-center justify-center pb-20'>
          <p className='text-sm font-normal'>
            ¿No tienes cuenta?{' '}
            <Link
              className='cursor-pointer font-semibold underline underline-offset-2 hover:text-accent'
              to='/contact'>
              Contactar con la administración
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
