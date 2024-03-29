import React from 'react'

import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const ContactMe = () => {
    return (
        <div id='ContactMe' className='md:py-40 pb-[4rem] pt-[2rem] py-0 dark:bg-[#23304c]'>
            <div className='max-w-5xl mx-auto mt-5 flex justify-center items-center flex-col px-[2.5rem]'>
                <h2 className="text-4xl text-center dark:text-white">Contact Me</h2>
                <span className="block text-lg mb-[3rem] md:mb-[4rem] text-center dark:text-white">Want to connect? My inbox is always open!</span>
                
                <div className='grid gap-8 row-gap-5 md:grid-cols-2 lg:grid-cols-3 w-full'>
                    <div className='relative  p-px overflow-hidden transition duration-300 transform border dark:border-[#23304c] rounded shadow-md hover:scale-105 group hover:shadow-xl dark:shadow-blue-400/50'>
                        <a href='mailto:siddharth27.roy27@gmail.com' target="_blank">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100"></div>
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100"></div>
                            <div className='relative p-5 dark:bg-[#23304c] bg-white rounded-sm'>
                                <div className='flex flex-col items-center  mb-2 lg:flex-row'>
                                    <div className='flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-blue-400 text-4xl'>
                                        <IoIosMail/>
                                    </div>
                                    <h6 className = 'font-semibold leading-5 dark:text-white'>Email</h6>
                                </div>
                                <p className="mb-2 text-sm text-gray-900 text-center lg:text-start dark:text-white">Let's get in touch.</p>
                            </div>
                        </a>
                    </div>
                    <div className='relative  p-px overflow-hidden transition duration-300 transform border dark:border-[#23304c] rounded shadow-md hover:scale-105 group hover:shadow-xl dark:shadow-blue-400/50'>
                    <a href='https://github.com/Siddharth27Roy' target="_blank">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100"></div>
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100"></div>
                            <div className='relative p-5 dark:bg-[#23304c] bg-white rounded-sm'>
                                <div className='flex flex-col items-center  mb-2 lg:flex-row'>
                                    <div className='flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-blue-400 text-4xl'>
                                        <FaGithub />
                                    </div>
                                    <h6 className = 'font-semibold leading-5 dark:text-white'>GitHub</h6>
                                </div>
                                <p class="mb-2 text-sm text-gray-900 text-center lg:text-start dark:text-white">Check out my repositories.</p>
                            </div>
                        </a>
                    </div>
                    <div className='relative  p-px overflow-hidden transition duration-300 transform border dark:border-[#23304c] rounded shadow-md hover:scale-105 group hover:shadow-xl dark:shadow-blue-400/50'>
                        <a href='https://www.linkedin.com/in/siddharth-roy-264224241/' target="_blank">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100"></div>
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100"></div>
                            <div className='relative p-5 dark:bg-[#23304c] bg-white rounded-sm'>
                                <div className='flex flex-col items-center  mb-2 lg:flex-row'>
                                    <div className='flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-blue-400 text-4xl'>
                                        <FaLinkedin />
                                    </div>
                                    <h6 className = 'font-semibold leading-5 dark:text-white'>LinkedIn</h6>
                                </div>
                                <p class="mb-2 text-sm text-gray-900 text-center lg:text-start dark:text-white">Let's connect.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe