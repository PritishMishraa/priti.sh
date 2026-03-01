import cn from 'classnames';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';
import useDelayedRender from 'lib/use-delayed-render';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute bg-stone-100 dark:bg-neutral-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="text-sm text-stone-900 border-b border-stone-200 dark:border-stone-800 dark:text-stone-100"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/" className="flex w-auto pb-4">
              Home
            </Link>
          </li>
          <li
            className="text-sm text-stone-900 border-b border-stone-200 dark:border-stone-800 dark:text-stone-100"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/project" className="flex w-auto pb-4">
              Projects
            </Link>
          </li>
          <li
            className="text-sm text-stone-900 border-b border-stone-200 dark:border-stone-800 dark:text-stone-100"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/blog" className="flex w-auto pb-4">
              Blog
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-5 h-5 text-stone-700 dark:text-stone-300"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-5 h-5 text-stone-700 dark:text-stone-300"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
