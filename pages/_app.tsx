import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { primary } from 'styles/themes'
import Nexthead from 'next/head'
// import FetchCounter from '@/lib/FetchCounter'
import { BaseCSS } from 'styled-bootstrap-grid'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../next-seo.config'
import { NotifyContext } from '@/lib/Contexts'
import { useState } from 'react'
// import useSWR from 'swr'

// const fetcher = async (url: string) => fetch(url).then((res) => res.json)

export default function App({ Component, pageProps }: AppProps): any {
  //TODO: need to do a quick fetch once to make sure value is still true for Notify
  const [notify, setNotify] = useState<boolean>(false)
  // const { data } = useSWR('/api/noitfyBannerCounter', fetcher)
  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  // useEffect(() => {
  //   async function getCount() {
  //     const result = await FetchCounter()
  //     console.log(result)
  //     if (result > 0) {
  //       console.log('true')
  //       setNotify(true)
  //     } else {
  //       console.log('false')
  //       setNotify(false)
  //     }
  //   }
  //   getCount()
  // }, [])

  return (
    <>
      <GlobalStyle />
      <BaseCSS />
      <DefaultSeo {...SEO} />
      <Nexthead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Nexthead>
      <NotifyContext.Provider value={{ notify, setNotify }}>
        <ThemeProvider theme={primary}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NotifyContext.Provider>
    </>
  )
}
