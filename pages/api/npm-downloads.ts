import type { NextApiRequest, NextApiResponse } from 'next';

function yearMonthDay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const yearMonthDay = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return yearMonthDay;
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const today = yearMonthDay();

    const dates = await fetch(`https://npm-stat.com/api/download-counts?package=add-shebangs&from=2022-07-01&until=${today}`);

    const datesJSON = await dates.json();
    const addShebangs = datesJSON['add-shebangs'];

    let downloads = 0;
    Object.keys(addShebangs).forEach(function (key) {
        downloads += addShebangs[key];
    })

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        downloads
    });
}