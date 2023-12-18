import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = async (URL) => {
    const res = await fetch(URL);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  const { data, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    if (data && data.length > 0) {
      const updatedArtPiecesInfo = data.map((piece) => ({
        slug: piece.slug, // assuming each piece has a slug property
        isFavorite: false, // initializing all as not favorite
      }));
      setArtPiecesInfo(updatedArtPiecesInfo);
    }
  }, [data]);

  console.log(artPiecesInfo);

  if (error)
    return (
      <div>
        {error.info} - {error.status}
      </div>
    );
  if (isLoading) return <div>loading...</div>;
  if (!data) return <p>no data</p>;

  function onToggleFavorite({ slug }) {
    setArtPiecesInfo((piece) =>
      piece.slug === slug
        ? { ...artPiecesInfo, isFavorite: !piece.isFavorite }
        : isFavorite
    );
  }

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 5000,
        }}
      >
        <GlobalStyle />
        <Component
          {...pageProps}
          artPieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
