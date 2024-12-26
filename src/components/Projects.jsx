import React from 'react'
import pro1 from '../assets/pro1.jpg'
import pro3 from '../assets/pro3.png'
import pro4 from '../assets/pro4.jpg'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const Projects = () => {

    const pro = [
        {
          id:1,
          title:"Smart Energy Forecasting:Predicting Power Demand",
          description:"The Smart Energy Forecasting: Machine Learning model that predicting Power Demand project focuses on accurately predicting future energy consumption to help utilities and organizations optimize resources.",
          image:pro1,
          link:'https://github.com/007ash/Electricity-Demand-Forecasting'
        },
        
        {
          id:2,
          title:"Text-To-Speech Website",
          description:"Text-to-Speech Website: A web platform that converts written text into natural-sounding speech, offering customizable voice options for accessibility and convenience.",
          image:pro3,
          link:"link3"
        },
        {
            id:3,
            title:"Supply Chain Forecasting for Inventory Management",
            description:"Supply Chain Forecasting for Inventory Management: A system that uses demand forecasting and analytics to optimize inventory levels, reduce costs, and improve supply chain efficiency.",
            image:pro4,
            link:"link4"
        }
      ]

      const {ref, inView} = useInView({
        triggerOnce:true, 
        threshold:0.2
      })

  return (
    <div id='project' className='py=12 mt-20 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <motion.h2 
        ref={ref}
        initial={{opacity:0,y:50}}
        animate={inView?{opacity:1,y:0}:{}}
        transition={{delay:0.3, duration:0.5}}
        className='text-3xl md:text-4xl font-bold text-white text-center mb-12 cursor-default'>My <span className='text-green-400'>Projects</span></motion.h2>

      </div>

      <motion.div 
      
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20 cursor-default'>
        {
          pro.map((pro) => (
            <motion.div 
            ref={ref}
            initial={{opacity:0,scale:0.8}}
            animate={inView?{opacity:1,scale:1}:{opacity:0,scale:0.8}}
            transition={{delay: (pro.id) * 0.2,  duration:0.5}}

            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
            key={pro.id}>

              <img 
              className='w-full h-48 object-cover'
              src={pro.image}/>
              <div className='p-6'>

                <h3 className='text-xl text-white font-semibold mb-2'>{pro.title}</h3>
                <p
                className='text-slate-400 mb-4 '
                >{pro.description}</p> 

                <motion.a 
                href={pro.link} target='_blank' className=' border border-green-400 text-green-400 px-4 py-2 rounded-full hover:bg-green-400 hover:text-black transition'>Details</motion.a> 
              </div>
            </motion.div>

          ))
        }
      </motion.div>
      
    </div>
  )
}

export default Projects
