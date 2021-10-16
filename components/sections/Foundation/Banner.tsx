import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Button, CardText } from '@/components/elements'
import Modal, { useModal } from '@/components/elements/Modal/Modal'
import useTranslation from 'next-translate/useTranslation'

const StyledBanner = styled.div<any>`
  border-radius: 8px;
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

  height: 520px;
  ${media.tablet`   
    border-radius: 20px;
    padding: 120px 106px;
  `}
  ${media.desktop`
    padding: 210px 106px;
    height: 750px;
  `}
`

const Banner = () => {
  const { t } = useTranslation('foundation')
  const { isShown, toggle } = useModal()
  return (
    <StyledBanner>
      <CardText
        book
        fontSz="xl"
        color="white"
        text={t('highEfficient.header')}
      />
      <Button
        onClick={toggle}
        white
        small
        color="#3165d4"
        fontRegular
        margin="63px 0 0 0"
      >
        {`${t('common:findMore')}`}
      </Button>
      <Modal
        isShown={isShown}
        hide={toggle}
        title={t('highEfficient.modal.header')}
        text={t('highEfficient.modal.text')}
      />
    </StyledBanner>
  )
}

export default Banner
