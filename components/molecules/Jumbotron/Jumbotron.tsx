import React from 'react'
import styled from 'styled-components'
import { IJumbotron } from '@/types/molecules'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import parse from 'html-react-parser'
import { Button, DefaultHeader, DefaultText } from '@/components/elements'
import { fontSize, spacer } from '@/styles/helpers'
import { Grid } from '@/components/layouts'
import { FaYoutube } from 'react-icons/fa'

const StyledJumbotron = styled.section`
  ${spacer('xl')}
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

  ${media.desktop`
    .jumboGrid {
      grid-gap: 0 130px;
    }
  `}
`

const StyledJumbotronText = styled.div<any>`
  width: 100%;

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
    background: linear-gradient(92.26deg, #0A3FB1 18.26%, #3165D4 52.63%, #0A3FB1 88.45%);
    margin: 25px 0 32px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

//Two different Jumbotrons
// 1) typical header with or without text or links
// 2) header with split format at bottom one for button and the other for text

const Jumbotron = ({
  title,
  header,
  text,
  color = 'blue',
  button,
  buttons,
  youtube,
  width,
}: IJumbotron) => {
  return (
    <StyledJumbotron>
      <Container>
        <Row>
          <Col col={12}>
            <StyledJumbotronContainer>
              {title && header ? (
                <StyledJumbotronTitle>
                  <DefaultText fontSz="sm" align="center" customColor="#676767">
                    {parse(title)}
                  </DefaultText>
                  <DefaultHeader as="h1" align="center" className="extraLarge">
                    {parse(header)}
                  </DefaultHeader>
                </StyledJumbotronTitle>
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

              {buttons && (
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
