export default function TimeBox({ text, linkText, link, timestamp }) {
    return (
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-700 dark:bg-gray-900">
                <img className="rounded-full shadow-lg" src="/avatar.jpg" alt="Pritish Mishra image" />
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-900 dark:border-gray-800">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    {timestamp}
                </time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">{text}
                    <a href={link} className="font-semibold text-gray-900 dark:text-white hover:underline underline-offset-4">
                        {linkText}
                    </a>
                </div>
            </div>
        </li>
    )
}