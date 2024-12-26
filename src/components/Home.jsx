import React from 'react'
import avatar from '../assets/profile_photo.png'
import {motion} from "motion/react"
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id='home' className='text-white py-10 mt-20'>

        <motion.img 
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{delay:0.2, duration:0.5}}
        className='mx-auto w-2/3 md:w=1/3 lg:w-1/4'
        src={avatar}
        />

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4,duration:0.5
        }}
        className='container mx-auto text-center cursor-default'>
            <motion.h1 
            initial={{opacity:0 ,y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:1, duration:0.5}}
            className='text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4'> Hello, this is Ashwanth 
            <motion.span 
            initial={{opacity:0 ,y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:1.3, duration:0.5}}
            className='text-green-400'> I am a student </motion.span>
            </motion.h1>
            <motion.p 
            initial={{opacity:0 ,y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:1.6, duration:0.5}}
            className='text-gray-300 text-lg mb-8'>A curious mind with a passion for learning and making a positive impact on the world.</motion.p>

            <div className='flex justify-center space-x-4 mb-10'>
                
                <a href='public/CV.pdf' download="Ashwanth_CV.pdf">
                    <motion.button 
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:1.9,duration:0.3}}
                    
                    className='bg-green-400 text-black px-6 py-3 rounded-full hover:bg-green-500'>
                        Download CV
                    </motion.button>
                </a>

                <motion.button 
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                transition={{delay:1.9,duration:0.3}}
                className='text-green-400 py-3 px-6 border border-white border-1 rounded-full hover:border-green-400 hover:text-white' >
                    <Link
                    to='contact'
                    smooth={true}
                    duration={500}
                    offset={-70}
                    > Contact Me </Link>
                </motion.button>
            </div>
        </motion.div>
    </div>
  )
}

export default Home
