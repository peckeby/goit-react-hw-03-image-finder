import PropTypes from 'prop-types';

export default function Modal({ picture, handleClick, handleKeyDown }) {
  return (
    <div
      className="Overlay visually-hidden"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="Modal">
        <img src={picture.largeImageURL} alt={picture.tags} loading="lazy" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  picture: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};
