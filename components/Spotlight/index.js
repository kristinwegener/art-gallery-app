import ArtPiecesPreview from "../ArtPiecesPreview";

export default function Spotlight({ image, artist, title, isFavorite }) {
  return (
    <>
      <p>Today&apos;s spotlight</p>
      <ArtPiecesPreview
        image={image}
        artist={artist}
        title={title}
        isFavorite={isFavorite}
      />
    </>
  );
}
