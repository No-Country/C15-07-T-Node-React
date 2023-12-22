import { Link } from 'react-router-dom';
import notFound from '../../assets/notfound.svg';
import NavBar from '../../components/NavBar/NavBar';

function NotFound() {
  return (
    <>
      <NavBar />
      <div className='flex grow items-center justify-center bg-[#f8f8f8]'>
        <div className='text-center'>
          <div className='flex items-center justify-center'>
            <img className='w-40 sm:w-60 lg:w-96' src={notFound} alt='' />
          </div>
          <p className='pb-6 '>La página que estás buscando no existe.</p>
          <Link to={'/'} className='btn btn-primary'>
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
