import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ artPieces }) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={artPieces}></ArtPieces>
    </div>
  );
}
