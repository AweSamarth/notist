import Image from 'next/image'
import { useState } from 'react'



export default function Upload(){
    return(
        <main className='h-screen flex flex-col items-center justify-evenly bg-[ #1E1E1E]'>
            <div className="head flex flex-col items-center justify-evenly">
            <h1 className='text-7xl my-5'> Get your Notes</h1>
            <h3 className='text-lg'>Enter a YouTube link or upload a file</h3>
            </div>
            <div className="link w-1020px h-250px ">
            <label>
            <button className='bg-[#162858] w-72 h-14 p-2 rounded'>YT</button>
            <button className='bg-[#1C316A] w-72 h-14 p-2 rounded'>File</button>
                <div className='w-full bg-[#162858] flex flex-col items-center justify-center  mt-0'>
                <input type="text" className='bg-[#0E0E0E] w-[920px] h-[55px] my-[75px] mx-[56px] rounded '/>
                </div>
            </label>
            </div>
            <button className='bg-[#2553C9] w-40 h-20 rounded'>Generate</button>
            <h2 className='italic text-3xl'>enjoy;)</h2>
            <div className="note bg-[#091228] w-[750px] h-[750px]">
            </div>
        </main>
    )
}