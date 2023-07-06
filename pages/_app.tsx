import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen max-w-xl mx-auto dark:bg-black">
      <Component {...pageProps} />
    </div>
  );
}
