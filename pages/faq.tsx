import React from 'react'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MainLayout, Section } from '@/components/layouts'
import { FaqpageProps } from '@/types/coinpage'
import { FaqJSON } from '@/data/faqpage'
import { FAQ } from '@/components/sections/Coin'

const FAQpage = ({
  data,
}: FaqpageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  const { t } = useTranslation('seo')
  const title = t('page.faq.title')
  const description = t('page.faq.description')
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Section
          width={1140}
          styles="margin-bottom: 75px !important; margin-top:75px;"
        >
          <FAQ {...data.FaqJSON} />
        </Section>
      </MainLayout>
    </>
  )
}

export default FAQpage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        FaqJSON,
      },
    },
  }
}
