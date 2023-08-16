import cn from 'classnames';

type TProjectCard = {
  title: string;
  description: string;
  gradient: string;
  tech: string[];
  githubLink: string;
  hostedLink: string;
  children?: React.ReactNode;
};

export default function ProjectCard({
  title,
  description,
  gradient,
  tech,
  githubLink,
  hostedLink,
  children
}: TProjectCard) {
  const slicedTechArray = tech.slice(0, 2);

  return (
    <div
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between p-4 bg-white rounded-lg dark:bg-gray-900">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-2 sm:mb-3">
            <h4 className="w-full text-xl font-semibold tracking-tight text-gray-900 md:text-2xl dark:text-gray-100">
              {title}
            </h4>
            {children}
          </div>
        </div>
        <h4 className="w-full mb-4 text-sm tracking-tight text-gray-900 md:text-base sm:mb-3 dark:text-gray-100">
          {description}
        </h4>
        <div className="flex items-center justify-between text-xs text-gray-800 dark:text-gray-200">
          <div className="flex md:hidden">
            {slicedTechArray.map((title: string) => {
              return (
                <span
                  key={title}
                  className="capsize align-baseline rounded-lg bg-gray-200 dark:bg-gray-800 p-1.5 m-0.5"
                >
                  {title}
                </span>
              );
            })}
            <div className="capsize align-baseline rounded-lg bg-gray-200 dark:bg-gray-800 p-1.5 m-0.5">
              ...
            </div>
          </div>
          <div className="hidden md:flex">
            {tech.map((title: string) => {
              return (
                <span
                  key={title}
                  className="capsize align-baseline rounded-lg bg-gray-200 dark:bg-gray-800 p-1.5 m-0.5"
                >
                  {title}
                </span>
              );
            })}
          </div>
          <div className="flex items-center">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="transition-all transform hover:scale-125">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>
            <a href={hostedLink} target="_blank" rel="noopener noreferrer">
              <div className="transition-all transform hover:scale-125">
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
