import Image from "next/image";

export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} width={100} height={100} alt={title} />
      <p>{title}</p>
      <p>{artist}</p>
    </>
  );
}
