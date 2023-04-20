import Image from "next/image";
import { Inter, Trykker } from "next/font/google";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.95]);
  const background = useTransform(scrollY, [0, 250], ["#213568", "#0d1325"]);

  return (
    <motion.div
      style={{ background, opacity }}
      className="z-30 fixed h-20 mt-4 pr-16 px-10 bg-navbarBgColor w-[96%] flex justify-between items-center rounded-[10px] "
    >
      <Link href="#" scroll={true} replace={true}>
        <motion.div className=" border-red-500">
          <div className="border- transition-all hover:cursor-pointer font-poppins text-[2.7rem]  font-[400] h-min  ">
            Notist
          </div>
        </motion.div>
      </Link>

      <motion.div className=" gap-12 text-[1.25rem] font-inter font-light flex border-blue-500">
        <Link href="#what" scroll={true} replace={true}>
          {" "}
          <motion.div className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">
            What?
          </motion.div>
        </Link>

        <motion.div className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">
          Why?
        </motion.div>

        <div className="hover:cursor-pointer hover:text-gray-300 px-3 py-1 mt-[0.11rem] transition-all ">
          How?
        </div>

        <motion.div
          className="hover:cursor-pointer hover:text-gray-100 
        hover:bg-[#254fb7] px-3 py-1 mt-[0.11rem] rounded-md transition-all 
         bg-[#2553C9]"
        >
          Try now
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
