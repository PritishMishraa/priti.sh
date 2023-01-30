import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import MetricCard from 'components/metrics/Card';
import {
    LeetCodeContestRating,
    LeetCodePostSolutionCount,
    LeetCodeTotalSolutionCount,
} from 'lib/types';

export default function LeetCodeCard() {
    const { data: postData } = useSWR<LeetCodePostSolutionCount>('/api/leetcode/post-solu-count', fetcher);
    const { data: solvedData } = useSWR<LeetCodeTotalSolutionCount>('/api/leetcode/total-solved', fetcher);
    const { data: ratingData } = useSWR<LeetCodeContestRating>('/api/leetcode/contest-rating', fetcher);

    const postViewCount = new Number(postData?.postViewCount);
    const solutionCount = new Number(postData?.solutionCount);

    const problemSolved = new Number(solvedData?.problemsSolved);

    const rating = new Number(ratingData?.rating);

    const link = 'https://leetcode.com/pritish__mishraa/';

    return (
        <div className='grid gap-4 sm:grid-cols-2 '>
            <MetricCard
                header="LeetCode - Total Post Views"
                link={link}
                metric={postViewCount}
            />
            <MetricCard
                header="LeetCode - Contest Rating"
                link={link}
                metric={rating}
            />
            <MetricCard
                header="LeetCode - Total Questions Solved"
                link={link}
                metric={problemSolved}
            />
            <MetricCard
                header="LeetCode - Total Solutions Posted"
                link={link}
                metric={solutionCount}
            />
        </div>
    );
}
