import Image from "next/image";
import { Inter } from "next/font/google";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  const [what, setWhat] = useState(true);
  const [why, setWhy] = useState(false);
  const [how, setHow] = useState(false);
  const [part, setPart] = useState(-1);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Container scroll: ", latest);
    if (latest < 0.5) {
      setPart(1);
      console.log(part);
    } else if (latest >= 0.5 && latest < 0.6) {
      setPart(2);
      console.log(part);
    } else if (latest >= 0.6) {
      setPart(3);
      console.log(part);
    }
  });

  function useParallax(value: MotionValue<number>, distance: number) {
    console.log(distance);
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  return (
    <AnimatePresence>
      <main className=" h-max  border-2 overflow-y-visible relative border-red-500 w-full">
        <div className="min-h-screen flex flex-col justify-center  border-2 overflow-y-visible">
          {part === 1 || part === -1 ? (
            <motion.div
              key={1}
              className="border-2 border-red-500 text-center overflow-y-visible flex flex-col gap-3 items-center "
              initial={{ opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              exit={{ y: -100, opacity: 0 }}
            >
              <div
                className="text-[4.2rem] font-manrope font-light h-max     w-max text-transparent 
    bg-clip-text bg-gradient-to-br from-[#2E5CD0] to-[#384564]"
              >
                <span className="font-semibold bg-[#2E5CD0] text-transparent bg-clip-text">
                  10x
                </span>{" "}
                your learning speed
              </div>
              <div className=" text-[#B1B6E1] font-inter text-3xl font-light">
                why watch in 2x when you can learn in 10x?
              </div>
            </motion.div>
          ) : part === 2 ? (
            <motion.div
              key={2}
              className="border-2 border-red-500 text-center overflow-y-visible flex flex-col gap-3 items-center "
              initial={{ opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              exit={{ y: -100, opacity: 0 }}
            >
              testing it out
            </motion.div>
          ) : (
            <motion.div
              key={3}
              className="border-2 border-red-500 text-center overflow-y-visible flex flex-col gap-3 items-center "
              initial={{ opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              exit={{ y: -100, opacity: 0 }}
            >
              <div
                className="text-[4.2rem] font-manrope font-light h-max     w-max text-transparent 
    bg-clip-text bg-gradient-to-br from-[#2E5CD0] to-[#384564]"
              >
                <span className="font-semibold bg-[#2E5CD0] text-transparent bg-clip-text">
                  10x
                </span>{" "}
                your coughinh speed
              </div>
              <div className=" text-[#B1B6E1] font-inter text-3xl font-light">
                why cough cough in 2x when you can cough cough cough cough?
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </AnimatePresence>
  );
}
