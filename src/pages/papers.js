import { NextSeo } from 'next-seo'
import { DocSlugMenu } from '@src/components'

const PapersList = [
  {
    id: 1,
    name: 'Verus Vision Paper',
    description: 'Privay, Community, Power',
    pages: 26,
    url: '/docs/VerusVision.pdf',
  },
  {
    id: 2,
    name: 'Verus Phase I',
    description: 'zk-SNARK Privacy and a Holistic Approach to ASICs',
    pages: 7,
    url: '/docs/VerusPhaseI.pdf',
  },
  {
    id: 3,
    name: 'Verus Proof of Power',
    description: 'A Provable Hybrid Solution to 51% Hash Attacks',
    pages: 15,
    url: '/docs/VerusPoP.pdf',
  },
]
const Papers = () => {
  return (
    <>
      <NextSeo
        title="Documents"
        description="Verus Documents and Papers."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VRSC, earn, mining, staking, pools, network economy, secure, mining pools',
          },
        ]}
      />
      <div className="container max-w-4xl mt-8 ">
        <div className="p-6 ">
          <h1 className="p-0 m-0 mb-4 text-2xl font-normal md:text-4xl">
            Verus Documents & Papers
          </h1>
          <DocSlugMenu pathList={PapersList} href="/mining-and-staking" />
        </div>
      </div>
    </>
  )
}

export default Papers
