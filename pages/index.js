import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ artPieces }) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const randomNumber = getRandomIntInclusive(0, artPieces.length);

  // if (!{ artPieces }) {
  //   return <p>Errorrrrr, artPieces ist undefined</p>;
  // } else if (!{ randomNumber }) {
  //   return <p>Error, randomNumber ist undefined</p>;
  // }

  return (
    <div>
      <h1>Art Gallery App</h1>
      {/* <ArtPieces pieces={data}></ArtPieces> */}
      <Spotlight
        image={artPieces[randomNumber].imageSource}
        artist={artPieces[randomNumber].artist}
        title={artPieces[randomNumber].name}
      />
    </div>
  );
}
