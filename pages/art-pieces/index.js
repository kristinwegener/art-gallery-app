import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function ArtPiecesPage({ data }) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data}></ArtPieces>
    </div>
  );
}
