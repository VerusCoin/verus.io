import useTranslation from 'next-translate/useTranslation'

import { Card, CardText } from '@/components/elements'

const WalletSubtext = () => {
  const { t } = useTranslation('common')
  return (
    <Card
      span={2}
      styles={
        'background-color: transparent; justify-content:unset; min-height:unset; padding: 100px 30px 50px;'
      }
      tabletStyles={
        'justify-content:unset; min-height:unset; padding: 100px 60px 50px;'
      }
      desktopStyles={
        'min-height:unset; padding: 100px 60px 0; height: unset !important;'
      }
    >
      <CardText
        margin="0"
        align="left"
        fontSz="xs"
        text={t('walletSubtext.para1')}
      />
      <CardText align="left" fontSz="xs" text={t('walletSubtext.para2')} />
    </Card>
  )
}

export default WalletSubtext
