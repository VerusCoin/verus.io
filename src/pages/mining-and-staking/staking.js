import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Menu, FooterMenu } from '@src/components'
import { miningStakingLinks } from '@src/constants/miningStaking'

const Staking = () => {
  return (
    <>
      <NextSeo
        title="Staking"
        description="Stake your VRSC coins to earn coins."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VRSC, earn, mining, staking, pools, network economy, secure, mining pools',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div className="">
          <Menu pathList={miningStakingLinks} href="/mining-and-staking" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="text-2xl font-normal md:leading-tight md:text-4xl ">
            Stake Verus to Earn
          </h1>
          <h2 className="mt-8 text-2xl font-normal ">Staking explained</h2>
          <p className="my-4 leading-relaxed">
            By staking you help secure the network by using your coins. Coins,
            or stakes, are used to generate new blocks. Stakes are chosen at
            random and the winner will receive the block reward. This is
            possible since Verus has a unique consensus mechanism of 50% Proof
            of Stake, and 50% Proof of Work.{' '}
            <Link href="/technology/verus_proof_of_power">
              <span className="underline cursor-pointer text-bluebutton-default">
                Learn about Proof of Power.
              </span>
            </Link>
          </p>
          <div className="flex items-center justify-center max-w-lg p-8 my-16 bg-gray-200 rounded-lg">
            <div className="flex flex-col md:flex-row ">
              <div className="self-center flex-shrink-0 mb-8 md:self-start md:mr-8">
                <img src="/images/icons/stake-rules-icon.svg" width="50" />
              </div>
              <div>
                <h4 className="text-2xl">Verus Staking Rules</h4>
                <ul className="mt-4 ml-5 leading-loose list-disc font-p">
                  <li>Run native blockchain</li>
                  <li>Keep Verus Desktop (or CLI) open</li>
                  <li>Have staking enabled</li>
                  <li>Coins eligible to stake after 150 confirmations</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="m-0 text-2xl font-normal">Start staking</h3>
          <p className="my-4">
            It's easy, all you have to do is{' '}
            <Link href="/wallet/desktop-wallet">
              <span className="underline cursor-pointer text-bluebutton-default">
                download Verus Desktop here.
              </span>
            </Link>
          </p>
        </div>
      </div>
      <FooterMenu
        hrefLocation="/mining-and-staking"
        pathList={miningStakingLinks}
      />
    </>
  )
}

export default Staking
