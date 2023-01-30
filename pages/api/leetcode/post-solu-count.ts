import type { NextApiRequest, NextApiResponse } from 'next';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const POST_SOLU_VIEW_COUNT = `
query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
        profile {
            postViewCount
            solutionCount
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
        body: JSON.stringify({ query: POST_SOLU_VIEW_COUNT, variables: VARIABLES })
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, options)
    const ans = await response.json()

    const postViewCount = ans.data.matchedUser.profile.postViewCount
    const solutionCount = ans.data.matchedUser.profile.solutionCount

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        postViewCount,
        solutionCount
    });
}