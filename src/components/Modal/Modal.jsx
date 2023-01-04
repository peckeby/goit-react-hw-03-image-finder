export default function Modal({ picture, handleClick, handleKeyDown }) {
  return (
    <div
      className="Overlay visually-hidden"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="Modal">
        <img src={picture.largeImageURL} alt={picture.tags} />
      </div>
    </div>
  );
}
