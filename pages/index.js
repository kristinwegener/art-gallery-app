import useSWR from "swr";
import { useRouter } from "next/router";
import ArtPieces from "@/components/ArtPieces";

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

  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data}></ArtPieces>
    </div>
  );
}
