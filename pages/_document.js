import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="../public/favicon.png" />
        <meta content="Camilo's Portafolio" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" legacyBehavior/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
