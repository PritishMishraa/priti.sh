import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png" />
        <link
          rel="manifest"
          href="/site.webmanifest" />
        <meta
          name="msapplication-TileColor"
          content="#ffffff" />
        <meta
          name="theme-color"
          content="#ffffff" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots" />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "abf38da9bf214a54b7550cee4b415c7b"}'></script>
      </Head>
      <body className="text-white bg-white dark:bg-black dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
