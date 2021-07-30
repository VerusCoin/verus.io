import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Button, CardText } from '@/components/elements'
import useTranslation from 'next-translate/useTranslation'

const StyledBanner = styled.div<any>`
  border-radius: 20px;
  padding: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  grid-column: span 2;
  background-image: url('/images/bg-green.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${media.tablet`   
    
    padding: 120px 106px;
  `}
  ${media.desktop`
    padding: 210px 106px;
  `}
`

const Banner = () => {
  const { t } = useTranslation('foundation')
  return (
    <StyledBanner>
      <CardText book fontSz="xl" color="white" text={t('highEfficient')} />
      <Button white small color="#3165d4" fontRegular margin="63px 0 0 0">
        {`${t('common:findMore')}`}
      </Button>
    </StyledBanner>
  )
}

export default Banner
