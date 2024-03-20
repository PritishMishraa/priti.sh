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
            href="/project"
            className="text-gray-500 transition hover:text-gray-600 hover:dark:text-gray-400"
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/blog"
            className="text-gray-500 transition hover:text-gray-600 hover:dark:text-gray-400"
          >
            Blog
          </Link>
          <Link
            href="/leetcode"
            className="text-gray-500 transition hover:text-gray-600 hover:dark:text-gray-400"
          >
            Leetcode
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/book"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Books
          </Link>
        </div>
      </div>
    </footer>
  );
}
