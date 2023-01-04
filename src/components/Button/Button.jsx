import PropTypes from 'prop-types';

export default function Button({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="Button">
      Load More
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
