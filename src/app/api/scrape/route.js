import axios from 'axios';
import cheerio from 'cheerio';

import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const website = searchParams.get('website');
    console.log(website)
    // const website = id;

    try {
        const response = await axios.get(website);
        const html = response.data;
        const $ = cheerio.load(html);

        // Extract the desired content from the HTML using cheerio selectors

        const title = $('title').text();
        const paragraphs = $('p').map((index, element) => $(element).text()).get();

        // Format the scraped content as per your requestuirement
        const scrapedContent = `Title: ${title}\n\n${paragraphs.join('\n\n')}`;
        // console.log(scrapedContent)

        // Return the scraped content as the API response
        return NextResponse.json(scrapedContent);
    } catch (error) {
        // console.error('Error scraping website:', error);
        NextResponse.json({ error: 'An error occurred while scraping the website' });
    }
}
