import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container, media } from 'styled-bootstrap-grid'
import { DefaultText, DefaultHeader, Button } from '@/components/elements'
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
import Trans from 'next-translate/Trans'
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

const FAQ = ({ data }: IFAQ) => {
  resetNextUuid()
  const { t } = useTranslation('faq')
  return (
    <StyledFAQ id="FAQ">
      <Container>
        <Row justifyContent="center">
          <Col col={12}>
            <DefaultHeader as="h3" align="center">
              {t('heading')}
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
                      {t(`faqs.${item.faq}.question`)}
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
                  {item.link ? (
                    <Trans
                      i18nKey={`faq:faqs.${item.faq}.answer`}
                      components={{
                        0: <DefaultText fam="geoReg" />,
                        1: (
                          <Button
                            href={item.link}
                            transparent
                            small
                            fontRegular
                            as="a"
                            color="#0A3FB1"
                          />
                        ),
                      }}
                    />
                  ) : item.query ? (
                    <DefaultText fam="geoReg">
                      {t(`faqs.${item.faq}.answer`, { circSupply: '[API]' })}
                    </DefaultText>
                  ) : (
                    <DefaultText>{t(`faqs.${item.faq}.answer`)}</DefaultText>
                  )}
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
