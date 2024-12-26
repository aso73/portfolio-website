import React from 'react'
import Abt from '../assets/abt.png'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const AboutMe = () => {

  const {ref, inView} = useInView({
    triggerOnce:true, 
    threshold:0.5
  })
  return (
    <div id="about" className='text-white py-8 cursor-default'>
        <div className='container mx-auto px-4'>
            <motion.h2 
            ref={ref}
            initial={{opacity:0, y:50}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.1, duration:0.3}}
            className='text-3xl md:text-4xl font-bold mb-8 cursor-default justify-center items-center text-center'>About <span className='text-green-400'>Me</span></motion.h2>
            <br/>
            <div className='px-16'>
              <motion.p 
              ref={ref}
              initial={{opacity:0, y:50}}
              animate = {inView ? {opacity:1, y:0} : {}}
              transition={{delay:0.3, duration:0.3}}
              className='mb-12 text-gray-400 text-center'>
                  I am currently pursuing my degree in <b className='text-gray-300'>Computer Science and Engineering</b> from <b className='text-gray-300'>Sri Ramakrishna Engineering College [SREC] </b>.  I have worked on various software projects, focusing on <b className='text-gray-300'>web development</b> and <b className='text-gray-300'>Machine Learning</b> .
              </motion.p>
            </div>

            <div className='flex flex-col md:flex-row items-center '>
                <motion.div 
                ref={ref}
                initial={{opacity:0, x:-50}}
                animate={inView ? {opacity:1, x:0}:{}}
                transition={{delay:0.6, duration:0.3}}
                

                className='mb-8 md:md-0 md:mr-8 flex justify-center'>
                    <img
                        className='w-2/3 sm:1/2 md:w-10/12'
                        src={Abt}
                    />
                </motion.div>
                <motion.p 
                ref={ref}
                initial={{opacity:0, x:50}}
                animate={inView ? {opacity:1, x:0}:{}}
                transition={{delay:0.6, duration:0.3}}

                className='md:w-1/2 text-gray-300 px-4 md:px-0 text-base sm:text-lg md:text-xl justify-normal'>
                    I am a passionate and driven Junior Web Developer and Machine Learning enthusiast with hands-on experience in building impactful projects. <br/>  Additionally, I have expanded my expertise in Python, Machine Learning, and Data Science through LinkedIn Learning. During this journey. <br/>I am eager to bring my technical skills, creativity, and problem-solving abilities to real-world challenges and am actively seeking internship opportunities to grow further in the fields of Web Development, Machine Learning, and Data Science.</motion.p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
