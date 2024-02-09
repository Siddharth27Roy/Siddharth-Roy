import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";

const Qualification = () => {
    return (
        <div id='Qualifications' className='qualification dark:bg-[#23304c] bg-white md:pt-[8rem] md:pb-[4rem] pb-[4rem] pt-[2rem] py-0'>
            <h2 className="text-4xl text-center dark:text-white">Qualification</h2>
            <span className="block text-lg mb-[3rem] md:mb-[4rem] text-center dark:text-[#bcbac4]">My Educational Qualification</span>

            <div className="qualification_container max-w-[768px] md:mx-auto mx-[1.5rem]">
                <div className="qualification_tabs md:justify-center flex justify-evenly mb-[2rem]">
                    <div className="text-3xl font-medium text-[#546fa8] button--flex flex justify-center items-center">
                        <LuGraduationCap className='qualification_icon text-[1.8rem] mr-[0.25rem]'/>
                        Education
                    </div>
                </div>

                <div className="qualification_sections sm:grid sm:grid-cols-[.6fr] md:grid-cols-[.fr] sm:justify-center">
                    <div className="qualification_content">
                        {/* Qualification 1 */}
                        <div className="qualification_data grid grid-cols-[1fr,max-content,1fr] gap-x-[1.5rem]">
                            <div>
                                <h3 className="qualification_title text-xl font-medium dark:text-white">Delhi Technological University</h3>
                                <span className="qualification_subtitle inline-block text-sm mb-[1rem] dark:text-[#bcbac4]">B.Tech- Mathematics and Computing</span>
                                <div className="qualification_calender flex items-center text-[.75rem] text-[#a19fad] gap-1">
                                    <LuCalendarDays />
                                    2020 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder inline-block w-[13px] h-[13px] bg-[#546fa8] rounded-full"></span>
                                <span className="qualification_line block w-[1px] h-full bg-[#546fa8] transform translate-x-[6px] translate-y-[-7px]"></span>
                            </div>
                        </div>
                        {/* Qualification 2 */}
                        <div className="qualification_data grid grid-cols-[1fr,max-content,1fr] gap-x-[1.5rem]">
                            <div></div>

                            <div>
                                <span className="qualification_rounder inline-block w-[13px] h-[13px] bg-[#546fa8] rounded-full"></span>
                                <span className="qualification_line block w-[1px] h-full bg-[#546fa8] transform translate-x-[6px] translate-y-[-7px]"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title text-xl font-medium dark:text-white">Venkatehswar International School</h3>
                                <span className="qualification_subtitle inline-block text-sm mb-[1rem] dark:text-[#bcbac4]">Class 12</span>
                                <div className="qualification_calender flex items-center text-[.75rem] text-[#a19fad] gap-1">
                                    <LuCalendarDays />
                                    2019 - 2020
                                </div>
                            </div>
                        </div>
                        {/* Qualification 3 */}
                        <div className="qualification_data grid grid-cols-[1fr,max-content,1fr] gap-x-[1.5rem]">
                            <div>
                                <h3 className="qualification_title text-xl font-medium dark:text-white">Venkateshwar International School</h3>
                                <span className="qualification_subtitle inline-block text-sm mb-[1rem] dark:text-[#bcbac4]">Class 10</span>
                                <div className="qualification_calender flex items-center text-[.75rem] text-[#a19fad] gap-1">
                                    <LuCalendarDays />
                                    2017 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder inline-block w-[13px] h-[13px] bg-[#546fa8] rounded-full"></span>
                                <span className="qualification_line "></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualification
