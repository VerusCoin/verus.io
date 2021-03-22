import Link from 'next/link';
import Menu from '../../components/Menu';
import SlugMenu from '../../components/SlugMenu';
import { miningStakingLinks } from '../../constants/miningStaking';
import { NextSeo } from 'next-seo';

const MiningOverview = () => {
  const nextRoute = miningStakingLinks[0];

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
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4">
        <div className="">
          <Menu pathList={miningStakingLinks} href="/mining-and-staking" />
        </div>
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
      </div>
      <div className="flex flex-row items-center justify-end p-2 md:hidden">
        <Link href={`/mining-and-staking/${nextRoute.path}`}>
          <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover ">
            {nextRoute.name}&nbsp;{' '}
            <svg
              width="8"
              height="18"
              viewBox="0 0 6 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                stroke="#999"
                strokeLinecap="square"
              ></path>
            </svg>{' '}
          </a>
        </Link>
      </div>
    </>
  );
};

export default MiningOverview;
