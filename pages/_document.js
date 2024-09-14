import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html>
      <Head>
        <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PZQ95PC');</script>
        <link rel="icon" href="../public/favicon.png" legacyBehavior />
        <meta content="Camilo's Portafolio" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" legacyBehavior />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PZQ95PC"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      </body>
    </Html>
  );
}
