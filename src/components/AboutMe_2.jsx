import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const AboutMe_2 = () => {

    const {ref, inView} = useInView({
        triggerOnce:true, 
        threshold:0.2
      })

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-around items-center space-y-6 sm:space-y-0 mb-8'>
        <motion.div 
                    ref={ref}
                    initial={{opacity:0}}
                    animate={inView ? {opacity:1}:{}}
                    transition={{delay:0.2, duration:0.5}}

                    className='text-center border border-green-400 p-4 rounded-xl hover:shadow-lg  hover:shadow-green-400 cursor-default'>
                    <h3 className='text-4xl md:text-7xl sm:text-3xl font-bold md:my-6 text-green-400'>4+</h3>
                    <motion.p 
                    ref={ref}
                    initial={{opacity:0, y:50}}
                    animate={inView ? {opacity:1, y:0}:{}}
                    transition={{delay:0.4, duration:0.5}}
                    className='text-sm sm:text-base text-gray-400'>Years of Experience in Computer Science</motion.p>
        </motion.div>

        <motion.div
                ref={ref}
                initial={{opacity:0}}
                animate={inView ? {opacity:1}:{}}
                transition={{delay:0.4, duration:0.2}}
                className='text-center border border-green-400 p-4 rounded-xl px-20 hover:shadow-lg hover:shadow-green-400 cursor-default'>
                    <h3 className='text-4xl md:text-7xl sm:text-3xl font-bold md:my-6 text-green-400'>10+</h3>
                    <motion.p 
                    ref={ref}
                    initial={{opacity:0, y:50}}
                    animate={inView ? {opacity:1, y:0}:{}}
                    transition={{delay:0.6, duration:0.5}}
                    className='text-sm sm:text-base text-gray-400'>Project I have Made
                    </motion.p>
        </motion.div>

      </div>
    </div>
  )
}

export default AboutMe_2
