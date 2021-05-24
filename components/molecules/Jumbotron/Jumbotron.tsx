import React from 'react'
import styled from 'styled-components'
import { IJumbotron } from '@/types/molecules'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import parse from 'html-react-parser'
import { Button, DefaultHeader } from '@/components/elements'
import { spacer } from '@/styles/helpers'

const StyledJumbotron = styled.section`
  ${spacer('xxl')}
`

const StyledJumbotronContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledJumbotronText = styled.h1<any>`
  width: 100%;

  ${media.desktop`
  width: ${(props: any) =>
    props.customWidth ? `${props.customWidth}px` : '720px'};
    
  `}

  span {
    color: ${(props) => props.theme.colors.blue.primary};
    position: relative;

    &::after {
      ${media.tablet`
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg width='416' height='417' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='208' cy='208.5' rx='208' ry='208.5' transform='rotate(-180 208 208.5)' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='208' y1='0' x2='208.609' y2='251.659' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23E8EFFF'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
      width: 416px;
      height: 417px;
      position: absolute;
      z-index: -1;
      left:  ${(props: any) => (props.left ? `${props.left}px` : '20px')};
      top: 120px;
      transform: translateY(-100%);
      `}
    }
  }
`

const Jumbotron: React.FC<IJumbotron> = ({ text, button, width, left }) => {
  return (
    <StyledJumbotron>
      <Container>
        <Row>
          <Col col={12}>
            <StyledJumbotronContainer>
              <StyledJumbotronText customWidth={width} left={left}>
                <DefaultHeader as="h1" align="center">
                  {parse(text)}
                </DefaultHeader>
              </StyledJumbotronText>

              {button && <Button wide>{button.text}</Button>}
            </StyledJumbotronContainer>
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  )
}

export default Jumbotron
