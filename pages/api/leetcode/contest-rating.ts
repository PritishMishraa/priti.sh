import type { NextApiRequest, NextApiResponse } from 'next';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const CONTEST_RATING = `
query userContestRankingInfo($username: String!) {
    userContestRanking(username: $username) {
      rating
      topPercentage
    }
  }  
`
const VARIABLES = `
{
    "username":"pritish__mishraa"
}`

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: CONTEST_RATING, variables: VARIABLES })
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, options)
    const ans = await response.json()

    const rating = Math.floor(ans.data.userContestRanking.rating);

    return res.status(200).json({
        rating
    });
}