import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} width={100} height={100} alt={title} />
      <p>{title}</p>
      <p>{artist}</p>
      <FavoriteButton />
    </>
  );
}
