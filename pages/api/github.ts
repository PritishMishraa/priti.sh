import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const userReposResponse = await fetch('https://api.github.com/users/PritishMishraa/repos?per_page=100');

  const repositories = await userReposResponse.json();

  const mine = repositories.filter((repo: { fork: any; }) => !repo.fork);
  const stars = mine.reduce((accumulator: any, repository: { [x: string]: any; }) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    stars
  });
}