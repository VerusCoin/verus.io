import React from 'react'
import styled from 'styled-components'
import { IUspBanner } from '@/types/homepage'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import { Button, DefaultText, SVGs } from '@/components/elements'

import { spacer, fontSize } from '@/styles/helpers'

const StyledUspBanner = styled.div`
  ${spacer('xxl')}

  background-color: ${(props) => props.theme.colors.blue.primary};
  border-radius: ${(props) => props.theme.borders.sm};
  padding: ${(props) => props.theme.spaces.md};

  ${media.desktop`
    padding: ${(props: any) => props.theme.spaces.custom.narrowSection};
  `}

  a,
  button {
    margin-top: ${(props) => props.theme.spaces.md};
  }
`

const StyledSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spaces.md};
  color: ${(props) => props.theme.colors.white};

  ${media.desktop`
    margin-bottom: 0;
  `}
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    ${fontSize('md')}

    font-family: ${(props) => props.theme.typo.header.family};
    color: ${(props) => props.theme.colors.white};
    text-align: center;
  }

  ${media.desktop`
    align-items: flex-start;
    
    p {
      text-align: left;
    }
  `}
`

const UspBanner: React.FC<IUspBanner> = ({ svg, text, button }) => {
  return (
    <Container>
      <StyledUspBanner>
        <Row>
          {svg && (
            <Col col={12} lg={5}>
              <StyledSVG>{svg === 'usp' && <SVGs name={svg} />}</StyledSVG>
            </Col>
          )}

          <Col col={12} lg={svg ? 7 : 12}>
            <StyledTextContainer>
              <DefaultText>{text}</DefaultText>

              {button && (
                <Button
                  primary
                  wide
                  as="a"
                  href={button.href}
                  svg={{ type: 'tab' }}
                >
                  {button.text}
                </Button>
              )}
            </StyledTextContainer>
          </Col>
        </Row>
      </StyledUspBanner>
    </Container>
  )
}

export default UspBanner
