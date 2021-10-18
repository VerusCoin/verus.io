import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { primary } from 'styles/themes'
import Nexthead from 'next/head'

import { BaseCSS } from 'styled-bootstrap-grid'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../next-seo.config'

export default function App({ Component, pageProps }: AppProps): any {
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
      <ThemeProvider theme={primary}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
