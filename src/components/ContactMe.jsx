import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { FaPhone, FaEnvelope,} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {useState} from 'react';
const ContactMe = () => {

    const {ref, inView} = useInView({
        triggerOnce:true, 
        threshold:0.2
      })

      
      const [formData, setFormData] = useState({
          name: '',
          userEmail: '',
          subject: '',
          message: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then((response) => {
              if (response.ok) {
                  alert('Email sent successfully!');
              } else {
                  alert('Failed to send email.');
              }
          })
          .catch((error) => console.error('Error:', error));
  };

  return (
    <div id="contact" className=' mb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2
        ref={ref}
        initial={{opacity:0,y:-100}}
        animate={inView?{opacity:1,y:0}:{}}
        transition={{delay:0.3, duration:0.5}}

        className='text-4xl font-bold text-white'
        >Contact <span
        className='text-green-400'
        >Me</span> </motion.h2>
      </div>

      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-default'>

          <motion.div 
          ref={ref}
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{delay:0.2, duration:0.5}}

          className='flex items-center space-x-4'>
            <div className='bg-green-400 p-2 rounded-full'>
              <a href="tel:+917418032651">
                <FaWhatsapp className='text-white w-10 h-10'/> 
              </a>
            </div>
            <div>
              <p className='text-lg font-medium text-green-400'>Call Me / Whatsapp</p>
              <a href="tel:7418032651">
                <p className='text-white hover:text-blue-500'>+91 7418032651</p>
              </a>
            
            </div>
          </motion.div>

          <motion.div 
          ref={ref}
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{delay:0.4, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-green-400 p-4 rounded-full'>
              <a href='mailto: 6ashwanth007@gmail.com' target='_blank'> <FaEnvelope className='text-white w-6 h-6 hover:text-blue-600'/> </a>
            </div>
            <div>
              <p className='text-lg font-medium text-green-400'>Email</p>
              <a href='mailto: 6ashwanth007@gmail.com' target='_blank'> <p className='text-white hover:text-blue-600'>6ashwanth007@gmail.com</p> </a>
            </div>
          </motion.div>

          <motion.div 
          ref={ref}
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{delay:0.4, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-green-400 rounded-full p-2'>
              <a href='https://www.linkedin.com/in/ashwanth-senthilkumar/' target='_blank'> <FaLinkedin className='text-white hover:text-blue-600 w-10 h-10'/>  </a>
            </div>
            <div>
             <a href='https://www.linkedin.com/in/ashwanth-senthilkumar/' target='_blank'> <p className='text-lg font-medium text-green-400 hover:text-blue-600'>LinkedIn</p> </a>

            </div>
          </motion.div>

          <motion.div 
          ref={ref}
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{delay:0.4, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-green-400 rounded-full p-2'>
              <a href='https://www.instagram.com/_ashwanth_6/' target='_blank'> <FaInstagram className='text-white hover:text-pink-500 w-10 h-10'/> </a>
            </div>
            <div>
             <a href='https://www.instagram.com/_ashwanth_6/' target='_blank'> <p className='text-lg font-medium text-green-400 hover:text-pink-500'>Instagram</p> </a>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default ContactMe
