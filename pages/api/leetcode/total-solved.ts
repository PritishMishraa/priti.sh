import type { NextApiRequest, NextApiResponse } from 'next';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const TOTAL_PROBLEM_SOLVED = `
query languageStats($username: String!) {
    matchedUser(username: $username) {
        languageProblemCount {
            problemsSolved
        }
    }
}`
const VARIABLES = `
{
    "username": "pritish__mishraa"
}
`

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: TOTAL_PROBLEM_SOLVED, variables: VARIABLES })
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, options)
    const ans = await response.json()

    const problemsSolved = ans.data.matchedUser.languageProblemCount[0].problemsSolved

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        problemsSolved
    });
}