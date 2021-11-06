import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Geomanist Book";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Geomanist-Book.woff2") format("woff2"), url("/fonts/Geomanist-Book.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Geomanist Regular";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Geomanist-Regular.woff2") format("woff2"), url("/fonts/Geomanist-Regular.woff") format("woff");
    font-display: swap;
  }
  
  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/SourceSansPro-Regular.woff2") format("woff2"), url("/fonts/SourceSansPro-Regular.woff") format("woff");
    font-display: swap;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: "Geomanist Regular", sans-serif;
  }
  
`
