import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'


export default function Document() {
  return (
    <Html>
      <Head>
      <GoogleTagManager gtmId="GTM-5PZQ95PC" />
        <link rel="icon" href="../public/favicon.png" legacyBehavior />
        <meta content="Camilo's Portafolio" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" legacyBehavior />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
