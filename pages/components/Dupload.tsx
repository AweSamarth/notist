import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const tabs = []

export default function Upload(){
    const [selectedBtn,setSelectedBtn] = useState(true)
    return(
        <>
        <main className='min-h-screen flex flex-col items-center  bg-[ #1E1E1E] overflow-scrol'>
            <div className="head flex font-inter flex-col items-center justify-evenly mx-auto my-14">
            <h1 className='text-7xl my-5'> Get your Notes</h1>
            <h3 className='text-lg'>Enter a YouTube link or upload a file</h3>
            </div>
            <div className="link w-1020px h-250px my-10 ">
            <label>
            <motion.button className='bg-[#162858] w-72 h-14 p-2 rounded yt' onClick={() => setSelectedBtn(true)}>YT {selectedBtn? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}</motion.button>
            <motion.button className='bg-[#1C316A] w-72 h-14 p-2 rounded file' onClick={() => setSelectedBtn(false)}>File {!selectedBtn? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}</motion.button>

                <div className='w-full bg-[#162858] flex flex-col items-center justify-center  mt-0'>
                <input type="text" className='bg-[#0E0E0E] w-[920px] h-[55px] my-[75px] mx-[56px] rounded '/>
                </div>
            </label>
            </div>
            <button className='bg-[#2553C9] w-40 h-20 rounded m-auto my-2'>Generate</button>
            <h2 className='italic text-3xl mx-auto my-7'>enjoy;)</h2>
            <div className="note bg-[#091228] w-max h-max overflow-auto">
            </div>
        </main>
        <main>
        <AnimatePresence>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
          </motion.button>
        </AnimatePresence>
      </main>
      </>
    )
}