import PropTypes from 'prop-types';

export default function UserAvatar({ image }) {
  return (
    <div className='avatar'>
      <div className='w-32 rounded'>
        <img src={image} />
      </div>
    </div>
  );
}

UserAvatar.propTypes = {
  image: PropTypes.string,
};
