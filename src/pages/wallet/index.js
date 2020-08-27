import Link from 'next/link';
import Menu from '../../components/Menu';
import SlugMenu from '../../components/SlugMenu';
import { walletLinks } from '../../constants/wallet';

const WalletOverview = () => {
  const nextRoute = walletLinks[0];

  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <Menu pathList={walletLinks} href="/wallet" />
        </div>
        <div className="p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            Start staking VRSC Now!
          </h1>
          <p className="font-light font-p">
            Anyone with a capable computer can stake Verus Coin (VRSC)!
          </p>
          <ul className="font-light font-p">
            <li>No specialized hardware is required</li>
            <li>Stake with minimal CPU power</li>
            <li>Stake directly from the Verus Wallet</li>
          </ul>
          <p className="font-light font-p">
            However you use VRSC, you'll need a Verus Coin address, which you
            can create using the wallet in either Lite or Native mode. For
            staking you will need to run the wallet in Native mode. If you need
            any help, check our{' '}
            <a
              className="font-normal no-underline text-bluebutton-hover"
              href="https://wiki.veruscoin.io/#!index.md"
              target="_blank"
            >
              FAQ and How-To section
            </a>
            , or join our{' '}
            <a
              className="font-normal no-underline text-bluebutton-hover"
              href="https://veruscoin.io/discord"
              target="_blank"
            >
              official Discord
            </a>{' '}
            and reach out to the community support channel. Happy staking!
          </p>
          <h2 className="mt-12 text-2xl font-normal">Wallets</h2>
          <SlugMenu pathList={walletLinks} href="/wallet" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-end p-2 md:hidden">
        <Link href="/wallet/[slug]" as={`/wallet/${nextRoute.slug}`}>
          <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover ">
            {nextRoute.slug}&nbsp;{' '}
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

export default WalletOverview;
