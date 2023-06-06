"use client"
import axios from 'axios';
import { useState } from 'react';


const HomeC = () => {
    const [website, setWebsite] = useState('');
    const [scrapedContent, setScrapedContent] = useState('');

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`/api/scrape?website=${website}`);
            setScrapedContent(response.data);
        } catch (error) {
            console.error('Error scraping web:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Scrape Website</h1>

            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={website}
                    onChange={handleWebsiteChange}
                    className="border border-gray-300 rounded py-2 px-4 mb-4 dark:bg-slate-500 w-full"
                    placeholder="Enter website URL"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Scrape Website
                </button>
            </form>

            {scrapedContent && (
                <div className="mt-8 dark:bg-slate-600 p-2 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Scraped Content</h2>
                    <pre className="bg-gray-100 p-4 dark:bg-slate-500 m-1 rounded-md">{scrapedContent}</pre>
                </div>
            )}
        </div>
    );
};

export default HomeC;
