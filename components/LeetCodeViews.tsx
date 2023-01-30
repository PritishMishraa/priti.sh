import useSWR from "swr";

import fetcher from "lib/fetcher";
import { LeetCodeSol } from "lib/types";
import LeetCodeViewsCard from "./LeetCodeViewsCard";

export default function LeetCodeViews() {
    const { data } = useSWR<LeetCodeSol>('/api/leetcode/top-sol', fetcher);

    const solutions = data?.solArr

    if (!data) {
        return <LeetCodeViewsCard
            index="01"
            href="-"
            title="-"
            views="-"
        />
    }

    return (
        <div className="flex flex-col w-full gap-8">
            {solutions.map((solution, i) => {
                return <LeetCodeViewsCard
                    key={i}
                    index={`0${i + 1}`}
                    title={solution.node.title}
                    views={solution.node.viewCount}
                    href={solution.node.url}
                />
            })}
        </div>
    );
}