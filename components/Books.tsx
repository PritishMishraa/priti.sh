import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { TBR } from 'lib/types';
import BookCard from './BookCard';

export default function Books() {
    const { data } = useSWR<TBR>('/api/tbr', fetcher);

    const books = data?.books

    if (!data) {
        return <BookCard
            author={'-'}
            image={''}
            title={'-'}
            slug={''}
        />
    }

    return (
        <div className="flex flex-col w-full gap-8">
            {books.map((book, i) => {
                return <BookCard
                    key={i}
                    author={book.authors[0].name}
                    image={book.thumbnail}
                    title={book.title}
                    slug={book.slug}
                />
            })}
        </div>
    );
}