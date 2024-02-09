import React from 'react'

import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { IoTriangle } from "react-icons/io5";

function Skills() {
  return (
    <div id='Skills' className='md:py-40 pb-[4rem] pt-[2rem] py-0 dark:bg-[#23304c]'>
      <div className='mt-5  px-[2.5rem] flex flex-wrap justify-center'>
          
          
          <div className=' flex space-x-16 flex-warp  w-full justify-center '>

              <div className='relative w-80  p-px overflow-hidden transition duration-300 transform border dark:border-[#23304c] rounded shadow-md hover:scale-105 group hover:shadow-xl dark:shadow-green-400/50'>
                  
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-400 group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-400 group-hover:scale-y-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-400 group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-400 group-hover:scale-y-100"></div>
                <div className='relative p-5 dark:bg-[#23304c] bg-white rounded-sm'>
                    <div className='flex flex-col items-center justify-center  mb-2 lg:flex-row'>                           
                        <h6 className = 'font-semibold leading-5 dark:text-white text-3xl'>Languages</h6>
                    </div>
                    <ul className="mb-2 py-10 text-sm text-gray-900 text-center lg:text-start dark:text-white space-y-4">
                      <li className='flex justify-between text-xl'>C++ 
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <TbBrandCpp />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>Javascript 
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <IoLogoJavascript />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>Python 
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <FaPython />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>HTML 
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <FaHtml5 />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'> 
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-white lg:mb-0 text-green-400 text-4xl'>
                          
                        </div>
                      </li>
                    </ul>
                </div>
              </div>

              <div className='relative w-80  p-px overflow-hidden transition duration-300 transform border dark:border-[#23304c] rounded shadow-md hover:scale-105 group hover:shadow-xl dark:shadow-green-400/50'>
                  
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-400 group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-400 group-hover:scale-y-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-400 group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-400 group-hover:scale-y-100"></div>
                <div className='relative p-5 dark:bg-[#23304c] bg-white rounded-sm'>
                    <div className='flex flex-col items-center justify-center mb-2 lg:flex-row'>                           
                        <h6 className = 'font-semibold leading-5 dark:text-white text-3xl'>Web Devlopment</h6>
                    </div>
                    <ul className="mb-2 py-10 text-sm text-gray-900 text-center lg:text-start dark:text-white space-y-4">
                      <li className='flex justify-between text-xl'>React
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <FaReact />   
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>Node 
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <FaNodeJs />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>Express
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <SiExpress />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>MongoDB
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <SiMongodb />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>Tailwind CSS
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <SiTailwindcss />
                        </div>
                      </li>
                    </ul>
                </div>
              </div>

              <div className='relative w-80  p-px overflow-hidden transition duration-300 transform border dark:border-[#23304c] rounded shadow-md hover:scale-105 group hover:shadow-xl dark:shadow-green-400/50'>
                  
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-green-400 group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-green-400 group-hover:scale-y-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-green-400 group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-400 group-hover:scale-y-100"></div>
                <div className='relative p-5 dark:bg-[#23304c] bg-white rounded-sm'>
                    <div className='flex flex-col items-center justify-center mb-2 lg:flex-row'>                           
                        <h6 className = 'font-semibold leading-5 dark:text-white text-3xl'>Tools</h6>
                    </div>
                    <ul className="mb-2 py-10 text-sm text-gray-900 text-center lg:text-start dark:text-white space-y-4">
                      <li className='flex justify-between text-xl'>Git
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <FaGitAlt />   
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>GitHub 
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <FaGithub />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>VS Code
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <TbBrandVscode />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>Postman
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <SiPostman />
                        </div>
                      </li>
                      <li className='flex justify-between text-xl'>Varcel
                        <div className='w-10 h-10 mb-4 mr-2 rounded-full dark:bg-[#23304c] bg-indigo-50 lg:mb-0 text-green-400 text-4xl'>
                          <IoTriangle />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
  
          </div>


      </div>
  </div>
  )
}

export default Skills
