import Link from 'next/link';
import { pathIndex } from '../lib/pathIndex';

const FooterMenu = ({ pathList, hrefLocation }) => {
  const { prevPath, nextPath } = pathIndex(pathList);
  const hrefPath = hrefLocation + '/[slug]';

  return (
    <div className="flex flex-row items-center justify-between p-2 md:hidden">
      {prevPath.slug || prevPath.path ? (
        <Link
          href={hrefPath}
          as={`${hrefLocation}/${prevPath.slug || prevPath.path}`}
        >
          <a className="flex flex-row items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover active:bg-blue-200 active:text-bluebutton">
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
        <Link href="/wallet">
          <a className="flex flex-row items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover active:bg-blue-200 active:text-bluebutton">
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
            &nbsp;wallet Overview
          </a>
        </Link>
      )}
      {nextPath.slug || nextPath.path ? (
        <Link
          href={hrefPath}
          as={`${hrefLocation}/${nextPath.slug || nextPath.path}`}
        >
          <a className="flex flex-row items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover active:bg-blue-200 active:text-bluebutton">
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
  );
};

export default FooterMenu;
