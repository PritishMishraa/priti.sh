import NPM from 'components/metrics/NPM';
import Container from 'components/Container';
import ReadingNow from 'components/ReadingNow';
import LeetCode from 'components/metrics/Leetcode';
import CodingNinjas from 'components/metrics/CodingNinjas';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Pritish Mishra"
      description="My personal dashboard"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-black dark:text-white">
          Dashboard
        </h1>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quos sit vitae? Lorem ipsum dolor sit amet.
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-black md:mb-2 dark:text-white">
          Coding
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Coding has been an integeral part of my life.
        </p>
        <div className="flex flex-col w-full gap-4">
          <LeetCode />
          <CodingNinjas />
        </div>
        <h2 className="mt-16 text-3xl font-bold tracking-tight text-black md:mb-2 dark:text-white">
          NPM
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          My NPM Package!
        </p>
        <NPM />
        <h2 className="mt-16 text-3xl font-bold tracking-tight text-black md:mb-2 dark:text-white">
          Currently Reading
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Books have been an integeral part of my life.
        </p>
        <ReadingNow />
      </div>
    </Container>
  );
}
