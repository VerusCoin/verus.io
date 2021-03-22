import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';
import { NextSeo } from 'next-seo';

const Pbaas = () => {
  return (
    <>
      <NextSeo
        title="PBaaS"
        description=""
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, decentralized finance, DeFi, cross chain, cross-chain, verus signatures',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div>
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl">
            Public Blockchains as a Service (PBaaS)
          </h1>

          <p className="my-8">
            Verus sees a future where anyone can create their own blockchains
            easily. Currently in development, Verus PBaaS chains allow anyone to
            start up a blockchain that has built-in connectivity and liquidity
            with the Verus ecosystem, all without any programming. Every
            blockchain in the ecosystem is independent and customizable.
          </p>
          <p className="my-8">
            To create a chain one needs to have the VerusID that will be used to
            name the chain. Chains can be nested to any level, so that a chain,
            say “MyChain”, that is launched using a VerusID on the main Verus
            blockchain, can be used to spawn an unlimited number of new chains,
            each of these using identities registered on MyChain, which can be
            priced by the creator of MyChain.
          </p>
          <p className="my-8">
            New chains inherit the 50/50% PoW/PoS consensus mechanism (this may
            be customizable in the future) and has all of the advanced
            capabilities of Verus such as fractional currencies and Verus Vault
            protection for IDs.
          </p>
          <p className="my-8">
            A newly created chain can be mined by the miners of Verus. A miner
            in the Verus ecosystem can mine up to 22 different PBaaS-chains
            without losing any of the original hash power. This is called
            Merge-Mining and means that new chains have an easier time
            attracting miners, and chain creators can subsidize the mining of
            their own chain by merge-mining Verus and other PBaaS chains.
          </p>
          <p className="my-8">
            PBaaS chains will form the basis for a practically unlimited
            scalability of the Verus system. Popular currencies and tokens can
            exist and be interchangeable on many Verus blockchains, so that they
            won’t be restricted or limited by the capacities of a single
            blockchain. Cross-chain transactions allow the network as a whole to
            scale, by allowing activity to move between chains seamlessly to
            avoid congestion.
          </p>
          <p className="my-8">
            Chains can have customizable characteristics like crowdfunding
            launches with minimums to activate or, if not met, automatically
            refund. Other options include dynamic coin launch pricing based on
            participation, pre-launch participation price discounts,
            pre-conversion reserve currency carve outs, and price-neutral launch
            pre-allocations. Additionally the creator can specify coin supply,
            coin emission with up to three eras and define the price for
            identities. All specified in easy to understand commands and
            parameters, no programming necessary.
          </p>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default Pbaas;
