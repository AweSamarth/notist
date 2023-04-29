import Image from 'next/image'
import { useState } from 'react'
import { YoutubeTranscript } from 'youtube-transcript'
import Explainer from './components/Explainer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Onboard from './components/Onboard'


export default function Home() {
  const [isOnboardIntersecting, setIsOnboardIntersecting] = useState(false);
  const serverChecker =async ()=>{
    console.log("checker working till here")
    const response = await fetch("/api/hello",{
        method:"GET",
        headers:{}
        
    })
    
    const data = await response.json();

    console.log(data)

  }



  return (
    <main id="ok" className="relative flex flex-col items-center py-4  px-8  min-h-[300vh] overflow-hidden max-w-screen border-2 border-white">
        <button onClick= {serverChecker}className='w-max px-2 py-4 h-max bg-blue-500'>Checking if this button works</button>
      
      </main>
  )
}