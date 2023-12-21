import PropTypes from 'prop-types';

export default function AmenityCard({ amenity }) {
  let cardImage = '';
  switch (amenity?.id) {
    case 1:
      cardImage =
        'https://res.cloudinary.com/dpkubiaip/image/upload/f_auto,q_auto/tdqdkvorlvyx1l3nvyoh';
      break;
    case 2:
      cardImage =
        'https://res.cloudinary.com/dpkubiaip/image/upload/f_auto,q_auto/azjlkskbgqeu2bgdorfm';
      break;
    default:
      cardImage =
        'https://res.cloudinary.com/dpkubiaip/image/upload/f_auto,q_auto/re6ud8i5jm7d41ciqvzn';
      break;
  }
  return (
    <div className='card min-w-fit bg-base-100 shadow transition-all duration-300 ease-in-out hover:shadow-xl'>
      <figure className='overflow-hidden'>
        <img
          src={amenity?.amenitieImage || cardImage}
          alt='Shoes'
          className='transition-all duration-300 ease-in-out hover:scale-110 '
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{amenity?.amenitieName}</h2>
        <p>Capacidad máxima: {amenity?.capacity} personas</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={() => {}}>
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}

AmenityCard.propTypes = {
  amenity: PropTypes.object.isRequired,
};
