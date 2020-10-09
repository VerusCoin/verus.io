import Menu from '../../components/Menu';
import { miningStakingLinks } from '../../constants/miningStaking';
import FooterMenu from '../../components/FooterMenu';

const Staking = () => {
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div className="">
          <Menu pathList={miningStakingLinks} href="/mining-and-staking" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h2 className="text-4xl font-normal ">
            Stake your coins to earn coins.
          </h2>
          <h3 className="text-2xl font-normal ">What is staking?</h3>
          <p className="leading-normal font-p">
            By staking you help secure the network by using your coins. Coins,
            or stakes, are used to generate new blocks. Stakes are chosen at
            random and the winner will receive the block reward. This is
            possible since Verus has a unique consensus mechanism of 50% Proof
            of Stake, and 50% Proof of Work.{' '}
            <a href="#">
              {' '}
              Read more about our consensus mechanism here. (Need a link)
            </a>
          </p>
          <div className="max-w-lg p-8 my-16 bg-gray-200 rounded-lg">
            <div className="flex flex-col md:flex-row ">
              <div className="self-center flex-shrink-0 md:self-start md:mr-4">
                <img src="/images/icons/stake-rules-icon.svg" width="50" />
              </div>
              <div>
                <p className="text-xl">Verus Staking Rules</p>
                <ul className="leading-loose list-disc font-p">
                  <li>Run native blockchain</li>
                  <li>Keep Verus Desktop (or CLI) open</li>
                  <li>Coins eligible to stake after 150 confirmations</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="m-0 text-2xl font-normal">How do I start staking?</h3>
          <p className="leading-normal font-p">
            It's easy, all you have to do is{' '}
            <a href="#">download Verus Desktop here. (need link)</a>
          </p>
        </div>
      </div>
      <FooterMenu
        hrefLocation="/mining-and-staking"
        pathList={miningStakingLinks}
      />
    </>
  );
};

export default Staking;
