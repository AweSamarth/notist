import Image from "next/image";
import { Inter } from "next/font/google";
import {
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

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const { scrollYProgress } = useScroll({ container: ref });

  const y = useParallax(scrollYProgress, 10);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Container scroll: ", latest);
  });

  function useParallax(value: MotionValue<number>, distance: number) {
    console.log(distance);
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  return (
    <>

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className=" stroke-[#fafafa] opacity-[30%]"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <main
        ref={ref}
        className="h-screen  border-2 overflow-y-visible relative border-red-500 w-full"
      >
        <div className="min-h-screen flex flex-col justify-center  border-2 overflow-y-visible">
          <motion.div
            className="border- border-red-500 text-center overflow-y-visible flex flex-col gap-3 items-center "
            style={{ y }}
            animate={why ? { y: -100, opacity: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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

          <div
            onClick={() => setWhy((prev) => !prev)}
            className="text-black text-center bg-white"
          >
            button
          </div>
        </div>
      </main>
      <ul
        className="border-2 border-red-500 flex flex-col list-none h-[200px] overflow-y-scroll p-5 w-full m-0"
        ref={ref}
      >
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>

        <li className="bg-white text-black">ds</li>

        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
        <li className="bg-white text-black">ds</li>
      </ul>
    </>
  );
}
