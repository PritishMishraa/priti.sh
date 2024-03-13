import Parser from 'rss-parser';

import type { NextApiRequest, NextApiResponse } from 'next';

const parser = new Parser();
interface Book {
    title?: string;
    link?: string;
    pubDate?: string;
    content?: string;
    contentSnippet?: string;
    guid?: string;
    isoDate?: string;
}
interface BookDetails {
    bookName: string | null;
    authorName: string | null;
}

function extractNumberBeforePercentage(title: string): number | null {
    const match = title.match(/(\d+)%/);
    if (match) {
        return parseInt(match[1]);
    }
    return null;
}

function extractBookNameFromTitle(title: string): string | null {
    const match = title.match(/with\s+(.*?)\n/);
    if (match && match.length >= 2) {
        return match[1].trim();
    }
    return null;
}

function extractAuthorNameFromContent(content: string): BookDetails {
    const bookDetails: BookDetails = {
        bookName: null,
        authorName: null
    };

    const authorNameMatch = content.match(/alt="[^"]*\sby\s([^"]+)"/);
    if (authorNameMatch && authorNameMatch.length >= 2) {
        bookDetails.authorName = authorNameMatch[1].trim();
    }

    return bookDetails;
}

function findObjectWithTitleContainingPercentage(data: Book[]): { percentageRead: number | null, bookDetails: BookDetails } {
    for (let i = 0; i < data.length; i++) {
        const title = data[i].title;
        if (title.includes('%')) {
            const numberBeforePercentage = extractNumberBeforePercentage(title);
            const bookName = extractBookNameFromTitle(title);

            if (numberBeforePercentage !== null) {
                const bookDetails = extractAuthorNameFromContent(data[i].content || '');
                return {
                    percentageRead: numberBeforePercentage,
                    bookDetails: {bookName: bookName, authorName: bookDetails.authorName}
                };
            }
        }
    }
    return { percentageRead: null, bookDetails: { bookName: null, authorName: null } };
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const feed = await parser.parseURL('https://www.goodreads.com/user/updates_rss/124720208');

    const { percentageRead, bookDetails } = findObjectWithTitleContainingPercentage(feed.items);

    const bookName = bookDetails.bookName;
    const authName = bookDetails.authorName;

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