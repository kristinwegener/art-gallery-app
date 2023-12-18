import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  isFavorite,
  slug,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} width={100} height={100} alt={title} />
      </Link>
      <p>{title}</p>
      <p>{artist}</p>
      <FavoriteButton isFavorite={isFavorite} />
    </>
  );
}
