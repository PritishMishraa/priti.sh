import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const bookList = await fetch('https://oku.club/api/collections/user/PritishMishraa/to-read');

    const bookListJSON = await bookList.json();

    const books = bookListJSON.books;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        books
    });
}