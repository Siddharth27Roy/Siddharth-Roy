import React from 'react';
import { GrNotes } from "react-icons/gr";

export default function About() {
  return (
      <div className="py-20  bg-white dark:bg-[#23304c]">
          <div className="container m-auto px-6 text-gray-600 md:px-12 md:py-7 xl:px-10 xl:py-10">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 lg:justify-center  ">
                  <div className="w-[300px]">
                      <img
                          src="/MyPhoto.jpeg"
                          alt="image"
                          className='object-cover rounded-lg'
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-3xl text-black dark:text-white  font-bold md:text-6xl">
                        About Me
                      </h2>
                      <p className="mt-6 text-gray-700 dark:text-gray-400 md:text-xl">
                        Hello! I'm <span className='text-orange-600'>Siddharth Roy</span>, a engineering student in my final year, specializing in full-stack web development. I bring fresh perspectives, a solid engineering foundation, and a commitment to mastering the latest technologies. Eager to contribute my skills and creativity to a dynamic workplace, I am actively seeking opportunities for a rewarding career.
                      </p>

                        <a href='#' /*download='#'*/ className='w-[120px] block'>
                            <button className='flex justify-center items-center mt-4 bg-[#546fa8] hover:bg-blue-700 dark:bg-blue-900  dark:hover:bg-blue-700 text-white p-3 rounded-md font-medium w-[120px] gap-2 mx-auto md:mx-0'>
                                Resume
                                <GrNotes />
                            </button>
                        </a>    
                  </div>
              </div>
          </div>
      </div>
  );
}