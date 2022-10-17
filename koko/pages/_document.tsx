// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-koko-white dark:bg-koko-black text-koko-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}