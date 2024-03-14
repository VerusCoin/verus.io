import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { primary } from 'styles/themes'
import Nexthead from 'next/head'
import { BaseCSS } from 'styled-bootstrap-grid'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../next-seo.config'
import { NotifyContext } from '@/lib/Contexts'
import { useState } from 'react'
import useSWR from 'swr'
import NextNProgress from 'nextjs-progressbar'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function App({ Component, pageProps }: AppProps): any {
  //TODO: need to do a quick fetch once to make sure value is still true for Notify
  const [notify, setNotify] = useState<boolean>(false)
  const { data } = useSWR('/api/notifyBannerCounter', fetcher, {
    refreshInterval: 60000,
  })
  const [initialize, setInitialize] = useState(true)
  // const dateDiff =
  //   (new Date('06/03/2023').getTime() - new Date().getTime()) /
  //   (1000 * 3600 * 24)
  useEffect(() => {
    if (data) {
      if (initialize) {
        if (data?.blockCount && data.blockCount > 0) { //used to manage banner based on block height
          setNotify(true)
          setInitialize(false)
        } else {
          setNotify(false)
        }

        // if (dateDiff > 0) { //used to manage banner based on date
        //   setNotify(true)
        //   setInitialize(false)
        // } else {
        //   setNotify(false)
        // }
      }
    }
  }, [data])

  return (
    <>
      <NextNProgress />
      <GlobalStyle />
      <BaseCSS />
      <DefaultSeo {...SEO} />
      <Nexthead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Nexthead>
      <NotifyContext.Provider
        value={{
          notify,
          setNotify,
          blockString: data?.blockString,
          blockCount: data?.blockCount,
        }}
      >
        <ThemeProvider theme={primary}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NotifyContext.Provider>
    </>
  )
}
