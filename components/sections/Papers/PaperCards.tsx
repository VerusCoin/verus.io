import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'

import { DefaultText, SVGs, Card, CardText } from '@/components/elements'

import { IPaper } from '@/types/paperspage'

const StyledDownload = styled.a<any>`
  display: inline-flex;
  align-items: center;
  border: 0;
  padding: 16px 30px;
  background: ${(props) => props.theme.buttons.primary.bg};
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  color: ${(props) => props.theme.buttons.primary.text};
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transitions.regular};
  text-decoration: none;
  font-family: ${(props) => props.theme.typo.header.family};

  ${media.desktop`
    ${(props: any) => props.wide && `padding: 20px 60px;`}
  `}

  svg {
    fill: ${(props) => props.theme.buttons.primary.text};
  }

  &:hover {
    background: ${(props) => props.theme.buttons.primary.hover.bg};
  }
`
const StyledSVG = styled.div`
  margin-bottom: 0;
  margin-right: 11px;
`
const StyledCardFooter = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  p.pages {
    margin: 16px auto 0;
  }
  ${media.desktop`

    justify-content: space-evenly;
    flex-direction: row;
    margin-left: 19%;
    width: 75%;
    p.pages {
      margin: 16px 0 0;
    }
  `}
`

const PaperCards = ({ paper }: { paper: IPaper }) => {
  const { t } = useTranslation('papers')

  return (
    <Card
      styles="padding: 86px 25px 62px; "
      tabletStyles="padding: 86px 25px 62px; "
      desktopStyles="padding: 86px 25px 62px;"
      medium
    >
      <div>
        <CardText color="#676767" margin="0" text={paper.title} />
        <CardText fontSz="lg" book text={paper.heading} />
        <div>
          <CardText fontSz="xs" text={`${t('writtenBy')}:`} />

          {paper.writtenBy.map((auth, index) => (
            <CardText fontSz="xs" margin="0" text={auth} key={index} />
          ))}
        </div>
      </div>
      <StyledCardFooter>
        <StyledDownload href={`/papers/${paper.file}`} download>
          <StyledSVG>
            <SVGs name="download" />
          </StyledSVG>
          <DefaultText>Download PDF</DefaultText>
        </StyledDownload>
        <CardText
          className="pages"
          fontSz="menu"
          text={`${paper.pages} ${t('pages')}`}
        />
      </StyledCardFooter>
    </Card>
  )
}

export default PaperCards

{
  /* <StyledDownload href={`/papers/${file}`} download> */
}
