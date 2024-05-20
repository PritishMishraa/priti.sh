export default function LeetCodeViewsCard({ index, title, views, href }) {
  return (
    <a
      className="w-full"
      href={`https://leetcode.com${href}`}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col items-baseline justify-between sm:flex-row">
          <div className="flex items-center">
            <div className="mr-6 text-left text-gray-500 dark:text-gray-400">
              {index}
            </div>
            <h4 className="w-full text-lg text-gray-800 md:font-medium dark:text-gray-100">
              {title}
            </h4>
          </div>
          <div className="flex items-center justify-between w-full mt-2 sm:mt-0 sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-10 text-gray-500 dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
              </path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
              </path>
            </svg>
            <p className="ml-2 mr-10 text-left text-gray-500 dark:text-gray-400 sm:text-right md:mb-0 sm:mr-0">
              {views}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
