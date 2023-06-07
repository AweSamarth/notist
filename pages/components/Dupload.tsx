import Image from 'next/image'
import { SetStateAction, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const underline = 'absolute bottom-{-1px} left-0 right-0 h-{1px}'

export default function Upload(){

    const [selectedBtn,setSelectedBtn] = useState(true)
    const [link,setLink] = useState("enter link")
    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
      setLink(e.target.value);
    };
    return(
        <>
        <main className='min-h-screen flex flex-col items-center  bg-[ #1E1E1E] overflow-scrol'>
            <div className="head flex font-inter flex-col items-center justify-evenly mx-auto my-14">
            <h1 className='text-7xl my-5'> Get your Notes</h1>
            <h3 className='text-lg'>Enter a YouTube link or upload a file</h3>
            </div>
            <div className="link w-1020px h-250px my-10 ">
            <label>
            <motion.button className={` w-72 h-14 p-2 rounded yt ${selectedBtn?"bg-[#3a64d9] ":"bg-[#162858]"}`}
             onClick={() => {setSelectedBtn(true)}}
             >YT 
             {selectedBtn?<motion.div
              className={underline}
              layoutId='underline'
             >

             </motion.div>:null}
             </motion.button>
            
            <motion.button className={` w-72 h-14 p-2 rounded yt ${!selectedBtn?"bg-[#3a64d9] ":"bg-[#162858]"}`} onClick={() => {setSelectedBtn(false)}}>File </motion.button>

                <form className='w-full bg-[#162858] flex flex-col items-center justify-center  mt-0'>
                  <label htmlFor="" className='flex flex-row items-center justify-center p-4'>
                      Link:<input type="text" value={link} onChange={handleChange} className='bg-[#0E0E0E] w-[920px] h-14 my-[75px] mx-4 rounded p-4'/>
                </label>
                </form>
            </label>
            </div>
            <motion.button 
                whileHover={{opacity:0.9}}
                whileTap={{ scale: 0.8 }} 
                className={`bg-[#2553C9] w-40 h-20 rounded m-auto my-2`}
                >
                Generate
            </motion.button>
            <h2 className='italic text-3xl mx-auto my-7'>enjoy;)</h2>
            <p>{link}</p>
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