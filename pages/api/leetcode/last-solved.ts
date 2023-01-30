import type { NextApiRequest, NextApiResponse } from 'next';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const LATEST_SOLVED_QUES = `
query recentAcSubmissions($username: String!, $limit: Int!) {
    recentAcSubmissionList(username: $username, limit: $limit) {
        id
        title
        titleSlug
        timestamp
    }
}`
const VARIABLES = `
{
    "username":"pritish__mishraa",
    "limit":1
}`

function timeSince(date: number | Date) {

    let seconds = Math.ceil((new Date().valueOf() - date.valueOf()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.ceil(interval) == 1 ? Math.ceil(interval) + " year ago" : Math.ceil(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.ceil(interval) == 1 ? Math.ceil(interval) + " month ago" : Math.ceil(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.ceil(interval) == 1 ? Math.ceil(interval) + " day ago" : Math.ceil(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.ceil(interval) == 1 ? Math.ceil(interval) + " hour ago" : Math.ceil(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.ceil(interval) == 1 ? Math.ceil(interval) + " minute ago" : Math.ceil(interval) + " minutes ago";
    }
    return Math.ceil(interval) == 1 ? Math.ceil(interval) + " second ago" : Math.ceil(interval) + " seconds ago";
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: LATEST_SOLVED_QUES, variables: VARIABLES })
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, options)
    const ans = await response.json()
    const ques = ans.data.recentAcSubmissionList

    const title = ques[0].title
    const timestamp = ques[0].timestamp

    const timeAgo = timeSince(new Date(timestamp * 1000))

    return res.status(200).json({
        title, timeAgo
    });
}