import ArtPiecesPreview from "../ArtPiecesPreview";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({ image, artist, title }) {
  return (
    <>
      <p>Today&apos;s spotlight</p>
      <ArtPiecesPreview image={image} artist={artist} title={title} />
    </>
  );
}
