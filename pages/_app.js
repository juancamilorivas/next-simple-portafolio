import 'bootswatch/dist/cosmo/bootstrap.min.css';
import '../global.css';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Camilo's Portafolio</title>
      </Head>
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-5PZQ95PC" />
      {/* Renderización del componente actual */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
