import useTranslation from 'next-translate/useTranslation'
import { MainLayout } from '@/components/layouts'
import { SigTab } from '@/components/sections/Signatures'

const Signatures = () => {
  const { t } = useTranslation('signatures')

  const JumbotronJSON = {
    header: t('jumbotron.heading'),
    text: t('jumbotron.text'),
    width: 1000,
  }

  return (
    <MainLayout jumbotronData={JumbotronJSON}>
      <SigTab />
    </MainLayout>
  )
}

export default Signatures
