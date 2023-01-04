import PropTypes from 'prop-types';

export default function ImageGalleryItem({ propUrl, propAlt, propId }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={propUrl}
        alt={propAlt}
        id={propId}
        className="ImageGalleryItem-image"
        loading="lazy"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  propUrl: PropTypes.string.isRequired,
  propAlt: PropTypes.string.isRequired,
  propId: PropTypes.number.isRequired,
};
