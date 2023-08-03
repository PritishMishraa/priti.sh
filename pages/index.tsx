import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

import Typing from 'components/Typing';
import Timeline from 'components/Timeline';
import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';
import certificates from '../utils/certificates.json';
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
                Learning new technologies and creating products. Currently
                <br></br>working on{' '}
                <a
                  href="https://gatecsetracker.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  GATE CSE Tracker
                </a>{' '}
                and{' '}
                <a
                  href="https://thread-to-carousel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  ThreadCraft
                </a>
                .
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
              title="GATE CSE Tracker"
              description="A platform that helps GATE CSE aspirants to track their progress and streamline their preparation from free YouTube resources. Currently cruising at 14K page views."
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
              isWIP={true}
            />
            <ProjectCard
              title="ThreadCraft"
              description="Seamlessly transform Twitter Threads to captivating LinkedIn Carousels"
              gradient="from-[#f5e6ad] to-[#f13c77]"
              tech={['TypeScript', 'NextJS', 'TailwindCSS', 'APIs']}
              githubLink="https://github.com/PritishMishraa/thread-to-carousel"
              hostedLink="https://thread-to-carousel.vercel.app/"
              isWIP={true}
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
            Definitely fun!
          </p>
          {certificates.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.index}
                index={certificate.index}
                title={certificate.title}
                isCompleted={certificate.isCompleted}
              />
            );
          })}
        </div>
      </Container>
    </Suspense>
  );
}
