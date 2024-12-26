import React, { useState, useTransition } from 'react'
import { LuMenu } from "react-icons/lu";
import { RiCloseLargeLine } from "react-icons/ri";
import {Link, link} from "react-scroll"

const NavBar = () => {

    const items = [
        {id:1, text:"Home", to:"home"},
        {id:2, text:"About", to:"about"},
        {id:3, text:"Projects", to:"project"},
        {id:4, text:"Skills", to:"skill"},
        {id:5, text:"Contact Me", to:"contact"}
    ];

    const [menu, setMenu] = useState(false);

  return (
    <div>
        <div className="fixed top-0 left-0 w-full z-50 bg-[#0e0c1e] shadow-md">
            <div className="container mx-auto hidden md:flex justify-between items-center py-6">
                <div className="text-xl flex lg:text-2xl font-bold items-center gap-1 cursor-default">
                    <span className="text-white">Ashwanth</span>
                    <span className="text-green-400">SenthilKumar</span>
                </div>
                <div>
                    <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-green-400 cursor-pointer">
                        {items.map(({ id, text, to }) => (
                            <li className="hover:text-white" key={id}>
                                <Link 
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a 
                href='public/CV.pdf' download="Ashwanth_CV.pdf"
                className="md:text-base lg:text-lg bg-green-400 hover:bg-green-500 px-6 py-2 rounded-full text-[#0e0c1e] cursor-pointer">
                    Download CV
                </a>
            </div>
        </div>


        <div className='flex md:hidden justify-between'>
            <div>
                <div 
                className=' w-2/7 h-screen text-black fixed z-10'>
                    <div className='py-6 px-5 cursor-default'>
            
                        <div onClick={()=> setMenu((prev) => !prev)}>

                            {menu ? (< RiCloseLargeLine size={30} color='lightgreen'/> ) : < LuMenu size={30}  color='lightgreen'/>}
                        
                        </div>

                        {menu && (

                            <div className='flex flex-col justify-start items-start bg-[#0e0c1e8e] px-5 py-5 rounded-3xl'>
                                <ul className='space-y-3 mt-6 text-white text-lg'>
                                    {items.map(({id, text,to}) => (
                                    <li className='hover:text-green-500 duration-200 cursor-pointer'
                                    key={id}>
                                        <Link 
                                            to={to}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}>
                                            {text}
                                        </Link>
                                    </li>
                                        ))}
                                </ul>
                                <a 
                                href='public/CV.pdf' download="Ashwanth_CV.pdf"
                                className='text-lg bg-green-400 hover:bg-green-500 text-[#0e0c1e] px-4 py-2 mt-3 rounded-full cursor-pointer'> Download CV</a>
                            </div>
                            )}
                    </div>
                </div>
            </div>
            <div className='text-xl lg:text-2xl font-bold flex items-center gap-2 py-6 px-4 '>
                <span className='text-white'>Ashwanth</span>
                    <span className='text-green-400'>SenthilKumar</span>
            </div>
            
        </div>
      
    </div>
  );
};

export default NavBar
