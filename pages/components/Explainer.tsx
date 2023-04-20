import Image from "next/image";
import { Inter } from "next/font/google";
import slotMachine from "../../public/slot-machine.png";
import roboFist from "../../public/robofist.svg";
import openAi from "../../public/openai.png"
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
import { machine } from "os";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  const [what, setWhat] = useState(true);
  const [why, setWhy] = useState(false);
  const [how, setHow] = useState(false);
  const [part, setPart] = useState(-1);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Container scroll: ", latest);
    if (latest < 0.3) {
      setPart(1);
      console.log(part);
    } else if (latest >= 0.3 && latest < 0.6) {
      setPart(2);
      console.log(part);
    } else if (latest >= 0.6) {
      setPart(3);
      console.log(part);
    }
  });

  function useParallax(value: MotionValue<number>, distance: number) {
    console.log(distance);
    return useTransform(value, [0.2, 0.7], [0, distance]);
  }

  const y = useParallax(scrollYProgress, 1700);

  return (
    <main className=" h-max  border-2 overflow-y-visible relative border-red-500 w-full">
      <motion.div
        className="border-2 border-white -left-24 top-[24rem] absolute h-[132px] w-[132px] bg-[#303C5A] rounded-full  "
        animate={{ y: [0, -25, 0], x: [0, 5, 0] }}
        initial={true}
        transition={{
          duration: 11,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        id="right"
        className=" overflow-x-hidden border-white  -right-16 top-28  absolute rounded-full h-[150px] w-[150px] bg-[#1B2B54] "
        animate={{ y: [0, 100, 0], x: [0, -25, 25, 0] }}
        initial={true}
        transition={{
          duration: 11,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div
        layout
        className="h-[300vh] mt-64 flex flex-col justify-start overflow-y-visible"
      >
        <motion.div
          style={{ y }}
          className="w-full absolute h-max m-auto  border-green-500  overflow-y-visible flex flex-col gap-3  justify-center"
        >
          {/* <div className="relative">ok then bt</div> */}
          <AnimatePresence>
            {part === 1 || part === -1 ? (
              <motion.div
                key={1}
                className="absolute w-full    border-2 border-red-500"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ y: -50, opacity: 0 }}
              >
                <div id="what" className="px-4 flex justify-between">
                  <div className="flex flex-col border-2 w-[60%]">
                    <div className=" font-inter text-5xl mb-6 font-extralight">
                      What is Notist?
                    </div>
                    <div className="font-inter text-2xl mb-6 font-thin italic">
                      Natural Distractedness 🤝 Artificial Intelligence
                    </div>
                    <div className="border-2  font-inter font-extralight text-[1.3rem] leading-6">
                      If you're seeing this and you're in uni right now,
                      congratulations mf you just hit the jackpot
                      <br />
                      <br /> Notist is a productivity tool that can provide you
                      with accurate and comprehensive lecture notes in record
                      time, just from a video you give to it!
                      <br />
                      <br />
                      It currently supports 57 languages and makes notes in
                      English. View the full list of supported languages here.
                    </div>
                  </div>
                  <div className="flex border-2 w-max flex-col justify-center ">
                    <div className="h-max border-2">
                      <Image alt="slot machine image" src={slotMachine} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : part === 2 ? (
              <motion.div
                key={2}
                className="absolute w-full   border-2 border-red-500"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ y: -50, opacity: 0 }}
              >
                <div className="px-4 flex justify-between">
                  <div className="flex flex-col border-2 w-[60%]">
                    <div className=" font-inter text-5xl mb-6 font-extralight">
                      Why Notist?
                    </div>
                    <div className="font-inter text-2xl mb-6 font-thin italic">
                      We're in our TikTok/Reels era{" "}
                    </div>
                    <div className="border-2  font-inter font-extralight text-[1.3rem] leading-6">
                      As our generation's attention span reduces and our brains
                      corrode, we desperately need a messiah to save us. Notist
                      is exactly that.
                      <br />
                      <br />
                      With Notist, you can 10x your learning speed and get the
                      most out of every video you watch (or don't).
                      <br />
                      <br />
                      Just enter a youtube link or upload a media file. Both
                      videos and audio files will work.
                    </div>
                  </div>
                  <div className="flex border-2 w-max flex-col justify-center ">
                    <div className="h-max border-2">
                      <Image alt="slot machine image" src={roboFist} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={3}
                className="absolute w-full  border-2 border-red-500"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ y: -50, opacity: 0 }}
              >
                <div className="px-4 flex justify-between">
                  <div className="flex flex-col border-2 w-[60%]">
                    <div className=" font-inter text-5xl mb-6 font-extralight">
                      How it Works{" "}
                      <div className="font-inter text-2xl mb-6 font-thin italic">
                        A little sneak peek behind the scenes{" "}
                      </div>
                    </div>
                    <div className="border-2  font-inter font-extralight text-[1.3rem] leading-6">
                      Cutting edge AI technologies are at the core of Notist's
                      functionality.
                      <br /><br />
                      By using Whisper and GPT-3, both tools by
                      OpenAI, Notist generates transcripts of your videos and
                      makes easy-to-understand notes by using them. If you enter
                      a YouTube link which already has transcripts, you will get
                      a faster response. 
                      <br /><br />
                      All our code is open source and you can
                      check it out using this link
                    </div>
                  </div>
                  <div className="flex border-2 w-max flex-col justify-center ">
                    <div className="h-max border-2">
                      <Image alt="slot machine image" src={openAi} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </main>
  );
}
