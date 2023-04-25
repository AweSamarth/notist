import Image from 'next/image'
import { useState } from 'react'
import Explainer from './components/Explainer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Onboard from './components/Onboard'


export default function Home() {
  const [isOnboardIntersecting, setIsOnboardIntersecting] = useState(false);

  return (
    <main id="ok" className="relative flex flex-col items-center  px-8  min-h-[300vh] overflow-hidden max-w-screen border-2 border-white">
      <Navbar />
      <Hero />
      <Explainer />
      <Onboard />
      
      
      </main>
  )
}