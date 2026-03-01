import { useState } from 'react';

import { pick } from '@contentlayer/utils';
import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { InferGetStaticPropsType } from 'next';
import { allBlogs } from '.contentlayer/generated';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Blog – Pritish Mishra"
      description="Thoughts on the internet."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-12 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-stone-100">
          Blog
        </h1>
        <div className="relative w-full mb-12">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles..."
            className="block w-full px-4 py-3 text-stone-900 bg-stone-100 border-0 rounded-lg focus:ring-2 focus:ring-stone-300 dark:bg-stone-900 dark:text-stone-100 dark:focus:ring-stone-700 placeholder:text-stone-400 dark:placeholder:text-stone-500"
          />
          <svg
            className="absolute w-5 h-5 text-stone-400 right-4 top-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!filteredBlogPosts.length && (
          <p className="text-stone-500 dark:text-stone-400">
            No posts found.
          </p>
        )}
        <div className="flex flex-col w-full">
          {filteredBlogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}