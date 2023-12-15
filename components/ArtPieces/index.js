import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        </li>
      ))}
    </ul>
  );
}
