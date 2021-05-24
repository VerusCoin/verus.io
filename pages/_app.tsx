import { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { primary } from 'styles/themes'
import Nexthead from 'next/head'
import { BaseCSS, media } from 'styled-bootstrap-grid'

const StyledContainer = styled.div`
  padding-top: ${(props) => props.theme.spaces.custom.mobileMenu};

  ${media.desktop`
    padding-top: ${(props: any) => props.theme.spaces.custom.desktopMenu};
  `}
`

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
        <StyledContainer>
          <Component {...pageProps} />
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}
