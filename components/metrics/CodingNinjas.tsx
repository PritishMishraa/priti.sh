import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { CodingNinjas } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function CodingNinjasCard() {
    const { data } = useSWR<CodingNinjas>('/api/codingninjas', fetcher);

    const level = new Number(data?.current_level);
    const ques = new Number(data?.questions_solved);
    const link = 'https://www.codingninjas.com/codestudio/profile/f2270276-ecb5-486b-8310-faea5b317cc8';

    return (
        <div className='grid gap-4 sm:grid-cols-2'>
            <MetricCard
                header="Coding Ninjas - Level"
                link={link}
                metric={level}
            />
            <MetricCard
                header="Coding Ninjas - Total Questions Solved"
                link={link}
                metric={ques}
            />
        </div>
    );
}
