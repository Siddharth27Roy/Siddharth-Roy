import React from 'react'
// import './Home.css'
import { Link } from 'react-router-dom';
import { VscSend } from "react-icons/vsc";


const Home = () => {
    return (
        <div id="#" className='w-screen md:pt-[6rem] md:pb-[2rem] pb-[4rem] pt-[2rem] py-0 dark:bg-[#23304c]'>
            <div className='Home_container '>
                <div className="Home_content flex flex-wrap justify-center items-center py-16 space-x-32">
                    

                    <div className='home_img w-[300px] h-[300px] bg-rose-400 rounded-full ' > 
                        <img src="/MyPhoto.jpeg" className='w-[300px] h-[300px] object-cover rounded-full' />
                    </div>

                    <div className="home_data sm:col-auto col-span-2">
                        <h1 className="home_title text-[2rem] mb-[.75rem] dark:text-white lg:text-4xl">Hi, I'm Siddharth Roy</h1>

                        <h3 className="home_subtitle text-[1.125rem] text-[#242329] font-medium mb-[.75rem] dark:text-[#bcbac4]">I'm a Full Stack Web Developer</h3>

                        <p className="home_description mb-[2rem] dark:text-[#bcbac4]">Building Application to solve real life problems</p>

                        <Link to="/Contact" >
                            <button className='flex justify-center items-center bg-[#546fa8] hover:bg-blue-700 dark:bg-blue-900  dark:hover:bg-blue-700 text-white p-4 rounded-md font-medium'>
                                Contact Me
                                <VscSend className='text-[1.25rem] ml-[.5rem] transition-all duration-300'/>
                            </button>
                        </Link>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Home