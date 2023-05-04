import {useState} from 'react'
import { AnimatePresence,motion } from 'framer-motion'


const main ='w-{250px} h-{250px} bg-cyan rounded-lg '

export default function test(){
const [btn,setbtn] = useState(true)
function handleClick(a:boolean){
    setbtn(!a)
}
return (
    <main>
        <motion.h1
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
        >
            hello there
        </motion.h1>
        <motion.button
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            className={main + " "+ btn?'on':'off'}
            onClick ={()=>handleClick(btn)}
        >
        </motion.button>
    </main>
)
}