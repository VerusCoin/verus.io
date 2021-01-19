import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { IndexPage, SlugMenu } from '@src/components'
import { miningStakingLinks } from '@src/constants/miningStaking'

const MiningOverview = () => {
  const nextRoute = miningStakingLinks[0]

  return (
    <>
      <NextSeo
        title="Mining & Staking"
        description="Earn VRSC by participating in the network economy. Use
        your computer power to help secure the network, or simply put your
        $VRSC holdings to work by staking."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VRSC, earn, mining, staking, pools, network economy, secure, mining pools',
          },
        ]}
      />
      <IndexPage
        menuList={miningStakingLinks}
        menuRef="/mining-and-staking"
        nextRoutePath={`/mining-and-staking/${nextRoute.path}`}
        nextRouteName={nextRoute.name}
      >
        <div className="p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl">
            Mining and Staking
          </h1>
          <p className="my-6 leading-relaxed">
            Anyone can earn Verus by participating in the network economy. Use
            your computer power to help secure the network, or simply put your
            Verus holdings to work by staking.
          </p>
          <h3 className="m-0 mt-12 text-2xl font-normal ">Network Economy</h3>
          <p className="mt-2 mb-20 leading-relaxed">
            By securing the network one can earn more than just block rewards.
            There are a number of fees collected in each found block, such as
            when a VerusID is created and conversions fees to and from reserve
            currencies.
          </p>
          <SlugMenu pathList={miningStakingLinks} href="/mining-and-staking" />
        </div>
      </IndexPage>
    </>
  )
}

export default MiningOverview
