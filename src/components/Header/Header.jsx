import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react'

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SlPicture } from "react-icons/sl";
import { LuSendHorizonal } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

const Header = ({modeHandler, theme}) => {

    const [toggle, setToggle] = useState(true);

    function changeToggleHandler() {
        setToggle(!toggle);
    }

    return (
        <div className='w-[100%] fixed bottom-0 left-0 z-[1000] dark:bg-[#1c2841] bg-white md:py-0 md:px-2 md:top-0 md:bottom-[initial] shadow-[0_-1px_4px_rgba(0,0,0,0.15)] dark:shadow-purple-700/50'>
            <nav className='max-w-[968px] h-[3rem] flex justify-between items-center ml-[1.5rem] mr-[1.5rem] md:h-[4.5rem] md:gap-x-[1rem] md:mx-auto md:text-center md:justify-between'>
                <div>
                    <Link to='/' >
                        <p className='text-[#242329] dark:text-white font-bold hover:text-orange-700 dark:hover:text-orange-700'>Siddharth Roy</p>
                    </Link>
                </div>

                <div className='md:flex md:items-center md:gap-[0.8rem] md:justify-center'>
                    <div className='fixed bottom-0 left-0 w-[100%]  bg-white pt-[2rem] pr-[1.5rem] pl-[1.5rem] pb-[4rem] dark:shadow-purple-700/50 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-3xl transition-all duration-[.3s] md:block md:top-0 md:bottom-[initial] md:bg-transparent md:py-[1.5rem] md:h-[4.5rem] md:text-center md:shadow-none md:px-0 md:relative'>
                        
                        <ul className='grid grid-cols-3 grid-flow-row gap-[2rem] md:flex md:items-center md:gap-[2rem] md:flex-row'>
                            
                            <li className="nav_item">
                                <NavLink to="/" 
                                className={({isActive}) =>`flex flex-col items-center text-[0.875rem] text-[#242329] dark:text-white font-medium hover:text-orange-700 dark:hover:text-orange-700 cursor-pointer ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700"}`} >
                                    <LuHome className='text-[1.2rem] md:hidden'/>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink to="/About" 
                                className={({isActive}) =>`flex flex-col items-center text-[0.875rem] text-[#242329] dark:text-white font-medium hover:text-orange-700 dark:hover:text-orange-700 cursor-pointer ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700"}`}  >
                                    <FaRegUser className='text-[1.2rem] md:hidden'/>
                                    About
                                </NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink to="/Skills"  
                                className={({isActive}) =>`flex flex-col items-center text-[0.875rem] text-[#242329] dark:text-white font-medium hover:text-orange-700 dark:text-orange-700] cursor-pointer ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700"}`} >
                                    <FaRegFileAlt className='text-[1.2rem] md:hidden'/>
                                    Skills
                                </NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink to="/Qualifications" className={({isActive}) =>`flex flex-col items-center text-[0.875rem] text-[#242329] dark:text-white font-medium hover:text-orange-700 dark:hover:text-orange-700 cursor-pointer ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700"}`}>
                                    <LuGraduationCap className='text-[1.2rem] md:hidden'/>
                                    Qualifications
                                </NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink to="/Projects"  
                                className={({isActive}) =>`flex flex-col items-center text-[0.875rem] text-[#242329] dark:text-white font-medium hover:text-orange-700] dark:hover:text-orange-700 cursor-pointer ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700"}`} >
                                    <SlPicture className='text-[1.2rem] md:hidden'/>
                                    Projects
                                </NavLink>
                            </li>

                            <li className="nav_item">
                                <NavLink to="/Contact"  
                                className={({isActive}) =>`flex flex-col items-center text-[0.875rem] text-[#242329] dark:text-white font-medium hover:text-orange-700 dark:hover:text-orange-700 cursor-pointer ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700"}`} >
                                    <LuSendHorizonal className='text-[1.2rem] md:hidden'/>
                                    Contact
                                </NavLink>
                            </li>

                        </ul>

                        <FaTimes className='absolute right-[1.3rem] bottom-[1.5rem] text-[1.5rem] cursor-pointer text-[#9234ea] hover:text-[#7d26cf] dark:hover:text-[#9234ea] md:hidden' />
                    </div>

                    <div className="nav_btns flex justify-center items-center gap-2">
                        <button onClick={modeHandler} className='text-[#242329] dark:text-white font-medium text-xl hover:text-[#9234ea] dark:hover:text-[#9234ea]'>
                            {
                                theme === "dark" ? (<MdOutlineLightMode />) : (<MdOutlineDarkMode/>)
                            }
                        </button>
                        <div className='text-[#242329] dark:text-white font-medium text-xl cursor-pointer hover:text-[#9234ea] dark:hover:text-[#9234ea] md:hidden'>
                            <AiOutlineAppstore onClick={changeToggleHandler}/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header