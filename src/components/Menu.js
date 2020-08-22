import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Menu = ({ pathList, href }) => {
  const [showMenu, setShowMenu] = useState(false);
  const currentPath = useRouter();
  return (
    <>
      <button
        className="items-center w-full pl-4 text-left bg-white border-none text-baseLink md:hidden focus:outline-none focus:shadow-outline-lg"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        {' '}
        <svg
          width="8"
          height="14"
          className={showMenu ? 'rotate-90' : null}
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
        &nbsp;Menu
      </button>
      <nav
        className={
          'grid grid-cols-1 pb-4 md:pb-0 md:block' +
          (showMenu ? ' block' : ' hidden')
        }
      >
        <ul className="items-center md:mt-6">
          <li
            className={
              'block p-2 rounded-lg menu-link ' +
              (currentPath.pathname === href ? 'active' : '')
            }
          >
            <Link href={href}>
              <a className="block px-2 py-2 text-sm no-underline md:text-base">
                Overview
              </a>
            </Link>
          </li>
          {pathList.map((path) => {
            let activeLink = false;
            if (currentPath.asPath.match(path.slug || path.path)) {
              if (path.slug === 'staking') {
                if (currentPath.query.slug === 'staking') {
                  activeLink = true;
                } else {
                  activeLink = false;
                }
              } else {
                activeLink = true;
              }
            }
            if (path.href) {
              activeLink = false;
            }

            return (
              <li
                className={
                  'block p-2 rounded-lg menu-link ' +
                  (activeLink ? 'active' : '')
                }
                key={path.id}
              >
                {path.path && (
                  <Link href={`${href}/${path.path}`}>
                    <a className="block px-2 py-2 text-sm no-underline md:text-base">
                      {path.name}
                    </a>
                  </Link>
                )}
                {path.slug && (
                  <Link href={`${href}/[slug]`} as={`${href}/${path.slug}`}>
                    <a className="block px-2 py-2 text-sm no-underline md:text-base">
                      {path.name}
                    </a>
                  </Link>
                )}
                {path.href && (
                  <a
                    href={path.href}
                    target="_blank"
                    className="block px-2 py-2 text-sm no-underline md:text-base"
                  >
                    {path.name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
