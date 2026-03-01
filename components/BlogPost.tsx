import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import type { Blog } from '.contentlayer/generated';

export default function BlogPost({
  title,
  slug,
  publishedAt,
}: Pick<Blog, 'title' | 'slug' | 'publishedAt'>) {
  return (
    <Link href={`/blog/${slug}`} className="group block py-4 -mx-4 px-4 rounded-lg transition-colors duration-200 hover:bg-stone-100 dark:hover:bg-stone-900/50">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors duration-200">
          {title}
        </h3>
        <time className="text-sm text-stone-500 dark:text-stone-500 shrink-0">
          {format(parseISO(publishedAt), 'MMM yyyy')}
        </time>
      </div>
    </Link>
  );
}