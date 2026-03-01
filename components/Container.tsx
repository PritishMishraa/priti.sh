import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'text-stone-900 dark:text-stone-100'
          : 'text-stone-500 dark:text-stone-400',
        'hidden md:inline-block px-3 py-2 transition-colors duration-200 hover:text-stone-900 dark:hover:text-stone-100'
      )}
    >
      <span>{text}</span>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Pritish Mishra',
    description: `Full Stack Developer`,
    image: 'https://pritish.in/static/images/pritish-banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-stone-50 dark:bg-dark-bg">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://pritish.in${router.asPath}`} />
        <link rel="canonical" href={`https://pritish.in${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Pritish Mishra" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PritishhMishraa" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="relative flex items-center justify-between w-full max-w-2xl py-8 mx-auto sm:py-12">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="flex items-center gap-1">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/project" text="Projects" />
            <NavItem href="/blog" text="Blog" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 transition-colors duration-200 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-stone-50 dark:bg-dark-bg"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
