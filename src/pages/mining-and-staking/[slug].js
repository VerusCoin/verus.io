import Link from 'next/link';
import Menu from '../../components/Menu';
import { useRouter } from 'next/router';
import { miningStakingLinks } from '../../constants/miningStaking';

const MiningAndStaking = () => {
  const path = useRouter();
  const pathIndex = miningStakingLinks.findIndex(
    (e) => e.slug === path.query.slug
  );
  const prevPath = miningStakingLinks[pathIndex - 1] || [];
  const nextPath = miningStakingLinks[pathIndex + 1] || [];
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 ">
        <div className="md:col-start-2 md:col-span-3 lg:col-span-2 lg:col-start-3">
          <Menu pathList={miningStakingLinks} href="/mining-and-staking" />
        </div>
        <div className="p-6 sm:col-span-2 md:col-span-2 lg:col-span-7">
          {path.asPath}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between p-2 md:hidden">
        {prevPath.slug ? (
          <Link
            href="/mining-and-staking/[slug]"
            as={`/mining-and-staking/${prevPath.slug}`}
          >
            <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover active:bg-blue-200 active:text-bluebutton">
              {' '}
              <svg
                width="8"
                height="10"
                className="rotate-180"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                  stroke="#999"
                  strokeLinecap="square"
                ></path>
              </svg>{' '}
              &nbsp;{prevPath.name}
            </a>
          </Link>
        ) : (
          <Link href="/mining-and-staking">
            <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover active:bg-blue-200 active:text-bluebutton">
              {' '}
              <svg
                width="8"
                height="10"
                className="rotate-180"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                  stroke="#999"
                  strokeLinecap="square"
                ></path>
              </svg>{' '}
              &nbsp;Mining and Staking Overview
            </a>
          </Link>
        )}
        {nextPath.slug ? (
          <Link
            href="/mining-and-staking/[slug]"
            as={`/mining-and-staking/${nextPath.slug}`}
          >
            <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover active:bg-blue-200 active:text-bluebutton">
              {nextPath.name}&nbsp;{' '}
              <svg
                width="8"
                height="10"
                viewBox="0 0 6 10"
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
        ) : null}
      </div>
    </>
  );
};

export default MiningAndStaking;
