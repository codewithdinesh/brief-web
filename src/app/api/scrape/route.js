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

        // Remove specific elements (e.g., header, footer)
        $('header, footer,script,style').remove();

        $('*').removeAttr('style').removeAttr('class');

        // Remove unwanted sections
        $('.EditionININUSSign, .ShareAA, .start-a-conversation, .FOLLOW-US-ON-SOCIAL-MEDIA, .Visual-Stories, .TOP-TRENDS, .trending, .related, .Terms-of-Use, .Privacy-policy, .Advertise-with-us, .RSS, .ePaper, .Sitemap, .Archives, .FOLLOW-US-ON, .Other-Times-Group-News-Sites, .Popular-Categories').remove();

        // Remove unwanted tags
        $('a, span, ul, ol, li, strong, em, br').remove();

        $('iframe[src*="googleadservices.com"]').remove();

        // Remove extra spaces from text content
        $('div, h1, h2, h3, h4, h5, h6, p').each((index, element) => {
            const $element = $(element);
            const text = $element.text().trim().replace(/\s+/g, ' ');
            $element.text(text);
        });

        // Scrape the sanitized text content
        const scrapedData = [];

        $('div, h1, h2, h3, h4, h5, h6, p').each((index, element) => {
            const text = $(element).text().trim();
            scrapedData.push(text);
        });



        const scrapedContent = `Title: ${title}\n\n${scrapedData.join('\n\n')}`;

        // Return the scraped content as the API response
        return NextResponse.json(scrapedContent);
    } catch (error) {
        // console.error('Error scraping website:', error);
        NextResponse.json({ error: 'An error occurred while scraping the website' });
    }
}
