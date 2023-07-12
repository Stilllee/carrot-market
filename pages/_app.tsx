import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-screen h-screen max-w-xl mx-auto dark:bg-black">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
