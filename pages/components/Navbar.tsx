import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className=" h-[4.4rem] mt-4 pr-16 px-10 bg-navbarBgColor w-[98%] flex justify-between items-center rounded-[10px] ">

      <div className=" border-red-500">
        <div className="border- transition-all hover:cursor-pointer font-poppins text-[2.7rem]  font-[400] h-min  ">
          Notist
        </div>
      </div>

      <motion.div className=" gap-11 text-[1.22rem] font-inter font-light flex border-blue-500">
        <motion.div layout className=" hover:cursor-pointer hover:text-gray-300 transition-all px-3 py-1 mt-[0.11rem] ">What?</motion.div>

        <div className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">Why?</div>

        <div className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">How?</div>

        <div className="hover:cursor-pointer hover:bg-[#254fb7] px-3 py-1 mt-[0.11rem] rounded-md transition-all  bg-[#2553C9]">Try now</div>
      </motion.div>
    </div>
  );
}
