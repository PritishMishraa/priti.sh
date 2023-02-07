import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

import Typing from 'components/Typing';
import Timeline from 'components/Timeline';
import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';
import CertificateCard from 'components/CertificateCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Pritish Mishra
              </h1>
              <div className="mb-4 font-semibold text-gray-700 dark:text-gray-200">
                <Typing />
              </div>
              <div className="mb-16 text-gray-600 dark:text-gray-400">
                Learning new technologies and creating products. Currently working on&nbsp;
                <a href="https://code-taskk.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Code Task</a>.
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
            Featured Projects
          </h3>
          <div className="flex flex-col w-full gap-6">
            <ProjectCard
              title="Code Task"
              description="A platform that integrates LeetCode and Todoist using APIs and makes it easy for the user to keep track of his coding practice."
              gradient="from-[#ff0f7b] to-[#f89b29]"
              tech={["Javascript", "Tailwind", "NextJS", "API"]}
              githubLink="https://github.com/PritishMishraa/code-task"
              hostedLink="https://code-taskk.vercel.app/"
              isMigrating={false}
            />
            <ProjectCard
              title="Ideas Grab API"
              description="An API built for the famous website IdeasGrab by David Delahunty. It is a collection of more than 3,600 project ideas to inspire you to create."
              gradient="from-[#0061ff] to-[#60efff]"
              tech={["NodeJS", "ExpressJS", "MongoDB"]}
              githubLink="https://github.com/PritishMishraa/ideas-grab-api"
              hostedLink="https://ideas-grab-api.herokuapp.com/"
              isMigrating={true}
            />
          </div>

          <Link
            href="/projects"
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
          <h3 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Journey
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Smilestones I collected over the years.
          </p>
          <Timeline />
          <h3 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Certifications
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Proof that I am legit.
          </p>
          <CertificateCard
            index="01"
            title="Meta Front-End Developer Professional Certificate"
            isCompleted={false} />
          <CertificateCard
            index="02"
            title="Server-side Development with NodeJS, Express and MongoDB"
            isCompleted={false} />
        </div>
      </Container>
    </Suspense>
  );
}
