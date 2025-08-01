import { motion } from "motion/react";
import { AuroraBackground } from "./ui/aurora-background";
import { FaXTwitter } from "react-icons/fa6";

export function Hero() {
  return (
    <AuroraBackground>
      <div className=" z-50 w-full px-5 md:px-32 border-b border-zinc-400">
        <div className=" flex items-center justify-between py-5 ">
          <h1 className="heading text-4xl">$BOU</h1>
          <div className=" hidden md:flex items-center gap-5">
            <a href="/">
              <p className=" hero text-3xl">Home</p>
            </a>
            <a href="#about">
              <p className=" hero text-3xl">About</p>
            </a>
            <a href="#howtobuy">
              <p className=" hero text-3xl">How To Buy</p>
            </a>
          </div>
          <div className=" flex items-center gap-2">
            <a
              href="https://x.com/BouSolana"
              className=" p-1.5 rounded-lg bg-white border-2 border-zinc-300"
            >
              <FaXTwitter className=" text-black" />
            </a>
            <a
              href="https://letsbonk.fun/token/2AqGkS62zxNFCZTpWSi3vcF9rZMYRHv9Pbnq4zA3bonk"
              className=" py-1.5 px-5 rounded-lg bg-white border-2 border-zinc-300"
            >
              <p className=" text-black hero leading-4 text-xl">BUY</p>
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden w-full h-full flex flex-col mt-20 items-center justify-center">
        <h1 className=" text-9xl heading">BOU</h1>
        <h1 className=" text-xl heading">And this, is chemical burn.</h1>
        <div className="mt-5 w-80 md:w-1/2 bg-light rounded-full px-5 py-2 border-2 border-2 border-white ">
        <p className="truncate">2AqGkS62zxNFCZTpWSi3vcF9rZMYRHv9Pbnq4zA3bonk</p>
        </div>
      </div>

      <div className=" w-full h-full relative overflow-hidden">
        <div className=" absolute bottom-0 md:-bottom-16 left-0 right-0">
          <div className=" w-full flex items-center justify-center">
            <div className="md:w-[50vw]">
              <img
                className=" w-full h-full scale-150 object-contain md:ml-40 "
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753556360/f977b90a-5a47-4dba-8fe3-1b88c3dee9d1_removalai_preview_hvnhwo.png"
                alt=""
              />
            </div>
            <div className=" md:w-[50vw]">
              <img
                className=" w-full h-full object-contain scale-150 md:-ml-40"
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753556442/Removal-304_rcjejn_a_hflip_kiq4kr.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
