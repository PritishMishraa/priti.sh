export default function CertificateCard({ index, title, isCompleted }) {
    return (
        <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
            <div className="flex flex-col items-baseline justify-between sm:flex-row">
                <div className="flex items-center">
                    <div className="mr-6 text-left text-gray-500 dark:text-gray-400">
                        {index}
                    </div>
                    <h4 className="w-full text-lg font-medium text-gray-800 dark:text-gray-100">
                        {title}
                    </h4>
                </div>
                <div className="flex items-center w-full mt-2 sm:mt-0 sm:w-auto">
                    {isCompleted ?
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 ml-10">
                            <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                            Completed
                        </span> :
                        <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 ml-10">
                            <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                            On&nbsp;Going
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}