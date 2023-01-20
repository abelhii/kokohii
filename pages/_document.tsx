// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-koko-light dark:bg-koko-dark text-koko-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}