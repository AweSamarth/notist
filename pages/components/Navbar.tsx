import Image from "next/image";
import { Inter, Trykker } from "next/font/google";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });


export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.95]);
  const background = useTransform(scrollY, [0, 250], ["#213568", "#0d1325"]);
  const [isTryNowVisible, setIsTryNowVisible] = useState(true);
  const [show, setShow] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Container scroll: ", latest);
    if (latest < 0.4) {
    } else if (latest >= 0.4 && latest < 0.6) {
      // console.log(part);
    } else if (latest >= 0.6) {
    }
  });


  return (
    <motion.div
      style={{ background, opacity }}
      className="z-30 fixed h-20 mt-4 pr-16 px-10 bg-navbarBgColor w-[96%] flex justify-between items-center rounded-[10px] "
    >
      
        <motion.div className=" border-red-500">
          <div onClick={()=>{window.scrollTo({top:0, behavior:"smooth"})}} className="border- transition-all hover:cursor-pointer font-poppins text-[2.7rem]  font-[400] h-min  ">
            notist
          </div>
        </motion.div>

      <motion.div className=" gap-12 text-[1.25rem] font-inter font-light flex border-blue-500">
          {" "}
          <motion.div onClick={()=>{window.scrollTo({top:900, behavior:"smooth"})}} className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">
            What?
          </motion.div>

          <motion.div onClick={()=>{window.scrollTo({top:1800, behavior:"smooth"})}} className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">
          Why?
        </motion.div>

        <motion.div onClick={()=>{window.scrollTo({top:2500, behavior:"smooth"})}}className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">
          How?
        </motion.div>

        <motion.button
          className={`hover:cursor-pointer hover:text-gray-100 
        hover:bg-[#254fb7] font-inter font-light px-3 py-1 mt-[0.11rem] rounded-md transition-all 
         bg-[#2553C9]`}
        >
          Try now
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
