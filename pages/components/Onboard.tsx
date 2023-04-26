import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Onboard(props:any) {

  return (
    <main  className="  border-red-500 flex min-h-screen flex-col items-center w-full text-center justify-between">
      <div className="flex  border-red-500 w-full h-4"></div>

      <div className="flex flex-col  gap-2">
        <div className=" h-max p-2 flex font-inter font-extralight text-[3.5rem] leading-tight  border-red-500">
          Soo... you in or nah?
        </div>
        <div className="flex p-2 justify-center  mb-4 font-inter italic font-thin text-2xl border-red-500 ">
          wtf are you even waiting for?
        </div>

        <div><motion.button
          className=" w-[6.5rem] h-14 hover:cursor-pointer select-none hover:text-gray-100 
        hover:bg-[#254fb7] px-3 font-inter font-light text-lg mt-[0.11rem] rounded-md transition-all 
         bg-[#2553C9] opacity-1"
        >
          Try now
        </motion.button></div>
      </div>
      <div className="flex justify-center mb-3  w-full">
      <motion.div
      className="z-30 h-[5.5rem] mt-4 mb-4 pr-16 px-10 bg-navbarBgColor w-[96%] flex justify-between items-center rounded-[10px] ">
        <div className="font-inter font-light text-lg text-[#D7D7D7]  border-red-500">Made by Haardik, Divij and Samarth </div> 
        <div className="text-3xl"><FontAwesomeIcon icon={faGithub} className="text-[#D7D7D7] hover:cursor-pointer transition-all hover:text-white" /> </div>

      </motion.div>
      </div>
    </main>
  );
}
