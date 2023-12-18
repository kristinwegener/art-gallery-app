export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return <button>{isFavorite ? "true" : "false"}</button>;
}
