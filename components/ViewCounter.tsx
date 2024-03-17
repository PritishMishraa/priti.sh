import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function ViewCounter({ slug }) {
    const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
    const views = Number(data?.views);

    useEffect(() => {
        const registerView = () =>
            fetch(`/api/views/${slug}`, {
                method: 'POST'
            });

        registerView();
    }, [slug]);

    console.log(views);

    return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
