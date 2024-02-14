import Image from "next/image";
import { Inter } from "next/font/google";
import Data from "../data/data.json";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const DataShown = ({name, date, snap, profilePic, tracker}: {name: string, date: string, snap: string, profilePic: string, tracker: number}) => {
  const [moreButton, setMoreButton] = useState(false);

  //TODO: Cari cara biar dia kalo snap lebih dari 5 baris, dia bakal nge-ellipsis
  //TODO: Cari cara biar dia kalo panjang snap melebihi batas, dia buat newline
  return (
    <div className={`w-full ${tracker>1 ? "border-b-2" : "border-y-2"} border-slate-100 cursor-pointer`} style={{fontFamily: "'Poppins', cursive"}}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      
      <img src={profilePic} className="w-10 py-2 pl-2 inline hover:brightness-[.75] duration-300 hover:ease-in-out" />
      <div className="inline text-sm font-black px-2 hover:underline">{name}</div>
      <div className="inline text-xs font-medium text-slate-400"> {date}</div> 
      <img 
        onMouseEnter={() => setMoreButton(true)}
        onMouseLeave={() => setMoreButton(false)}
        src={moreButton ? "/images/MoreBlue.png" : "/images/MoreBlack.png"} 
        className="inline w-8 p-2 float-end mr-2 my-2 duration-300 hover:bg-cyan-100 hover:rounded-full" 
      />
      <p className="text-sm font-medium px-12 text-slate-800 text-wrap w-full break-words">
        {snap}
      </p>
    </div>
  );
}

const HeaderHome = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  const [mouseDown, setMouseDown] = useState(false);

  return (
    <div 
      className="font-bold flex justify-around cursor-pointer"
    >
      <div
        onClick={() => {
          setActive1(true);
          setActive2(false);
        }}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        className={`py-4 px-[10.4rem] border-r-2 border-slate-100 ${active1 ? "text-sm underline underline-offset-[18px] decoration-4 decoration-[#01E1FF] text-black" : "text-sm text-slate-400" } hover:bg-slate-200 duration-300 hover:transition-all ${mouseDown && "scale-95"}`}
      >For you</div>
      <div
        onClick={() => {
          setActive1(false);
          setActive2(true);
        }}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        className={`py-4 px-[10.4rem] ${active2 ? "text-sm underline underline-offset-[18px] decoration-4 decoration-[#01E1FF] text-black" : "text-sm text-slate-400" } hover:bg-slate-200 duration-300 hover:transition-all ${mouseDown && "scale-95"}`}
      >Following</div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col w-[51%] ${inter.className}  `}
    >
      <HeaderHome />
      {
        Data.map((item) => (
          <DataShown key={item.id} name={item.name} date={item.date} snap={item.snap} profilePic={item.profilePic} tracker={item.id} />
        ))
      }
    </main>
  );
}
