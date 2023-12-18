import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Image src={image} width={100} height={100} alt={title} />
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <p>{year}</p>
      <p>{genre}</p>
      <Link href="/art-pieces">
        <button>Back</button>
      </Link>
    </>
  );
}
