import 'nprogress/nprogress.css'
import '@src/styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { SEO } from '../seo.config'

import { Layout } from '@src/components'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      {/* <TopProgressBar /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
