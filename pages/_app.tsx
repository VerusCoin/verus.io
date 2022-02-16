import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { primary } from 'styles/themes'
import Nexthead from 'next/head'
import { BaseCSS } from 'styled-bootstrap-grid'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../next-seo.config'
import { NotifyContext } from '@/lib/Contexts'
import { useState, useEffect } from 'react'
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
  useEffect(() => {
    if (initialize) {
      if (data?.blockCount) {
        setNotify(true)
        setInitialize(false)
      } else {
        setNotify(false)
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
      <NotifyContext.Provider value={{ notify, setNotify, ...data }}>
        <ThemeProvider theme={primary}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NotifyContext.Provider>
    </>
  )
}
