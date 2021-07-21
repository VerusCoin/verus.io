import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Section, Grid } from '@/components/layouts'
import {
  DefaultHeader,
  DefaultText,
  DefaultLink,
  Button,
  DefaultSVGs,
  Img,
  NetTag,
} from '@/components/elements'

import Cards from '@/components/elements/Cards/Cards'
import CardHeader from '@/components/elements/Cards/CardHeader'
import CardText from '@/components/elements/Cards/CardText'

const EconomicCard = () => {
  const { t } = useTranslation('economy')
  return (
    <Cards span={2}>
      <CardHeader text={t('economic.heading')} />
      <CardText book text={t('economic.text')} />
      <div
        style={{
          margin: '120px 0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NetTag fam="geoHead" fontSz="lg" net="main">
          {t('economic.verus')}
        </NetTag>
        <NetTag fam="geoHead" fontSz="lg" net="test">
          {t('economic.conversion')}
        </NetTag>
        <NetTag fam="geoHead" fontSz="lg" net="test">
          {t('economic.blockchain')}
        </NetTag>
        <NetTag fam="geoHead" fontSz="lg" net="test">
          {t('economic.token')}
        </NetTag>
      </div>
      <Button
        transparent
        svg={{ type: 'tab', rotate: false }}
        href="#"
        as="a"
        color="#3165d4"
        fontRegular
      >
        {t('economic.link')}
      </Button>
    </Cards>
  )
}

export default EconomicCard
