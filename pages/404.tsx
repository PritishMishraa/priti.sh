import Link from 'next/link';
import countapi from 'countapi-js'
import { useEffect, useState } from 'react';

import Container from 'components/Container';
import ViewCounter from 'components/RetroHitCounter';

export default function NotFound() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        await countapi.hit("pritish.in", "404visit")
        const { value } = await countapi.get("pritish.in", "404visit");
        setCount(value);
      })();
    } catch (error) {
      setCount(0);
    }

  }, []);

  const Loading = () => {
    return (
      <div className="flex items-end">
        <h2 className='font-mono text-5xl font-bold text-black dark:text-white'>You are the</h2>
        <span className="pb-4 ml-1 typing">
          <span className='bg-black dark:bg-white'></span>
          <span className='bg-black dark:bg-white'></span>
          <span className='bg-black dark:bg-white'></span>
        </span>
      </div>
    )
  }

  const MSG404 = () => {
    return (
      <div className="flex flex-col items-center gap-6">
        <span className='font-mono text-5xl font-bold text-black dark:text-white'>You are the</span>
        <div className="flex">
          <ViewCounter view={count} />
          <span className='font-mono text-3xl font-bold text-black dark:text-white'>th</span>
        </div>
        <span className='font-mono text-5xl font-bold text-black dark:text-white'>lost wander here!</span>
      </div>
    )
  }

  return (
    <Container title="404 – Pritish">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="mt-10 mb-8">
          {count > 0
            ?
            <MSG404 />
            :
            <Loading />
          }
        </div>

        <Link
          href="/"
          className="w-64 p-4 mx-auto font-bold text-center text-black bg-gray-200 rounded-md dark:bg-gray-800 dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
