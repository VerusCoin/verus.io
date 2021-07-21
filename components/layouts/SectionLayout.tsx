// This will be the re-usable template for Sectional layouts
// There will be the ability to configure the width and color
// of the section in order to reduce repeatable code.
import React from 'react'
import styled from 'styled-components'
import { ISection } from '@/types/layouts'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import { spacer, bgColor } from '@/styles/helpers'

const StyledSection = styled.div<any>`
  ${(props) => props.base && spacer('xxl')}
  ${(props) => bgColor(props.bG)}
  ${(props: any) =>
    props.border &&
    ` margin-bottom: ${props.theme.spaces.xl};
      padding-top: ${props.theme.spaces.xl};
      border-top: 1px solid ${props.theme.colors.grey.primary};
  `}
`

const StyledSectionContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSectionText = styled.div<any>`
  ${media.desktop`
    ${(props: any) => props.customWidth && `width: ${props.customWidth}px;`}
  `}

  a,
  button {
    margin-top: ${(props) => props.theme.spaces.sm};
  }
`

const SectionLayout: React.FC<ISection> = ({
  bG = 'inherit',
  width,
  border,
  base = true,
  children,
}) => {
  return (
    <StyledSection border={border} bG={bG}>
      <Container>
        <Row>
          <Col col={12}>
            <StyledSectionContainer>
              <StyledSectionText customWidth={width}>
                {children}
              </StyledSectionText>
            </StyledSectionContainer>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default SectionLayout
