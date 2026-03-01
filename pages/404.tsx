import Link from 'next/link';
import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Pritish Mishra">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto py-24">
        <h1 className="mb-4 text-4xl font-semibold text-stone-900 dark:text-stone-100">
          404
        </h1>
        <p className="mb-8 text-stone-600 dark:text-stone-400">
          Page not found.
        </p>
        <Link
          href="/"
          className="text-stone-600 dark:text-stone-400 transition-colors duration-200 hover:text-stone-900 dark:hover:text-stone-100 underline underline-offset-4 decoration-stone-300 dark:decoration-stone-700 hover:decoration-stone-500"
        >
          Return home
        </Link>
      </div>
    </Container>
  );
}
