import Image from 'next/image'
import Explainer from './components/Explainer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <main className="relative flex flex-col items-center  px-8  min-h-[300vh] overflow-hidden max-w-screen border-2 border-white">
      <Navbar />
      <Hero />
      <Explainer />
      
      
      </main>
  )
}