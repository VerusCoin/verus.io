import React from 'react'
import styled from 'styled-components'
import { IUniqueSellingPoints } from '@/types/homepage'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import { Button, DefaultHeader } from '@/components/elements'
import UniqueSellingPointItem from './UniqueSellingPointItem'
import parse from 'html-react-parser'
import { spacer } from '@/styles/helpers'

const StyledUniqueSellingPoints = styled.div`
  ${spacer('xxl')}

  background-color: ${(props) => props.theme.colors.grey.quaternary};
  border-radius: ${(props) => props.theme.borders.sm};
  padding: ${(props) => props.theme.spaces.xl};

  ${media.desktop`
    padding: ${(props: any) => props.theme.spaces.custom.narrowSection};
    
    h2 {
        padding: 0 150px;
     }
  `}
`

const StyledRadiusContainer = styled.div`
  margin-top: ${(props) => props.theme.spaces.lg};
  border-radius: ${(props) => props.theme.borders.sm};
  overflow: hidden;
`

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spaces.lg};
`

const UniqueSellingPoints: React.FC<IUniqueSellingPoints> = ({
  items,
  title,
}) => {
  return (
    <Container>
      <StyledUniqueSellingPoints>
        <Row justifyContent="center">
          <Col col={12} lg={9}>
            <DefaultHeader as="h2" align="center">
              {parse(title)}
            </DefaultHeader>

            <StyledRadiusContainer>
              <Row>
                {items.map((item, index) => {
                  return (
                    <Col key={`usp_${index}`} col={12} lg={6} noGutter>
                      <UniqueSellingPointItem {...item} />
                    </Col>
                  )
                })}
              </Row>
            </StyledRadiusContainer>

            <StyledButtonContainer>
              <Button transparent wide svg={{ type: 'arrow', rotate: false }}>
                Detailed Information
              </Button>
            </StyledButtonContainer>
          </Col>
        </Row>
      </StyledUniqueSellingPoints>
    </Container>
  )
}

export default UniqueSellingPoints
