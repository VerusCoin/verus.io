import 'nprogress/nprogress.css'
import '@src/styles/globals.css'

import dynamic from 'next/dynamic'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../seo.config'

const TopProgressBar = dynamic(
  () => {
    return import('@src/components/TopProgressBar')
  },
  { ssr: false }
)

import { Layout } from '@src/components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <TopProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
