import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <main className="flex flex-col items-center border-2 justify-between min-h-screen">
      <Navbar />
      
      <Hero />
      
      
      
      </main>
  )
}