export default function Button({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="Button">
      Load More
    </button>
  );
}
