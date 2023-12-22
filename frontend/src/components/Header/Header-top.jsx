import { useUserStore } from '../../store/userStore';
import capitalize from '../../utils/capitalize';

function HeaderTop() {
  const user = useUserStore((state) => state.user);
  const fechaActual = new Date();

  const diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  const diaSemana = diasSemana[fechaActual.getDay()];
  const diaMes = fechaActual.getDate();
  const mes = meses[fechaActual.getMonth()];
  const año = fechaActual.getFullYear();

  const fechaFormateada = `${diaSemana} ${diaMes} de ${mes}, ${año}`;
  return (
    <header className='w-full'>
      <div className='flex items-center justify-between px-1 py-7'>
        <h4 className='text-base font-normal text-gray-500'>
          <span className='font-bold text-gray-900'>
            Hola {user && capitalize(user?.firstName)} -
          </span>{' '}
          Esto es lo que está pasando con tu condominio hoy.
        </h4>
        <p className='text-base font-semibold '>{fechaFormateada}</p>
      </div>
    </header>
  );
}
export default HeaderTop;
