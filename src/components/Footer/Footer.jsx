import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="footer  w-[100%] border-t-2 border-gray-500">
            <div className="footer_bg md:pt-[3rem] md:px-0 md:pb-[2rem] dark:bg-[#23304c] bg-[#546fa8]  pt-[2rem] px-0 pb-[3rem]">
                <div className="footer_container lg:p-0 md:py-0 md:px-[1rem] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] max-w-[768px] mx-[1.5rem] grid gap-y-[3.5rem] gap-[1.5rem] lg:mx-auto lg:max-w-5xl">
                    <div className='lg:flex lg:flex-col lg:gap-3'>
                        <h1 className="footer_title text-white text-[1.5rem] mb-[0.25rem]">Siddharh Roy</h1>
                        <span className="footer_subtitle text-white text-[.813rem]">MERN Developer</span>
                    </div>

                    <div className='footer_links flex flex-col md:flex-row md:gap-x-[2rem] gap-y-[1.5rem]'>
                        <Link to="/About" >
                            <p className='hover:text-orange-700 text-white'>About</p>
                        </Link>

                        <Link to="/Projects" >
                            <p className='hover:text-orange-700 text-white'>Projects</p>
                        </Link>

                        <Link to="/Contact"     >
                            <p className='hover:text-orange-700 text-white'>Contact Me</p>
                        </Link>
                    </div> 

                    <div className='footer_socials flex items-center md:items-start md:justify-end'>
                        <NavLink to='https://github.com/Siddharth27Roy' target='_blank' className='text-[1.25rem] mr-[1.5rem] text-white hover:text-orange-700'>
                            <LuGithub />
                        </NavLink>
                        <NavLink to='https://www.linkedin.com/in/siddharth-roy-264224241/' target='_blank' className='text-[1.25rem] mr-[1.5rem] text-white hover:text-orange-700'>
                            <FiLinkedin />
                        </NavLink>
                    </div>
                </div>

                <p className="footer_copy md:mt-[4.5rem] text-[.75rem] text-center text-white mt-[3rem] lg:mt-[6rem]">...</p>
            </div>
        </div>
    )
}

export default Footer