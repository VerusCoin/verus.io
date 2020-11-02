import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';
import { NextSeo } from 'next-seo';

const Bridges = () => {
  return (
    <>
      <NextSeo
        title="Decentralized bridges"
        description="Verus develops bridges to other cryptocurrencies. Bridges connect
        external blockchains and their currencies to the Verus blockchain."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, VerusID, ERC-20, decentralized finance, verus signatures, bridges, decentralized bridges',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div>
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal">
            Decentralized bridges to connect other cryptocurrencies.
          </h1>
          <p className="my-8">
            Verus develops bridges to other cryptocurrencies. Bridges connect
            external blockchains and their currencies to the Verus blockchain.
            This means that users can freely transfer coins from one blockchain
            to the Verus blockchain and vice versa. The coins from the external
            blockchain are represented as tokens on the Verus blockchain.
          </p>
          <p className="my-8">
            Through bridges, value from other blockchains flow into the Verus
            ecosystem. This value (tokenized BTC, ETH and all ERC-20 tokens) can
            then utilize all the features Verus has to offer. For example
            storing your cryptocurrency under the security of a VerusID, buying
            fractional and reserve currencies, converting currencies, financing
            projects and much more.
          </p>
          <p className="my-8">
            One of the implications for ERC-20 tokens on the Ethereum
            blockchain, is that they don’t have to rely on exchange listings
            anymore. They can find instant liquidity through the Verus reserve
            currency system. They are also freed from the exorbitant transaction
            fees of the Ethereum network.
          </p>
          <p className="my-8">
            Bridges that are now being worked on are for Bitcoin (BTC) and
            Ethereum (ETH).
          </p>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default Bridges;
