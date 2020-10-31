import 'nprogress/nprogress.css';
import '../styles/globals.css';
import '../styles/fonts/font.css';
import '../styles/tab.css';

import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../seo.config';

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar.js');
  },
  { ssr: false }
);

import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <TopProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
