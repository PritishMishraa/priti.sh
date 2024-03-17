import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { GitHub } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function GitHubCard() {
    const { data } = useSWR<GitHub>('/api/github', fetcher);

    const stars = new Number(data?.stars);

    const link = 'https://www.github.com/PritishMishraa';

    return (
        <MetricCard
            header="Github Stars"
            link={link}
            metric={stars}
        />
    );
}
