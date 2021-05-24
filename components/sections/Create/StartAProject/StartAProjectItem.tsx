import styled from 'styled-components'
import { Row, Col, media } from 'styled-bootstrap-grid'
import { DefaultText, DefaultHeader, SVGs, NetTag } from '@/components/elements'
import parse from 'html-react-parser'
import { spacer, fontSize } from '@/styles/helpers'
import { IStartAProjectItem } from '@/types/createpage'

const StyledContainer = styled.div`
  ${spacer('xxl')}
`

const StyledSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spaces.md};
  color: ${(props) => props.theme.colors.white};
  margin-top: ${(props) => props.theme.spaces.xs};

  ${media.desktop`
    margin-bottom: 0;
  `};
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    margin-top: ${(props) => props.theme.spaces.xs};
  }

  ${media.desktop`
    align-items: flex-start;
    
    p {
      text-align: left;
      
    }
  `}
`

const StyledQuestion = styled.div`
  margin-top: ${(props) => props.theme.spaces.md};
  max-width: 490px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid #5088ff;

  border-radius: 7px;
  p {
    margin: 0;
    ${fontSize('xs')}

    span {
      font-weight: ${(props) => props.theme.typo.primary.weight.bold};
    }
  }
`

const StartAProjectItem: React.FC<IStartAProjectItem> = ({
  svgName,
  net,
  service,
  header,
  text,
  question,
}) => {
  return (
    <StyledContainer>
      <Row justifyContent="center">
        <Col col={12} lg={6}>
          <StyledSVG>
            <SVGs name={svgName} />
          </StyledSVG>
        </Col>
        <Col col={12} lg={6}>
          <StyledTextContainer>
            <NetTag net={net}>{service}</NetTag>
            <DefaultHeader customColor="white">{header}</DefaultHeader>
            <DefaultText>{text}</DefaultText>
            {question && (
              <StyledQuestion>
                <DefaultText>{parse(question)}</DefaultText>
              </StyledQuestion>
            )}
          </StyledTextContainer>
        </Col>
      </Row>
    </StyledContainer>
  )
}

export default StartAProjectItem
