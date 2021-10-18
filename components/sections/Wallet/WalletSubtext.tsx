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
        'justify-content:unset; min-height:unset; padding: 100px 160px 50px;'
      }
      desktopStyles={
        'min-height:unset; padding: 100px 200px 0; height: unset !important;'
      }
      giantStyles={'padding: 100px 260px 0;'}
    >
      <CardText
        margin="0"
        align="left"
        fontSz="xs"
        color="#676767"
        text={t('walletSubtext.para1')}
      />
      <CardText
        align="left"
        fontSz="xs"
        color="#676767"
        text={t('walletSubtext.para2')}
      />
    </Card>
  )
}

export default WalletSubtext
