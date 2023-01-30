import Parser from 'rss-parser';

import type { NextApiRequest, NextApiResponse } from 'next';

const parser = new Parser();

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const feed = await parser.parseURL('https://www.goodreads.com/user/updates_rss/124720208');

    const bookNameByAuthName = feed.items[0].content.match(/\w+|"[^"]+"/g)[9].slice(1, -1);
    const pages = feed.items[0].title.replace(/^\s+|\s+$/gm, '').split(" ");

    const bookNameAndAuthNameArray = bookNameByAuthName.split(" by ");
    const bookName = bookNameAndAuthNameArray[0];
    const authName = bookNameAndAuthNameArray[1];

    const pageAt = Number(pages[3]);
    const totalPages = Number(pages[5]);
    const percentageRead = ((pageAt * 100) / totalPages);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        bookName,
        authName,
        percentageRead
    });
}