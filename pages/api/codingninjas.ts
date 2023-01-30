import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const streaks = await fetch('https://api.codingninjas.com/api/v3/public_section/streaks/progress?uuid=f2270276-ecb5-486b-8310-faea5b317cc8');
    const levels = await fetch('https://api.codingninjas.com/api/v3/public_section/levels/progress?uuid=f2270276-ecb5-486b-8310-faea5b317cc8');

    const streaksJSON = await streaks.json();
    const levelsJSON = await levels.json();

    const questions_solved = streaksJSON.data.questions_solved;
    const current_level = levelsJSON.data.current_level.score;
    const badge = levelsJSON.data.current_level.sharable_image;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        questions_solved,
        current_level,
        badge
    });
}