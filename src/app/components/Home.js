"use client"
import axios from 'axios';
import { useState } from 'react';
import { Navbar } from './Navbar';
import isURL from '../Lib/isUrl';
import { ToastContainer, toast } from 'react-toastify';




const HomeC = () => {
    const [website, setWebsite] = useState('');
    const [scrapedContent, setScrapedContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (isURL(website)) {

            setLoading(true);

            try {
                const response = await axios.get(`/api/scrape?website=${website}`);
                setScrapedContent(response.data);
                setLoading(false);
            } catch (error) {

                //alert("Something Went Wrong ! Please Try again Later..")
                toast("Something Went Wrong ! Please Try again Later..");
                setLoading(false);

            }
        } else {

            toast("Please Enter Valid URL");
        }

    };

    return (
        <div className=" items-center  p-1 md:p-3 bg-transparent justify-center w-full">
            <ToastContainer />
            <form onSubmit={handleFormSubmit} className='flex-1'>
                <input
                    type="text"
                    value={website}
                    required
                    onChange={handleWebsiteChange}
                    className="rounded-full  py-2 px-4 mb-4  dark:bg-slate-600 dark:outline-orange-300 w-full outline outline-orange-400 border-none dark:placeholder:text-slate-50 "
                    placeholder="Enter website URL"
                />
                <button
                    type="submit"
                    className="bg-orange-400 dark:bg-orange-300 border dark:text-slate-700 font-semibold border-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded-full  dark:hover:bg-orange-200  "
                >
                    Summeries
                </button>
            </form>


            {
                loading == true ? <div
                    class=" m-1 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                    >
                </div> : ""
            }
            <div className=''>

                {scrapedContent && (
                    <div className="mt-8 dark:bg-slate-600 p-2 rounded-lg w-full break-words flex-1">
                        <h2 className="text-xl font-bold mb-4">Summery</h2>
                        <pre className="bg-gray-100 p-4 dark:bg-slate-500 m-1 rounded-md">
                            <code style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                                {scrapedContent}
                            </code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeC;
