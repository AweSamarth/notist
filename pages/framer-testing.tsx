import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion, useMotionValueEvent, useScroll, useTransform, MotionValue } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Testing() {
    const { scrollYProgress } = useScroll()

    function useParallax(value: MotionValue<number>, distance: number) {
      console.log(distance)
      return useTransform(value, [0, 1], [-distance, distance]);
    }

    const y = useParallax(scrollYProgress, 320);

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    //   })

      const handleViewportLeave = () => {
        console.log("Component has left the viewport");
      };
    
  return (
    <motion.main
    className="flex select-none flex-col items-center border-2 border-none min-h-[200vh] bg-gradient-to-bl from-orange-900 to-orange-300 text-white"
    transition={{ease:"easeInOut"}}
    >
      <div className='h-screen  flex flex-col justify-end ' >
      <motion.div
      style={{y}}
          layout
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={0.5}
          initial = {{opacity:0, color:"white", }}
          whileInView={{opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
          onViewportLeave={handleViewportLeave}
          
          whileTap={{scale:2, cursor:'pointer',  color:"blue"}}
          whileHover={{cursor:'pointer'}}
          className="transition-colors  "
          >
          
      Something that may or may not be going on well<br /> im just testing out some<br /> stuff so would you mind giving me 
      some 
      </motion.div>
      </div>

      
      </motion.main>
  )
}