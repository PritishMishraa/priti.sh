import BlogLayout from 'layout/blog';
import components from 'components/MDXComponents';
import { allBlogs } from '.contentlayer/generated';
import type { Blog } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post }: { post: Blog }) {
    const Component = useMDXComponent(post.body.code);

    return (
        <BlogLayout post={post}>
            <Component
                components={
                    {
                        ...components
                    } as any
                }
            />
        </BlogLayout>
    );
}

export async function getStaticPaths() {
    return {
        paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post = allBlogs.find((post) => post.slug === params.slug);

    return { props: { post } };
}