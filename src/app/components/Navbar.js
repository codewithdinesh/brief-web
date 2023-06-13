import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <div className="w-full mt-2 ">
            <div className="  rounded-full outline outline-orange-300  bg-orange-50 dark:bg-slate-700 p-2 justify-between items-center mx-auto px-4 flex  shadow-2xl">
                <div className='text-[#FAAD5A] font-bold  text-xl md:text-2xl '>
                    BriefWeb
                </div>

                <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">


                    <div className="justify-center items-center flex relative">
                        <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                            className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300" alt="" />
                        <p className="font-semibold text-sm">Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
