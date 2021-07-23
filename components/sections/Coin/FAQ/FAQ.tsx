import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import DefaultText from '@/components/elements/DefaultText/DefaultText'
import DefaultHeader from '@/components/elements/DefaultHeader/DefaultHeader'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
  resetNextUuid,
} from 'react-accessible-accordion'
import { spacer } from '@/styles/helpers'

import useTranslation from 'next-translate/useTranslation'
import { SVGs } from '@/components/elements/SVGs/SVGs'
import { IFAQ } from '@/types/coinpage'

const StyledFAQ = styled.div`
  ${spacer('xxl')}
`

const StyledAccordion = styled(Accordion)`
  width: 100%;
  margin-top: ${(props) => props.theme.spaces.xl};
  ${media.desktop`
    width: 732px;
  `}
  .accordion__item + .accordion__item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    justify-content: space-between;

    &:focus {
      outline: none !important;
    }
  }

  .accordion__panel {
    padding: 20px;
    animation: fadein 0.35s ease-in;
  }
`
const StyledSVG = styled.div<any>`
  svg {
    width: 16px;
    height: 16px;
    transition: transform ${(props) => props.theme.transitions.regular};
    transform: ${(props: any) => (props.expanded ? '' : 'rotate(-90deg)')};
  }
`

const FAQ: React.FC<IFAQ> = ({ data }) => {
  resetNextUuid()
  const { t } = useTranslation('coin')
  return (
    <StyledFAQ id="FAQ">
      <Container>
        <Row justifyContent="center">
          <Col col={12}>
            <DefaultHeader as="h3" align="center">
              {t('faq.heading')}
            </DefaultHeader>
          </Col>
        </Row>
        <Row justifyContent="center">
          <StyledAccordion allowZeroExpanded>
            {data.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <DefaultHeader as="h5">
                      {t(`faq.${item.faq}.question`)}
                    </DefaultHeader>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <StyledSVG expanded={expanded}>
                          <SVGs name="arrowDown" />
                        </StyledSVG>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <DefaultText>{t(`faq.${item.faq}.question`)}</DefaultText>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </StyledAccordion>
        </Row>
      </Container>
    </StyledFAQ>
  )
}

export default FAQ
