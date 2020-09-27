import 'nprogress/nprogress.css';

import '../styles/globals.css';
import '../styles/geomanist-regular-stylesheet.css';
import '../styles/geomanist-book-stylesheet.css';

import dynamic from 'next/dynamic';
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
      <TopProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
