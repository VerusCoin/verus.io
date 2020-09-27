import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';

const ProofOfPower = () => {
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4">
        <div className="">
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            Verus Proof of Power
          </h1>
          <p className="text-xl leading-normal font-p">
            VerusCoin has a unique consensus mechanism: it is 50% Proof of Work
            and 50% Proof of Stake. This means that half of newly generated
            blocks come from mining (PoW), and the other half comes from staking
            (PoS).
          </p>
          <div className="grid max-w-md grid-cols-1 my-8 mb-8 md:gap-6">
            <div className="flex flex-row items-center flex-shrink-0 space-x-3">
              <img src="/images/50-mining.svg" alt="mining image" width="100" />
              <p className="text-xl leading-normal font-p">
                50% of all blocks are generated through mining - Proof of Work
                (PoW)
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0 space-x-3">
              <img
                src="/images/50-staking.svg"
                alt="staking image"
                width="100"
              />
              <p className="text-xl leading-normal font-p">
                50% of all blocks are generated through staking - Proof of Stake
                (PoS)
              </p>
            </div>
          </div>
          <p className="text-xl leading-normal font-p">
            Verus’ staking algorithm{' '}
            <a className="no-underline external text-bluebutton">
              solves the two major theoretical issues undermining other PoS
              systems
            </a>
            , “nothing at stake” and “weak subjectivity” by leveraging its smart
            transaction capabilities to remove any incentive to attempt
            cheating, making it a losing proposition.
          </p>
          <p className="text-xl leading-normal font-p">
            This mechanism is called Proof of Power or VerusPoP and provides a
            further decentralizing effect on the network, incentivizing holders
            to keep nodes online to support the network. Even if a change in
            network hashrate happens, the PoW/PoS ratio stays the same: 50/50%.
          </p>
          <p className="text-xl leading-normal font-p">
            To successfully attack the VerusCoin blockchain, more than 50% of
            the validation power is needed, called Chain Power. On top of that,
            VerusCoin utilizes Komodo’s delayed Proof of Work. This means the
            chain is constantly being notarized into the Bitcoin blockchain on
            every bitcoin block, leveraging Bitcoin’s hashrate to help defend
            the Verus network.
          </p>
          <p className="text-xl leading-normal font-p">
            In over two years of mainnet, VerusCoin has never experienced a
            successful 51% hash attack.{' '}
            <a className="no-underline text-bluebutton">
              Learn more in the technical whitepaper of VerusPoP(need correct
              link)
            </a>
            .
          </p>
          <h2 className="mt-16 text-2xl font-normal">H2</h2>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default ProofOfPower;
