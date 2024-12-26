import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";



const Skill = () => {


    const {ref, inView} = useInView({
        triggerOnce:true, 
        threshold:0.2
      })

  return (
    <div id='skill' className='text-white py-10'>
      <motion.div
      ref={ref}
      initial={{opacity:0, y:50}}
      animate={inView ? {opacity:1, y:0}:{}}
      transition={{duration:0.5}}
      className='containter mx-auto px-4 text-center'
      >
        <h2 className='text-3xl md:text-4xl font-bold mb-20 '>My <span className='text-green-400'>Skills</span> </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default'>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:0.2}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300'
            >
                <FaLaptopCode  className='text-green-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Web developer</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>I specialize in creating user-friendly interfaces, responsive designs in  front-end technologies.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:0.4}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300'
            >

                <FaFigma  className='text-green-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Web designer</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'> I creating visually appealing and user-friendly website layouts. I focus on usability, and responsive design to deliver engaging digital experiences.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:0.6}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300'
            >

                <FaPython  className='text-green-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Python Programmer</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'> I am a Python programmer skilled in developing efficient and scalable solutions for various applications, including web development, data analysis, machine learning.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:0.8}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300'
            >

                <FaGears  className='text-green-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Machine Learning Enthusiast</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>I am passionate about machine learning, specializing in developing predictive models, working with data, and leveraging algorithms to create intelligent systems for real-world applications.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:1.0}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300'
            >

                <FaDatabase  className='text-green-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>SQL Developer</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>I am an SQL developer skilled in designing, implementing, and maintaining databases. I specialize in writing efficient queries, optimizing database performance, and ensuring data integrity for various applications.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:1.2}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300'
            >

                <IoLogoJavascript  className='text-green-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>JavaScript programming</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>I am a JavaScript programmer proficient in creating interactive web applications. I specialize front-end development, using JavaScript to build responsive, user experiences.</p>
            </motion.div>

        </div>
      </motion.div>

    </div>
  )
}

export default Skill
