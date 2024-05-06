import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

import Typing from 'components/Typing';
import Container from 'components/Container';
import NPMCard from 'components/metrics/NPM';
import ProjectCard from 'components/ProjectCard';
import GitHubCard from 'components/metrics/Github';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
          <div className="flex flex-col-reverse items-start sm:flex-row w-full">
            <div className="flex-1 flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Pritish Mishra
              </h1>
              <div className="mb-16 w-full text-gray-600 dark:text-gray-400">
                on the internet with Dev Tools open
              </div>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Pritish Mishra"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Featured Projects:
          </h3>
          <div className="flex flex-col w-full gap-6">
            <ProjectCard
              title="Upsolve Leetcode Contest"
              description="A website to upsolve leetcode contests."
              gradient="from-[#f3f520] to-[#59d102]"
              tech={[
                'HTML',
                'CSS',
                'Javascript',
                'AI Prompting',
                'Cloudflare Pages'
              ]}
              githubLink="https://github.com/PritishMishraa/leetcode-upsolve"
              hostedLink="https://upsolve.pritish.in/"
            />
            <ProjectCard
              title="GATE CSE Tracker"
              description="A platform that helps GATE CSE aspirants to track their progress and streamline their preparation from free YouTube resources. Currently cruising at 10K page views."
              gradient="from-[#696eff] to-[#f8acff]"
              tech={[
                'NextJS 13',
                'TypeScript',
                'TailwindCSS',
                'APIs',
                'Scraping'
              ]}
              githubLink="https://github.com/PritishMishraa/gatecsetracker"
              hostedLink="https://gatecsetracker.vercel.app/"
            />
          </div>

          <Link
            href="/project"
            className="flex items-center h-6 mt-8 leading-7 text-gray-600 transition-all rounded-lg dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <>
              {'See all projects'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Contributions
          </h3>
          <div className="flex flex-col w-full gap-4">
            <NPMCard />
            <GitHubCard />
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
