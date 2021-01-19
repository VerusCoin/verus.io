import { NextSeo } from 'next-seo'
import { Menu, FooterMenu } from '@src/components'
import { miningStakingLinks } from '@src/constants/miningStaking'
import { PoolLinks } from '@src/constants/pools'

const Pools = () => {
  return (
    <>
      <NextSeo
        title="Pools"
        description="Choose from a growing list of community pools."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VRSC, earn, mining, staking, pools, network economy, secure, mining pools',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4">
        <div className="">
          <Menu pathList={miningStakingLinks} href="/mining-and-staking" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl">Pools</h1>
          <p className="my-8 leading-relaxed">
            Choose from a growing list of community pools. Direct any questions
            to the appropriate pool operator in the #pools channel on{' '}
            <a
              href="https://discord.gg/VRKMP2S"
              target="_blank"
              className="underline external"
            >
              Discord
            </a>
            .
          </p>
          <h2 className="mt-16 text-2xl font-normal">Mining Pools</h2>
          <p className="my-8">
            Check how much hashrate is generated by every individual pool at{' '}
            <a
              href="https://miningpoolstats.stream/veruscoin"
              target="_blank"
              className="underline external"
            >
              MiningPoolStats
            </a>
            .
          </p>
          <table className="w-3/4 mb-12 border-collapse table-fixed font-p md:w-1/2">
            <thead>
              <tr>
                <th className="w-3/4 p-4"></th>
                <th className="w-1/4 p-4 text-center">Fee</th>
              </tr>
            </thead>
            <tbody>
              {PoolLinks.map((pool) => {
                return (
                  <tr
                    key={pool.id}
                    className={pool.id % 2 == 0 ? 'bg-gray-100' : ''}
                  >
                    <td className="w-3/4 p-4">
                      <a href={pool.URI} target="_blank">
                        {pool.URIText}
                      </a>
                    </td>
                    <td className="w-1/4 p-4 text-center">
                      {pool.percentageRate}%
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <FooterMenu
        hrefLocation="/mining-and-staking"
        pathList={miningStakingLinks}
      />
    </>
  )
}

export default Pools
