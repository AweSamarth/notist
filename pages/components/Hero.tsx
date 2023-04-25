import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, MotionValue, useMotionValue, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {

  return (
    <main  className="h-screen  relative border-red-500 w-full">
      <motion.div
        className=" border-white -left-48 bottom-12 absolute rounded-full h-[253px] w-[253px] bg-[#1B2B54] "
        animate={{ y: [0, -25, 0], x:[0,5,0] }}
        initial={true}
        transition={{
          duration: 11,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className=" overflow-x-hidden border-white  -right-24 top-28  absolute rounded-full h-[132px] w-[132px] bg-[#303C5A]"
        animate={{ y: [0, 25, 0], x:[0,-5,0] }}
        initial={true}
        transition={{
          duration: 11,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>

      <div className=" h-[calc(100vh)] flex flex-col justify-between  overflow-hidden">


        <div></div>



        <motion.div 
        className=" border-red-500 text-center flex flex-col gap-3 mt-16 items-center ">
        
        
          <div className="text-[4.2rem] font-manrope font-light h-max     w-max text-transparent 
          bg-clip-text bg-gradient-to-br from-[#2E5CD0] to-[#384564]">
            <span className="font-semibold bg-[#2E5CD0] text-transparent bg-clip-text">10x</span> your learning speed
          </div>
          <div className=" text-[#B1B6E1] font-inter text-3xl font-light">why watch in 2x when you can learn in 10x?</div>
          
        </motion.div>



        <motion.div 
        animate={{y:[0,-10,0]}}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}

        className="border- text-center mb-8 text-2xl">
        <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </div>

    </main>
  );
}
