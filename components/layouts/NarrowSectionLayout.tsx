import React from 'react'
import styled from 'styled-components'
import { Row, Container, media } from 'styled-bootstrap-grid'
import { spacer, bgColor } from '@/styles/helpers'
import { INarrowSection } from '@/types/layouts'

const StyledNarrowSection = styled.div<any>`
  ${spacer('xxl')}

  ${(props: any) => bgColor(props.colorBG)}
  border-radius: ${(props) => props.theme.borders.sm};
  padding: ${(props) => props.theme.spaces.md};

  ${media.desktop`
    padding: ${(props: any) =>
      props.cPadding
        ? `${props.cPadding}px`
        : props.theme.spaces.custom.narrowSection};
  `}

  a,
  button {
    margin-top: ${(props) => props.theme.spaces.md};
  }
`

const NarrowSectionLayout: React.FC<INarrowSection> = ({
  colorBG = 'blue',
  cPadding,
  children,
}) => {
  return (
    <Container>
      <StyledNarrowSection colorBG={colorBG} cPadding={cPadding}>
        <Row justifyContent="center">{children}</Row>
      </StyledNarrowSection>
    </Container>
  )
}

export default NarrowSectionLayout
