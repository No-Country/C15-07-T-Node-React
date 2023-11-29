function Login() {
  return (
    <section className='flex h-screen w-full items-start'>
      <article className='flex h-full w-1/2 bg-red-700'>
        <img
          src='https://www.publicdomainpictures.net/pictures/370000/velka/tall-building-windows.jpg'
          className='h-full w-full object-cover'
        />
      </article>
      <article className='flex h-full w-1/2 flex-col justify-between bg-[#f5f5f5] p-28'>
        <h1 className='mb-2 text-xl font-semibold text-black'>
          Nombre del Proyecto
        </h1>

        <div className='flex w-full max-w-[550px] flex-col'>
          <div className='mb-2 flex w-full flex-col'>
            <h3 className='mb-4 text-3xl font-semibold'>Login</h3>
            <p className='mb-2 text-base'>
              Welcome Back! Please enter your details
            </p>
          </div>

          <div className='flex w-full flex-col'>
            <input
              type='email'
              placeholder='Email'
              className='my-2 w-full border-b border-black bg-transparent py-2 text-black outline-none focus:outline-none'
            />
          </div>

          <div className='flex w-full flex-col'>
            <input
              type='password'
              placeholder='Password'
              className='my-2 w-full border-b border-black bg-transparent py-2 text-black outline-none focus:outline-none'
            />
          </div>

          <div className='flex w-full items-center justify-between'>
            <div className='flex w-full items-center'>
              <input type='checkbox' className='mr-2 h-4 w-4' />
              <p className='text-sm'>Remember me</p>
            </div>

            <p className='cursor-pointer whitespace-nowrap text-sm font-medium underline underline-offset-2'>
              Forgot Password?
            </p>
          </div>

          <div className='my-4 flex w-full flex-col'>
            <button className='my-2 flex w-full items-center justify-center rounded-md bg-[#060606] p-4 text-center text-white'>
              Log in
            </button>
            <button className='my-2 flex w-full items-center justify-center rounded-md border-2 border-black bg-white p-4 text-center text-[#060606]'>
              Register
            </button>
          </div>
        </div>

        <div className='flex w-full items-center justify-center'>
          <p className='text-sm font-normal text-black'>
            Dont have account?{' '}
            <span className='cursor-pointer font-semibold underline underline-offset-2'>
              {' '}
              Sign up for free
            </span>
          </p>
        </div>
      </article>
    </section>
  );
}

export default Login;
