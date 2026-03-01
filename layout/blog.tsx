import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Blog } from '.contentlayer/generated';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – Pritish Mishra`}
      description={post.summary}
      image={`https://pritish.in${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-stone-100">
          {post.title}
        </h1>
        <p className="mb-8 text-sm text-stone-500 dark:text-stone-500">
          {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
        </p>
        <div className="w-full prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  );
}