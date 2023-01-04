import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { lazy } from 'react';

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