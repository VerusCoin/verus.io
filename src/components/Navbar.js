import { useState } from 'react'
import Link from 'next/link'
import { LogoJsonLd } from 'next-seo'
const VerusLogo = '/images/logos/Verus_Logo.svg'
const ResourceMenuList = [
  { name: 'VerusID Lookup', url: '/verusid-lookup', external: false },
  { name: 'VerusID Signatures', url: '/verify-signatures', external: false },
  { name: 'Block Explorer', url: 'https://explorer.verus.io/', external: true },
  { name: 'Support Wiki', url: 'https://wiki.verus.io/', external: true },
  { name: 'Get Verus', url: '/get-vrsc', external: false },
  { name: 'FAQ', url: '/faq', external: false },
  { name: 'Papers', url: '/papers', external: false },
  { name: 'Donate', url: '/donate', external: false },
]

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="z-50 w-full bg-white">
      <div className="flex flex-col px-4 py-4 md:mx-8 lg:mx-16 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between flex-shrink-0 p-4 ">
          <Link href="/">
            <img
              src={VerusLogo}
              alt="Verus Logo"
              title="Veruscoin"
              className="w-32 cursor-pointer fill-current"
            />
          </Link>
          <LogoJsonLd
            logo={`${process.env.NEXT_PUBLIC_SITEURL}${VerusLogo}`}
            url={process.env.NEXT_PUBLIC_SITEURL}
          />
          <button
            className="md:hidden focus:outline-none focus:ring-lg"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav
          className={
            'flex-col bg-white font-nav md:bg-transparent z-20 flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row' +
            (navbarOpen ? ' block' : ' hidden')
          }
        >
          <ul className="z-20 items-center pb-4 mt-2 text-center md:flex md:h-16 md:pb-0">
            <li
              className="flex items-center"
              onClick={() => setNavbarOpen(false)}
            >
              <Link href="/technology">
                <a className="px-4 py-2 text-sm no-underline md:text-base text-navlink-default hover:text-navlink-hover">
                  Technology
                </a>
              </Link>
            </li>
            <li
              className="flex items-center"
              onClick={() => setNavbarOpen(false)}
            >
              <Link href="/mining-and-staking">
                <a className="px-4 py-2 text-sm no-underline md:text-base text-navlink-default hover:text-navlink-hover">
                  Mining & Staking
                </a>
              </Link>
            </li>
            <li
              className="flex items-center"
              onClick={() => setNavbarOpen(false)}
            >
              <Link href="/community">
                <a className="px-4 py-2 text-sm no-underline md:text-base text-navlink-default hover:text-navlink-hover">
                  Community
                </a>
              </Link>
            </li>

            <li className="flex items-center">
              <div className="relative hidden md:inline-block dropdown ">
                <button className="inline-flex items-center px-4 py-2 bg-transparent border-0 outline-none cursor-pointer md:text-base text-navlink-default focus:outline-none">
                  <span className="mr-1">Resources</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="absolute hidden pt-0 -ml-8 text-left dropdown-menu">
                  <ul
                    className={
                      ' pt-1 pb-1 pl-4 pr-4 mt-3 bg-white rounded-lg shadow-menu  md:z-50 '
                    }
                  >
                    {ResourceMenuList.map((menu, index) => {
                      return (
                        <li
                          className="block px-4 py-2 whitespace-nowrap"
                          key={index}
                        >
                          {menu.external ? (
                            <a
                              href={menu.url}
                              target="_blank"
                              className="block py-2 no-underline cursor-pointer whitespace-nowrap external text-navlink-default hover:text-navlink-hover"
                            >
                              {menu.name}
                            </a>
                          ) : (
                            <Link href={menu.url}>
                              <a className="block py-2 no-underline cursor-pointer whitespace-nowrap text-navlink-default hover:text-navlink-hover">
                                {menu.name}
                              </a>
                            </Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="relative px-4 py-2 text-sm md:hidden text-navlink-default">
                Resources
                <hr />
                <ul>
                  {ResourceMenuList.map((menu, index) => {
                    return (
                      <li
                        className="flex items-center"
                        onClick={() => setNavbarOpen(false)}
                        key={index}
                      >
                        {menu.external ? (
                          <a
                            href={menu.url}
                            target="_blank"
                            className="py-2 text-sm no-underline cursor-pointer external text-navlink-default hover:text-navlink-hover"
                          >
                            {menu.name}
                          </a>
                        ) : (
                          <Link href={menu.url}>
                            <a className="py-2 text-sm no-underline cursor-pointer text-navlink-default hover:text-navlink-hover">
                              {menu.name}
                            </a>
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
            <li className="flex items-center ">
              <Link href="/wallet" className="p-0 m-0">
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex-shrink-0 px-8 py-2 mx-2 text-base text-white border-0 rounded-full bg-bluebutton-default hover:bg-bluebutton-hover focus:outline-none font-display"
                >
                  Get Wallet
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

{
  /* <div @click.away="open = false" class="relative" x-data="{ open: false }">
        <button @click="open = !open" class="flex flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring">
          <span>Dropdown</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full origin-top-right rounded-md shadow-lg md:w-48">
          <div class="px-2 py-2 bg-white rounded-md shadow-outline dark-mode:bg-gray-800">
            <a class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring" href="#">Link #1</a>
            <a class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring" href="#">Link #2</a>
            <a class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring" href="#">Link #3</a>
          </div>
        </div>
      </div>     */
}
