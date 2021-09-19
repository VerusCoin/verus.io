import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Section } from '@/components/layouts'
import { DefaultHeader } from '@/components/elements'
import { SigTab } from '@/components/sections/Signatures'

const Signatures = () => {
  const { t } = useTranslation('signatures')

  return (
    <MainLayout>
      <Section
        width={900}
        styles="margin-bottom: 75px !important; margin-top:75px;"
      >
        <DefaultHeader align="center">{t('heading')}</DefaultHeader>
      </Section>
      <SigTab />
    </MainLayout>
  )
}

export default Signatures
