import React from 'react'
import {motion} from "motion/react"
import { useInView } from 'react-intersection-observer'

const Foot = () => {

    const {ref, inView} = useInView({
            triggerOnce:true, 
            threshold:0.2
          })
  return (
    <div>
      <motion.div 
        ref={ref}
        initial={{opacity:0}}
        animate={inView ? {opacity:1}:{}}
        transition={{delay:0.1, duration:0.5}}
        className='mt-48 flex justify-between items-center p-5 text-white border-t-2 border-green-400'>
        <p>2024. All Rights Reserved</p>             
        <p>Ashwanth SenthilKumar</p>        
      </motion.div> 
    </div>
  )
}

export default Foot
