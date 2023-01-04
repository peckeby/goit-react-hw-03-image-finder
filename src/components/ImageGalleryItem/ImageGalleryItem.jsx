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
