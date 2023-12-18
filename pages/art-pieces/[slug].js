import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailPage({ artPieces }) {
  const router = useRouter();
  const { query } = router;
  const slug = query.slug;
  const artPiece = artPieces.find((piece) => piece.slug === slug);
  console.log(artPiece);

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
    />
  );
}
