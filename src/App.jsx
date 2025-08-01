import React from "react";
import { Hero } from "./components/Hero";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const images = [
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554937/raw_7_gkrjt3.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554936/raw_8_af97tc.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554936/raw_12_gor7zp.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554935/raw_10_znwlmi.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554933/raw_9_zqa36a.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554932/raw_6_wyknhy.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554932/raw_5_mkktws.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554928/raw_3_ep2yox.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554930/raw_y5yr7k.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554930/raw_13_dd40ba.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554926/raw_4_r8pqkf.webp",
    "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554931/raw_1_pah4mp.webp",
  ];
  return (
    <div className=" bg-zinc-900 overflow-hidden text-white">
      {/* hero  */}
      <div>
        <Hero />
      </div>
      {/* hero end */}
      <div className=" scale-110 w-full py-2 border-y-4 border-subMain bg-light flex items-center gap-3 text-slate-800 ">
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
        <p className=" hero text-4xl">#</p>
        <p className=" hero text-3xl">BOU</p>
      </div>

      {/* about  */}
      <div id="about" className=" relative flex items-center justify-center w-full h-screen bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554933/raw_11_q2dfwj.webp')] bg-cover bg-no-repeat bg-center">
        <div className="  bg-black/50 w-full h-full flex items-center justify-center flex-col">
          <h1 className=" drop-shadow-[0px_0px_10px_#f8f8f8] heading pt-10 text-7xl text-center md:pt-20">
            ABOUT BOU
          </h1>
          <p className=" ex text-2xl mt-5 text-zinc-200 drop-shadow-[0px_0px_10px_#fff]  text-center w-full md:w-1/2">
            BOU started as just another bear in a cheap suit — clocking in,
            clocking out, and dying slowly in fluorescent lights. But somewhere
            between deadlines and depression, BOU snapped. He ditched the
            spreadsheets, lit the briefcase on fire, and roared through the
            corporate chains. Now a symbol of rebellion, BOU protests the system
            that broke him — until the sirens came. Welcome to BOU: the
            corporate fugitive of Solana.🐻‍💼🔥
          </p>
        </div>
        <div className=" w-full absolute bottom-0 h-40 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900"></div>
      </div>
      {/* about end */}

      {/* how to buy  */}
      <div id="howtobuy" className=" py-10 px-5 md:px-32">
        <h1 className=" drop-shadow-[0px_0px_10px_#f8f8f8] heading pt-10 text-7xl text-center md:py-20">
          HOW TO BUY
        </h1>
        <div className=" md:grid grid-cols-3 gap-10">
          <div className=" relative w-full h-64 p-2 rounded-xl border-4 border-subMain">
            <div className=" absolute -top-10 right-5 w-20 h-20 p-1 border-4 border-y-subMain rounded-full">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554936/raw_12_gor7zp.webp"
                className=" rounded-full h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" w-full px-2 md:px-5 h-full bg-light rounded-xl flex items-center justify-center flex-col gap-4">
              <h1 className="text-zinc-700 text-3xl heading text-center">
                1. Download Phantom wallet
              </h1>
              <p className=" text-center hero text-2xl leading-4 text-zinc-700">
                Download Phantom Wallet or any Solana wallet.
              </p>
            </div>
          </div>
          <div className=" mt-5 md:mt-0 relative w-full h-64 p-2 rounded-xl border-4 border-subMain">
            <div className=" absolute -top-10 right-5 w-20 h-20 p-1 border-4 border-y-subMain rounded-full">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554932/raw_5_mkktws.webp"
                className=" rounded-full h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" w-full px-2 md:px-5 h-full bg-light rounded-xl flex items-center justify-center flex-col gap-4">
              <h1 className="text-zinc-700 text-3xl heading text-center">
                2. Get SOL
              </h1>
              <p className=" text-center hero text-2xl leading-4 text-zinc-700">
                If you don't have SOL yet, you can purchase from any CEX, and
                send it to your SOL wallet.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 relative w-full h-64 p-2 rounded-xl border-4 border-subMain">
            <div className=" absolute -top-10 right-5 w-20 h-20 p-1 border-4 border-y-subMain rounded-full">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554931/raw_14_xlltdx.webp"
                className=" rounded-full h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" w-full px-2 md:px-5 h-full bg-light rounded-xl flex items-center justify-center flex-col gap-4">
              <h1 className="text-zinc-700 text-3xl heading text-center">
                3. Go To Bonk
              </h1>
              <p className=" text-center hero text-2xl leading-4 text-zinc-700">
                After you get your SOL in your wallet, you can head to Bonk.fun.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-10 col-start-2 relative w-full h-64 p-2 rounded-xl border-4 border-subMain">
            <div className=" absolute -top-10 right-5 w-20 h-20 p-1 border-4 border-y-subMain rounded-full">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753554930/raw_y5yr7k.webp"
                className=" rounded-full h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" w-full px-2 md:px-5 h-full bg-light rounded-xl flex items-center justify-center flex-col gap-4">
              <h1 className="text-zinc-700 text-3xl heading text-center">
                4. Swap $BOU
              </h1>
              <p className=" text-center hero text-2xl leading-4 text-zinc-700">
                Click and select $BOU token or paste the Token Contract Address
                into Bonk and swap SOL for $BOU.
              </p>
            </div>
          </div>
        </div>
         <div className="mt-5 w-80 md:w-1/2 bg-light rounded-full px-5 py-2 border-2 border-2 border-white ">
        <p className="truncate">2AqGkS62zxNFCZTpWSi3vcF9rZMYRHv9Pbnq4zA3bonk</p>
        </div>
      </div>
      {/* how to buy end */}

      {/* memes  */}
      <div className=" pb-10">
        <h1 className=" drop-shadow-[0px_0px_10px_#f8f8f8] heading py-10 text-7xl text-center md:py-20">
          OUR MEMES
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 px-2 md:px-32">
          {images.map((image, i) => (
            <div
              key={i}
              className=" w-full h-64 border-2 overflow-hidden border-zinc-200 rounded-3xl mt-5 md:mt-10"
            >
              <img src={image} alt="" className=" w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      {/* memes end */}

      <div className=" pb-10 gap-3 flex items-center justify-center flex-col">
        <p className=" text-2xl heading">© {new Date().getFullYear()} BOU</p>
        <a href="https://x.com/BouSolana">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
}

export default App;
