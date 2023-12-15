import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const randomNumber = getRandomIntInclusive(0, data.length);

  return (
    <div>
      <h1>Art Gallery App</h1>
      {/* <ArtPieces pieces={data}></ArtPieces> */}
      <Spotlight
        image={data[randomNumber].imageSource}
        artist={data[randomNumber].artist}
      />
    </div>
  );
}
