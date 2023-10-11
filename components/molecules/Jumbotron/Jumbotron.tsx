import React from 'react'
import styled from 'styled-components'
import { IJumbotron } from '@/types/molecules'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import parse from 'html-react-parser'
import { Button, DefaultHeader, DefaultText, SVGs } from '@/components/elements'
import { fontSize, spacer } from '@/styles/helpers'
import { Grid } from '@/components/layouts'
import { FaYoutube } from 'react-icons/fa'

const StyledJumbotron = styled.section<any>`
  ${spacer('xl')}

  ${media.tablet`
  ${(props: any) =>
    props.main &&
    `
    
      background-image: url('/images/bg-header-website-1.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      
  }
    
    `}
  
  `}
  ${(props) =>
    props.main &&
    `
    max-width: 1440px;
    @media (min-width: 1440px) {
      margin-left: auto;
      margin-right: auto;
  `}
`

const StyledJumbotronContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: ${(props) => props.theme.spaces.sm};
  }
  a.youtube {
    text-decoration: underline;
    svg {
      height: 13px;
    }
  }
  .jumboGrid {
    min-width: 0px;
    max-width: 800px;
    grid-gap: 0;
    margin: 0 auto;
  }
  .btn1 {
    border: #3165d4 2px solid;
  }
  .btn2 {
    color: black;
    border: solid 2px black;
  }

  ${media.desktop`
    .jumboGrid {
      grid-gap: 0 130px;
    }
  `}
`

const StyledJumbotronText = styled.div<any>`
  width: 100%;
  .titleText {
    line-height: 35px;
  }
  ${media.desktop`
  width: ${(props: any) =>
    props.customWidth ? `${props.customWidth}px` : '720px'};
  
  `}

  span {
    color: ${(props) => props.theme.colors.blue.primary};
    position: relative;
  }
`
const StyledJumbotronTitle = styled.div`
  margin-top: 70px;
  h1 {
    font-family: 'Geomanist Bold', sans-serif;
  }
  .extraLarge {
    max-width: 350px;
    ${fontSize('xxxl')}

    margin: 25px 0 32px;
  }
  ${media.tablet`
    .extraLarge {
      max-width: 600px;
    }
  `}
  ${media.desktop`
    .extraLarge {
      max-width: 700px;
    }
  `}
`

// &::after {
//   ${media.tablet`
//   content: '';
//   background-image: url("data:image/svg+xml,%3Csvg width='416' height='417' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='208' cy='208.5' rx='208' ry='208.5' transform='rotate(-180 208 208.5)' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='208' y1='0' x2='208.609' y2='251.659' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23E8EFFF'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
//   width: 416px;
//   height: 417px;
//   position: absolute;
//   z-index: -1;
//   left: 20px;
//   top: 120px;
//   transform: translateY(-100%);
//   `}
// }

const YouTubeFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: span 2;
  margin-top: ${(props) => props.theme.spaces.md};
  svg.logo {
    margin-right: 5px;
    color: red;
  }
  a {
    margin-top: 0;
  }
`
const EthereumFrame = styled(YouTubeFrame)`
  margin-top: ${(props) => props.theme.spaces.xs};
`
//Two different Jumbotrons
// 1) typical header with or without text or links
// 2) header with split format at bottom one for button and the other for text

const Jumbotron = ({
  title,
  header,
  text,
  texts,
  color = 'blue',
  button,
  buttons,
  youtube,
  ethlink,
  width,
  main = false,
}: IJumbotron) => {
  return (
    <StyledJumbotron main={main}>
      <Container>
        <Row>
          <Col col={12}>
            <StyledJumbotronContainer>
              {title && header ? (
                <>
                  <StyledJumbotronTitle>
                    <DefaultText
                      fontSz="sm"
                      align="center"
                      customColor="#676767"
                    >
                      {parse(title)}
                    </DefaultText>
                    <DefaultHeader
                      as="h1"
                      align="center"
                      className="extraLarge"
                      customColor="#3165d4"
                    >
                      {parse(header)}
                    </DefaultHeader>
                  </StyledJumbotronTitle>
                  {texts && (
                    <StyledJumbotronText main={main} customWidth={width}>
                      {texts.map((item, index) => (
                        <DefaultText
                          key={index}
                          fontSz="md"
                          fam="geoHead"
                          align="center"
                          className="titleText"
                        >
                          {parse(item)}
                        </DefaultText>
                      ))}
                    </StyledJumbotronText>
                  )}
                </>
              ) : (
                <StyledJumbotronText customWidth={width}>
                  {header && (
                    <DefaultHeader
                      as="h1"
                      customColor={color}
                      fontNormal
                      align="center"
                      headerStyle="margin-bottom: 32px;"
                    >
                      {parse(header)}
                    </DefaultHeader>
                  )}
                  {text && (
                    <DefaultHeader fontNormal align="center">
                      {parse(text)}
                    </DefaultHeader>
                  )}
                </StyledJumbotronText>
              )}

              {button && <Button wide>{button.text}</Button>}
              {buttons && main && (
                <Row justifyContent="center">
                  <Col auto>
                    <Button
                      fontSize="menu"
                      href={buttons[0].href}
                      as="a"
                      color="#3165d4"
                      className="btn1"
                    >
                      {buttons[0].text}
                    </Button>
                  </Col>
                  <Col auto>
                    <Button
                      className="btn2"
                      white
                      fontSize="menu"
                      href={buttons[1].href}
                      as="a"
                    >
                      {buttons[1].text}
                    </Button>
                  </Col>

                  {youtube && (
                    <Col xs={12}>
                      <YouTubeFrame>
                        <FaYoutube className="logo" size="24px" />
                        <Button
                          className="youtube"
                          transparent
                          svg={{ type: 'miniTab', rotate: false }}
                          href={youtube.href}
                          fontSize="xs"
                          as="a"
                          margin="45px 0 0"
                          target="_blank"
                        >
                          {youtube.text}
                        </Button>
                      </YouTubeFrame>
                    </Col>
                  )}
                  {ethlink && (
                    <Col xs={12}>
                      <EthereumFrame>
                        <SVGs name="ethlogo" />

                        <Button
                          transparent
                          className="youtube"
                          href={ethlink.href}
                          fontSize="xs"
                          as="a"
                          margin="45px 0 0"
                        >
                          {ethlink.text}
                        </Button>
                      </EthereumFrame>
                    </Col>
                  )}
                </Row>
              )}
              {buttons && !main && (
                <Grid className="jumboGrid">
                  {buttons.map((item, index) => (
                    <Button
                      transparent
                      svg={{ type: 'arrow', rotate: false }}
                      href={item.href}
                      as="a"
                      color="#3165d4"
                      key={index}
                    >
                      {item.text}
                    </Button>
                  ))}
                  {youtube && (
                    <YouTubeFrame>
                      <FaYoutube className="logo" size="24px" />
                      <Button
                        className="youtube"
                        transparent
                        svg={{ type: 'miniTab', rotate: false }}
                        href={youtube.href}
                        fontSize="xs"
                        as="a"
                        color="#676767"
                        margin="45px 0 0"
                        target="_blank"
                      >
                        {youtube.text}
                      </Button>
                    </YouTubeFrame>
                  )}
                </Grid>
              )}
            </StyledJumbotronContainer>
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  )
}

export default Jumbotron
