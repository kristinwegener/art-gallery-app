import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
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

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error)
    return (
      <div>
        {error.info} - {error.status}
      </div>
    );
  if (isLoading) return <div>loading...</div>;

  if (!data) return <p>no data</p>;

  console.log(data);

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 5000,
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </>
  );
}
