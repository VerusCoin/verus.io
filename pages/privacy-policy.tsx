import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import { MainLayout, Section } from '@/components/layouts'
import { Button, DefaultHeader, DefaultText } from '@/components/elements'

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacyPolicy')
  const title = t('seo:page.privacyPolicy.title')
  const description = t('seo:page.privacyPolicy.description')

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Section
          width={1000}
          styles="margin-bottom: 75px !important; margin-top:75px;"
        >
          <DefaultHeader
            headerStyle="margin: 0 0 20px !important;"
            align="center"
          >
            {t('heading')}
          </DefaultHeader>
          <DefaultHeader
            headerStyle="margin: 0 0 32px !important;"
            align="left"
            as="h4"
          >
            {t('general.heading')}
          </DefaultHeader>
          <Trans
            i18nKey="privacyPolicy:general.text1"
            components={{
              0: (
                <DefaultText
                  customMargin="32px 0"
                  fam="geoReg"
                  customColor="#616161"
                />
              ),
              1: <span style={{ fontWeight: 'bold' }} />,
            }}
          />
          <Trans
            i18nKey="privacyPolicy:general.text2"
            components={{
              0: (
                <DefaultText
                  customMargin="32px 0"
                  fam="geoReg"
                  customColor="#616161"
                />
              ),
              1: (
                <Button
                  href="https://insight.verus.io"
                  transparent
                  fontRegular
                  as="a"
                  color="#0A3FB1"
                  fontSize="menu"
                  target="_blank"
                  margin="0 !important"
                />
              ),
            }}
          />
          <DefaultHeader
            headerStyle="margin: 0 0 32px !important;"
            align="left"
            as="h4"
          >
            {t('logs.heading')}
          </DefaultHeader>
          <DefaultText customMargin="32px 0" fam="geoReg" customColor="#616161">
            {t('logs.text')}
          </DefaultText>
          <DefaultHeader
            headerStyle="margin: 0 0 32px !important;"
            align="left"
            as="h4"
          >
            {t('forms.heading')}
          </DefaultHeader>
          <DefaultText customMargin="32px 0" fam="geoReg" customColor="#616161">
            {t('forms.text')}
          </DefaultText>
          <DefaultHeader
            headerStyle="margin: 0 0 32px !important;"
            align="left"
            as="h4"
          >
            {t('contact.heading')}
          </DefaultHeader>
          <Trans
            i18nKey="privacyPolicy:contact.text"
            components={{
              0: (
                <DefaultText
                  customMargin="32px 0"
                  fam="geoReg"
                  customColor="#616161"
                />
              ),
              1: (
                <Button
                  href="https://verus.io/discord"
                  svg={{ type: 'miniTab', rotate: false, size: 16 }}
                  transparent
                  fontRegular
                  as="a"
                  color="#0A3FB1"
                  fontSize="menu"
                  target="_blank"
                  margin="0 !important"
                />
              ),
            }}
          />
        </Section>
      </MainLayout>
    </>
  )
}

export default PrivacyPolicy
