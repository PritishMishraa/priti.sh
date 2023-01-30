import useSWR from "swr";

import fetcher from "lib/fetcher";
import { LeetCodeQues } from "lib/types";

export default function LeetCodeQuesCard() {
    const { data } = useSWR<LeetCodeQues>('/api/leetcode/last-solved', fetcher);

    const title = new String(data?.title);
    const timeAgo = new String(data?.timeAgo);

    return (
        <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
            <div className="flex flex-col items-baseline justify-between sm:flex-row">
                <div className="flex items-center">
                    <h4 className="w-full text-lg font-medium text-gray-800 dark:text-gray-100">
                        {data ? title : '-'}
                    </h4>
                </div>
                <div className="flex items-center justify-between w-full mt-2 sm:mt-0 sm:w-auto">
                    <p className="mr-10 text-left text-gray-500 dark:text-gray-400 sm:text-right md:mb-0 sm:mr-0">
                        {data ? timeAgo : '-'}
                    </p>
                </div>
            </div>
        </div>
    );
}