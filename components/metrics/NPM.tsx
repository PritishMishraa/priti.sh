import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { NPMDownloades } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function NPMCard() {
    const { data } = useSWR<NPMDownloades>('/api/npm-downloads', fetcher);

    const downloads = new Number(data?.downloads);

    const link = 'https://www.npmjs.com/package/add-shebangs';

    return (
        <MetricCard
            header="Total Downloads"
            link={link}
            metric={downloads}
        />
    );
}
