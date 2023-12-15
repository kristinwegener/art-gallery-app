import useSWR from "swr";
import { useRouter } from "next/router";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading, mutate } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) {
    return <h1>Oops.... ERRORRRRR.</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) return <p>no data</p>;

  console.log(data);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const randomNumber = getRandomIntInclusive(0, data.length);

  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data}></ArtPieces>
      <Spotlight
        image={data[randomNumber].imageSource}
        artist={data[randomNumber].artist}
      />
    </div>
  );
}
