import type { NextApiRequest, NextApiResponse } from 'next';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const TOP_SOLUTION = `
query userSolutionTopics($username: String!, $orderBy: TopicSortingOption, $skip: Int, $first: Int) {
  userSolutionTopics(
    username: $username
    orderBy: $orderBy
    skip: $skip
    first: $first) {
    edges {
      node {
        id
        title
        url
        viewCount
        questionTitle
      }
    }
  }
}`
const VARIABLES = `
{
    "username":"pritish__mishraa",
    "orderBy":"most_votes",
    "skip":0,
    "first":4
}`

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: TOP_SOLUTION, variables: VARIABLES })
  }

  const response = await fetch(LEETCODE_API_ENDPOINT, options)
  const ans = await response.json()
  const solArr = ans.data.userSolutionTopics.edges

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    solArr
  });
}