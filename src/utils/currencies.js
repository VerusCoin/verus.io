import Menu from '../components/Menu';
import { technologyLinks } from '../constants/technology';
import FooterMenu from '../components/FooterMenu';
import { NextSeo } from 'next-seo';

const Currencies = () => {
  return (
    <>
      <NextSeo
        title="Currencies & DeFi"
        description=""
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, VerusID, ERC-20, decentralized finance, verus signatures, DeFi, Decentralized Finance',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div>
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl">
            DeFi
          </h1>
          <p className="my-8">Verus DeFi is a specific way of using the Verus Currency functionalities that provides the ability for users to define and make use of Automated Market Makers (AMMs) that both connect to the wider DeFi universe and offer new methods and improvements for interacting with AMMs.</p>
          <p className="my-8">Users can create AMM Currencies at will, without programming, by defining new Currencies on Verus blockchains that are backed by on-chain reserves consisting of other useful Currencies, including, for example, Gateway tokens that represent assets on other blockchains (such as Etherium) via a bridge. Once created, users can interact with these AMM Currencies by:</p>
          <p className="my-8"><ul>
            <li>Using the AMM Currency as a conversion mechanism (for example from VRSC to ETH), since they can automatically convert from one Currency to another as long as both Currencies are used as reserves in any already-defined AMM Currency, and</li>
            <li>Converting their own holdings into an AMM Currency and holding this Currency for investment purposes, which (a) acts as a constatntly rebalancing Constant Mix Strategy asset, and (b) benefits from fees paid by other users who use the currency as a conversion mechanism as described above.</li>
          </ul></p>
          <p className="my-8">Verus DeFi is characterized by ease of use and low barriers to entry as AMM Currencies can be created by anyone without programming, and conversion transactions are done as easily as sending a currency to oneself (by point-and-click in the GUI, or a simple command in the CLI).</p>
          <p className="my-8">The Verus project believes that the Verus DeFi system offers real advancements in security and efficiency over existing solutions. The system provides an opportunity to leverage community liquidity in the most efficient ways, providing for the most secure, lowest cost, most stable, and fairest system to convert from one Currency to another in a decentralized, permissionless manner. And, because of the decentralized bridging technology, Verus offers a simple way for users in other systems to experiment with these low-cost, scalable, easy-to-use solutions.</p>
          <p className="my-8">As a UTXO-based smart transaction protocol that implements DeFi at the protocol level, Verus DeFi offers:</p>
          <p className="my-8"><ul>
            <li>Increased security at the "app level" - Verus DeFi is not implemented by having many smart contract authors creating smart contracts on top of the protocol, so there can be no exploits by searching for unintended "cracks" in the seams between contracts,</li>
            <li>Increased security at the protocol level - Verus DeFi is implemented in the protocol as part of the consensus, following the fundamental systems design principle which says that the most important security layers should be located in the system/protocol itself, and</li>
            <li>the Verus protocol solves all transactions simultaneously within a block (as opposed to serailly, in order, as is done on Ethereum and all other systems which use the virtual machine model). This has important implications for security, fairness, and efficiency, including
              <ul>
                <li>elimintation of front-running,</li>
                <li>enhancing system-wide liquidity, thus reducing slippage, as conversions going to and from any given currency within the same block are offset against eachother, and</li>
                <li>providing all users converting to and from a currency within the same block the same fair price with no spread.</li>
              </ul>
          </ul></p>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default Currencies;
