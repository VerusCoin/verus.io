import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { primary } from 'styles/themes'
import Nexthead from 'next/head'
import { BaseCSS } from 'styled-bootstrap-grid'

export default function App({ Component, pageProps }: AppProps): any {
  return (
    <>
      <GlobalStyle />
      <BaseCSS />
      <Nexthead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Verus</title>
      </Nexthead>
      <ThemeProvider theme={primary}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
