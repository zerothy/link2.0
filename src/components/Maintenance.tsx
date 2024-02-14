import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Maintenance() {
  return (
    <main className={`flex w-[51%] min-h-screen flex-col items-center justify-center p-24 ${inter.className} w-3/5 bg-[url('/images/BunnyBackground.png')] bg-cover`} draggable="false">
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
        </Head>
        <img src="/images/BunnyMaintenance.png" alt="Bunny Logo" className="w-1/5" />
        <h1 className="text-[#01E1FF] font-bold text-4xl" style={{fontFamily: "'Nanum Pen Script', cursive"}}>Sorry, this site is under maintenance</h1>
    </main>
  );
}