import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <main className="flex flex-col items-center  px-8  min-h-[200vh] overflow-hidden max-w-screen border- border-white">
      <Navbar />
      <Hero />
      
      
      
      </main>
  )
}