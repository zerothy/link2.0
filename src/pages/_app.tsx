import Navbar from "@/components/Navbar";
import Trend from "@/components/Trend";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex justify-between">
      <Navbar />
      <Component {...pageProps} />
      <Trend />
    </main>
  );
}
