import { Link } from 'react-router-dom';
import { DEVELOPERS, LOGIN } from '../../router/paths';

export default function Home() {
  return (
    <div className='hero min-h-screen bg-neutral'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src='/condominium.svg' className='max-w-sm rounded-lg ' />
        <div>
          <h1 className='text-5xl font-bold'>Condominiums</h1>
          <p className='py-6'>
            Tu aliado perfecto en la administración de propiedades. Diseñada
            pensando en la eficiencia y facilidad de uso, nuestra plataforma
            transforma la manera en que los condominios y conjuntos
            residenciales manejan sus operaciones diarias. Desde la organización
            de pagos y cuotas, hasta la comunicación efectiva entre vecinos y la
            administración, Condominiums ofrece una solución integral para una
            gestión de propiedades sin complicaciones.
          </p>
          <Link to={LOGIN} className='btn btn-primary'>
            Inicia Sesión
          </Link>
        </div>
      </div>
      <div className='absolute bottom-8'>
        <Link to={DEVELOPERS} className='btn btn-ghost text-xl'>
          {' '}
          {`</>`}
        </Link>
      </div>
    </div>
  );
}
