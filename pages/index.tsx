import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { HomepageProps } from 'types/homepage'
import {
  JumbotronJSON,
  UspBannerJSON,
  ServicesJSON,
  UniqueSellingPointsJSON,
  BlogJSON,
} from '@/data/homepage'
import { MainLayout, Section } from '@/components/layouts'
import { Button, DefaultHeader, TypedJS } from '@/components/elements'

import {
  Blog,
  UspBanner,
  UniqueSellingPoints,
  Services,
} from '@/components/sections/Home'

const Home = ({
  data,
}: HomepageProps): InferGetStaticPropsType<typeof getStaticProps> => {
  return (
    <MainLayout jumbotronData={data.JumbotronJSON}>
      <Section border width={550}>
        <DefaultHeader as="h3" align="left">
          <DefaultHeader>
            Verus is decentralized & rent-free public infrastructure for{' '}
            <TypedJS
              strings={[
                'self-sovereign identities',
                'data exchange',
                'blockchain creation',
                'cross-chain interoperability',
                'payments',
                'finance solutions',
                'privacy',
              ]}
            />
            .
          </DefaultHeader>
        </DefaultHeader>
      </Section>

      <UspBanner {...data.UspBannerJSON} />

      <Section width={710}>
        <DefaultHeader as="h2" align="center">
          A secure and scalable system with the most important functions at the
          protocol level.
          <div>
            <Button
              transparent
              svg={{ type: 'arrow', rotate: false }}
              href="#"
              as="a"
            >
              Create with Us
            </Button>
          </div>
        </DefaultHeader>
      </Section>

      <Services {...data.ServicesJSON} />

      <UniqueSellingPoints {...data.UniqueSellingPointsJSON} />

      <Blog {...data.BlogJSON} />
    </MainLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: {
        JumbotronJSON,
        UspBannerJSON,
        ServicesJSON,
        UniqueSellingPointsJSON,
        BlogJSON,
      },
    },
  }
}
