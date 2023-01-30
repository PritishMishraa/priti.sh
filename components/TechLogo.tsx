export default function TechLogo({ path, title }) {
    return (
        <div className='w-20 h-20 bg-gray-900 rounded-full dark:bg-gray-50 sm:h-28 sm:w-28'>
            <div className='relative flex items-center justify-center w-full h-full'>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center duration-300 opacity-0 bg-gray-50 bg-opacity-80 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-80">
                    <h1 className="text-lg font-bold tracking-tight text-black dark:text-white sm:text-3xl">
                        {title}
                    </h1>
                </div>
                <svg
                    className='w-12 h-12 sm:h-16 sm:w-16'
                    fill='currentColor'
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>
                        {title}
                    </title>
                    <path d={path} />
                </svg>
            </div>
        </div>
    )
}