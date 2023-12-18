import ArtPiecesPreview from "../ArtPiecesPreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecesPreview
              image={piece.imageSource}
              artist={piece.artist}
              title={piece.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
