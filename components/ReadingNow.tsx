import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Goodreads } from 'lib/types';
import BookCard from './ReadingNowCard';

export default function ReadingNow() {
    const { data } = useSWR<Goodreads>('/api/goodreads', fetcher);

    const bookName = new String(data?.bookName);
    const authName = new String(data?.authName);
    const percentageRead = new Number(data?.percentageRead);

    return (
        <BookCard
            bookName={bookName}
            authName={authName}
            percentageRead={percentageRead}
        />
    );
}