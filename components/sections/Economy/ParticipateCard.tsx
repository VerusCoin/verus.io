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
  Progressbar,
} from '@/components/elements'

import Cards from '@/components/elements/Cards/Cards'
import CardHeader from '@/components/elements/Cards/CardHeader'
import CardText from '@/components/elements/Cards/CardText'

const ParticipateCard = () => {
  const { t } = useTranslation('economy')
  return (
    <Cards span={2}>
      <Section base={false} width={750}>
        <CardHeader text={t('participate.heading')} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '85px',
            alignItems: 'center',
          }}
        >
          <Button
            transparent
            svg={{ type: 'tab', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('participate.mining')}
          </Button>
          <Button
            transparent
            svg={{ type: 'tab', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('participate.staking')}
          </Button>
          <Button
            transparent
            svg={{ type: 'tab', rotate: false }}
            href="#"
            as="a"
            color="#3165d4"
            fontRegular
          >
            {t('participate.schedule')}
          </Button>
          <div style={{ marginTop: '117px' }}>
            <Img name="mining" height="234px" />
          </div>
        </div>
      </Section>
    </Cards>
  )
}

export default ParticipateCard
