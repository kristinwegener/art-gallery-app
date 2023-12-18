import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            slug={piece.slug}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
