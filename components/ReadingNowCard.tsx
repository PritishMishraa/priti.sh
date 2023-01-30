import { useState } from "react"

export default function ReadingNowCard({ bookName, authName, percentageRead }) {
    const [Hover, setHover] = useState(false)
    return (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-800 max-w-72">
            <div className="flex justify-between text-gray-900 dark:text-gray-100">
                <div>
                    {bookName.toString() === 'undefined' ? 'The book i  am reading is..' : bookName}
                </div>
                {Hover && <div className="hidden font-bold text-right md:block">
                    {percentageRead > 0 ? Math.ceil(percentageRead.toLocaleString()) + '% done!' : ''}
                </div>}
                <div className="text-right">
                    {authName.toString() === 'undefined' ? '' : authName}
                </div>
            </div>
            <div className="mt-6 bg-gray-300 rounded-full dark:bg-gray-500" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <div className="p-2 text-xs leading-none bg-black rounded-full dark:bg-white" style={{ "width": percentageRead + '%' }}></div>
            </div>
        </div>
    )
}
