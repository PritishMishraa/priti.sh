import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 hover:dark:text-gray-400"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <NowPlaying />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 transition hover:text-gray-600 hover:dark:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 transition hover:text-gray-600"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/PritishhMishraa">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/PritishMishraa">
            Github
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/dashboard"
            className="text-gray-500 transition hover:text-gray-600 hover:dark:text-gray-400"
          >
            Dashboard
          </Link>
          <Link
            href="/tbr"
            className="text-gray-500 transition hover:text-gray-600"
          >
            To Be Read
          </Link>
        </div>
      </div>
      <div className="flex w-full p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400" role="alert">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd">
          </path>
        </svg>
        <div>
          <span className="font-semibold">COPY alert!</span> The entire design of this website is taken from <a href='https://leerob.io/' target="_blank" rel="noreferrer noopener" className='font-semibold'>Lee Robinson&apos;s</a> website.
        </div>
      </div>
    </footer>
  );
}
