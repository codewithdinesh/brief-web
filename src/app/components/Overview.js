/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Overview = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center sm:mt-3 md:ml-4 md:mt-0 items-center  w-full p-7 ps-0    ">

            <img src="/short.svg"
                alt="" className="flex-1 pointer-events-none select-none w-4/4 md:w-1/4 m-2" draggable="false" />

            <div className='break-words flex-1'>


                <pre className=' font-extrabold text-6xl md:text-6xl text-[#39444f] dark:text-slate-100 w-full break-words '

                    style={{
                        fontFamily: "cursive",
                        whiteSpace: 'pre-wrap',
                        overflowWrap: "break-word"

                    }}
                >
                    <span className=' text-[#FAAD5A]  inline-block space-x-1'>
                        Summeries&nbsp;
                    </span>
                    the&nbsp;

                    <span className=' text-[#ff6262]  inline-block'>
                        Web Articles&nbsp;
                    </span>
                    in&nbsp;
                    <span className=' text-[#2c7ad3] dark:text-blue-200  inline-block '>
                        One
                        Click&nbsp;
                    </span>

                </pre >
            </div>

        </div>

    )
}

export default Overview