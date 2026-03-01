import Link from 'next/link';
import { Suspense } from 'react';

import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <div className="mb-16">
            <h1 className="mb-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-stone-100">
              Pritish Mishra
            </h1>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Full stack developer building products on the web.
            </p>
          </div>

          <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-500">
            Featured Projects
          </h2>
          <div className="flex flex-col w-full gap-6 mb-8">
            <ProjectCard
              title="smoll.host"
              description="A simple web hosting service that allows you to deploy HTML projects with a simple drag and drop."
              tech={['Next.js', 'AWS S3', 'TypeScript']}
              githubLink="https://github.com/PritishMishraa/smoll-host"
              hostedLink="https://smoll-host.vercel.app/"
            />
            <ProjectCard
              title="Streakks"
              description="A task management app with GitHub commit heat map like calendar to show your consistency."
              tech={['Next.js', 'Zustand', 'TypeScript']}
              githubLink="https://github.com/PritishMishraa/streaks"
              hostedLink="https://streakks.vercel.app/"
            />
          </div>

          <Link
            href="/project"
            className="inline-flex items-center text-stone-600 dark:text-stone-400 transition-colors duration-200 hover:text-stone-900 dark:hover:text-stone-100"
          >
            <span>View all projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </Suspense>
  );
}
