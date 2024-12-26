import React from 'react'
import { animate, motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const Skills_2 = () => {

    const skill1 = [
        "Web Development", "Web Designing", "Programming",
        "C/C++", "Java", "Python", "JavaScript", "SQL",
        "RDBMS", "MySQL", "HTML", "CSS", "React.js",
        "Machine Learning", "seaborn", "numpy", "pandas"
    ];

    const skill1_List = [...skill1, ...skill1];

    const skill2 = [
        "Active Listening", "Building team", "Maintaining team", "Negotiation", "Working in diverse groups",
        "Analytical thinking", "Motivating and inspiring others", "Understanding others perspectives"
    ];

    const skill2_List = [...skill2, ...skill2];

    const scrollVar1 = {
        animate:{
            x:[0,-2000],
            transition:{x:{repeat : Infinity,
                repeatType:"loop",
                duration:15,
                ease:"linear"
            }}
        }
    };

    const scrollVar2 = {
        animate:{
            x:[-2000,0],
            transition:{x:{repeat : Infinity,
                repeatType:"loop",
                duration:15,
                ease:"linear"
            }}
        }
    };

    const {ref, inView} = useInView({
            triggerOnce:true, 
            threshold:0.2
          })
    

  return (
    <motion.div 
    ref={ref}
    initial={{opacity:0, y:100}}
    animate={inView ? {opacity:1, y:0}:{}}
    transition={{duration:0.7, delay:0.5}}
    className='text-white py-16'>
      <div className='container mx-auto text-center cursor-default'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10 mt-10'> Technical <span className='text-green-400'>Skills</span>  </h2>
        <div className='overflow-hidden relative w-full p-3'>
            <motion.div 
            variants={scrollVar1}
            animate="animate"
            className='whitespace-nowrap flex space-x-10'>
                {skill1_List.map((skill1, index) =>(
                    <motion.div 
                    whileHover={{scale:1.10}}
                    key={index}
                    className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block hover:shadow-md hover:shadow-green-400'>
                        {skill1}
                    </motion.div>
                ))}
            </motion.div>
        </div>

        <h2 className='text-3xl md:text-4xl font-bold mt-16 mb-10'> Soft <span className='text-green-400'>Skills</span>  </h2>

        <div className='overflow-hidden relative w-full mt-5 p-4'>
            <motion.div 
            variants={scrollVar2}
            animate="animate"
            className='whitespace-nowrap flex space-x-10 '>
            {skill2_List.map((skill2, index) =>(
                <motion.div
                whileHover={{scale:1.10}}
                key={index}
                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block hover:shadow-md hover:shadow-green-400'
                >
                    {skill2}
            </motion.div>
            ))}
            </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills_2
