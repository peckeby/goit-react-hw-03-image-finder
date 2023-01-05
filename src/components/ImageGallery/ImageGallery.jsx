import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ onClick, apiData }) {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {apiData.map(apiResult => (
        <ImageGalleryItem
          key={apiResult.id}
          propUrl={apiResult.webformatURL}
          propAlt={apiResult.tags}
          propId={apiResult.id}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
