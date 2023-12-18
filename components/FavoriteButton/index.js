export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button type="button" onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "true" : "false"}
    </button>
  );
}
