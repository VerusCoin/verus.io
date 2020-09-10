import { useState } from 'react';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import fetch from 'unfetch';
import { format } from 'date-fns';

const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((d) => d.articles.splice(0, 3));

const Home = () => {
  const [viewTab, setViewTab] = useState(0);
  const [formSubmit, setFormSubmit] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { data, error } = useSWR(
    'https://medium-f.herokuapp.com/api/v1/articles?orgid=veruscoin',
    fetcher
  );

  const onSubmit = (formData) => {
    if (formData) {
      setFormSubmit(true);
    }
  };
  return (
    <>
      <div className="container max-w-5xl pt-8 pb-8">
        <div className="max-w-2xl text-left sm:mt-16 sm:mb-32 sm:m-12 sm:pt-8 section-2">
          <h1 className="w-full m-0 text-5xl font-normal text-bluebutton">
            Empowering Individuals Around the World
          </h1>
          <p className="w-full mt-3 text-2xl font-light leading-normal text-custom font-p">
            Verus supplies tools for individuals and organizations to build
            equitable frameworks for social and economic change.
          </p>
          <div className="flex flex-wrap items-center justify-center mt-16 md:space-x-8 md:space-y-0 md:justify-start">
            <Link href="/mining-and-staking">
              <button className="px-6 py-5 text-white border-0 rounded-full md:px-12 sm:mr-2 bg-bluebutton hover:bg-bluebutton-hover">
                Secure the Network and Earn
              </button>
            </Link>
            <Link href="/technology">
              <button className="px-12 py-5 bg-transparent border-2 border-black border-solid rounded-full hover:bg-gray-200">
                Technology Deep Dive
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-12 sm:pt-32 section-3 md:pb-32">
        <div className="container max-w-5xl">
          <div className="justify-center">
            <div className="flex flex-col justify-center sm:flex-row">
              <a
                onClick={() => setViewTab(0)}
                className={
                  'mr-5 text-center cursor-pointer text-lg p-1  ' +
                  (viewTab === 0
                    ? 'text-tablink-active border-2 border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
                    : 'text-tablink')
                }
              >
                VerusID
              </a>
              <a
                onClick={() => setViewTab(1)}
                className={
                  'mr-5 text-center cursor-pointer text-lg p-1 flex-no-wrap  ' +
                  (viewTab === 1
                    ? 'text-tablink-active border-2 border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
                    : 'text-tablink')
                }
              >
                Decentralized Finance
              </a>
              <a
                onClick={() => setViewTab(2)}
                className={
                  'mr-5 text-center cursor-pointer text-lg p-1  ' +
                  (viewTab === 2
                    ? 'text-tablink-active border-2 border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
                    : 'text-tablink')
                }
              >
                Public Blockchains as a Service
              </a>
              <a
                onClick={() => setViewTab(3)}
                className={
                  'mr-5 text-center cursor-pointer text-lg p-1  ' +
                  (viewTab === 3
                    ? 'text-tablink-active border-2 border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
                    : 'text-tablink')
                }
              >
                ERC-20 Bridge
              </a>
            </div>
            <div className="pt-6 tab-content sm:pt-24 ">
              <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
                <div className="pt-2 mb-4 text-center md:text-right">
                  <img
                    src="images/VerusID_Icon.svg"
                    width="181"
                    alt="VerusID Icon"
                  />
                </div>
                <div className="p-3 pt-0 text-left md:pl-20 md:col-span-2">
                  {viewTab === 0 && (
                    <div className="max-w-xl">
                      <h3 className="mt-0 text-2xl font-normal">
                        Self-Sovereign & Decentralized Identities
                      </h3>
                      <p className="text-xl font-light leading-relaxed font-p">
                        Introducing VerusID; an identity protocol with advanced
                        capabilities, including friendly, human-readable names
                        to receive, send and secure all cryptocurrencies.
                      </p>
                      <Link href="technology/verusid">
                        <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  )}
                  {viewTab === 1 && (
                    <div className="max-w-xl">
                      <h3 className="mt-0 text-2xl font-normal">
                        Redefining DeFi With Reserve Currencies
                      </h3>
                      <p className="text-xl font-light leading-relaxed font-p">
                        Simultaneous parallel processing of DeFi transactions
                        allows Verus to advance the technology underpinning
                        automated market makers and community liquidity.
                      </p>
                      <Link href="technology/reserve_currencies">
                        <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  )}
                  {viewTab === 2 && (
                    <div className="max-w-xl">
                      <h3 className="mt-0 text-2xl font-normal ">
                        A Blockchain Launch Is Just a Few Clicks Away
                      </h3>
                      <p className="text-xl font-light leading-relaxed font-p">
                        Launch your own blockchain with customizable
                        specifications, while using Verus infrastructure for
                        security and continuity. PBaaS provides a roadmap for
                        practically unlimited scalability.
                      </p>
                      <Link href="technology/public_blockchains_as_a_service">
                        <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  )}
                  {viewTab === 3 && (
                    <div className="max-w-xl">
                      <h3 className="mt-0 text-2xl font-normal ">
                        Combine the Power of Solidity with Verus
                      </h3>
                      <p className="text-xl font-light leading-relaxed font-p">
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque.
                      </p>
                      <Link href="technology/ERC-20_Bridge">
                        <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl">
        <div className="justify-center pt-12 text-center sm:pt-32 section-4">
          <div className="grid grid-cols-1 mb-32 space-y-6 text-center md:space-y-0 md:g-8 md:grid-cols-3">
            <div className="justify-center p-6 text-center">
              <img
                src="images/VerusID_Lookup_Icon.svg"
                height="70"
                alt="VerusID Lookup Icon"
              />
              <h1 className="mt-8 text-2xl font-normal">VerusID Lookup</h1>
              <p className="font-light leading-normal font-p">
                Search for identities registered on the Verus blockchain
              </p>
              <Link href="/verusid-lookup">
                <button className="px-12 py-5 mt-3 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
                  Search for identities
                </button>
              </Link>
            </div>
            <div className="justify-center p-6 text-center">
              <img
                src="images/Blockchain_Explorer_Icon.svg"
                height="70"
                alt="Blockchain Explorer Icon"
              />
              <h1 className="mt-8 text-2xl font-normal">Block Explorer</h1>
              <p className="font-light leading-normal font-p">
                Search through addresses and transactions
              </p>
              <a
                href="https://explorer.veruscoin.io/"
                target="_blank"
                className="no-underline"
              >
                <button className="px-12 py-5 mt-3 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
                  See explorer
                </button>
              </a>
            </div>
            <div className="justify-center p-6 text-center">
              <img src="images/dummy.png" height="70" alt="" />
              <h1 className="mt-8 text-2xl font-normal">Verus Signatures</h1>
              <p className="font-light leading-normal font-p">
                Sign and verify documents and files for free
              </p>
              <Link href="/">
                <button className="px-12 py-5 mt-3 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
                  Verify documents
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 pl-6 pr-6 m-4 text-white rounded-lg md:m-0 md:grid-cols-12 md:mt-24 md:mb-32 bg-theme-green">
            <h1 className="text-3xl font-normal md:text-left md:col-span-8">
              Want to start building on Verus?
            </h1>
            <button className="px-12 py-4 m-3 text-lg font-normal text-black bg-white border-transparent rounded-full sm:flex-shrink-0 hover:bg-gray-200 md:col-span-4">
              See Developer Documentation
            </button>
          </div> */}
        </div>
      </div>
      <hr />
      <div className="container max-w-5xl">
        <div className="grid justify-center grid-cols-1 pt-12 m-4 mb-16 space-y-12 md:space-y-0 md:m-0 md:mb-16 md:justify-between md:gap-12 md:grid-cols-2 sm:pt-32 section-5">
          <div className="p-3 pb-12 bg-gray-100 rounded-lg md:p-16">
            <h4 className="p-0 mb-16 text-2xl font-light leading-relaxed text-left text-custom font-p">
              Verus is a decentralized network where anyone in the world can
              participate to earn its currency VRSC.
            </h4>
            <Link href="/mining-and-staking">
              <button className="flex-shrink-0 w-full px-12 py-4 text-base text-white border-0 rounded-full md:w-auto md:py-4 bg-bluebutton hover:bg-bluebutton-hover">
                Start Earning Now
              </button>
            </Link>
          </div>
          <div className="pl-3 pr-3 md:pl-12 md:pr-12">
            <h3 className="mb-1 text-2xl font-normal">Worldwide Network</h3>
            <p className="mt-2 mr-0 font-light leading-normal font-p">
              Anyone with a modern CPU can start mining VRSC immediately,
              creating a naturally decentralized miner ecosystem.
            </p>
            <h3 className="mt-16 mb-1 text-2xl font-normal">
              Thriving Economy
            </h3>
            <p className="mt-2 mr-0 font-light leading-normal font-p">
              Verus has a robust and thriving protocol economy with
              opportunities for everyone to earn through mining and staking.
            </p>
            <h3 className="mt-16 mb-1 text-2xl font-normal">
              Permissionless System
            </h3>
            <p className="mt-2 mr-0 font-light leading-normal font-p">
              Verus is open-source, borderless and permissionless. It
              doesn&#x27;t matter who you are or where you live. Anyone can
              participate.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container max-w-5xl p-0 pt-12 pb-12 text-center md:pt-32 md:pb-32">
        <h3 className="text-2xl font-normal">Latest Articles</h3>
        <div className="grid items-center justify-center grid-cols-1 p-3 space-y-4 text-left text-current md:space-y-0 md:p-0 md:grid-cols-3 md:gap-6">
          {error && <div className="col-span-3 text-center">Failed Load</div>}
          {!data && <div className="col-span-3 text-center">Loading...</div>}
          {data &&
            data.map((article) => {
              return (
                <div key={article.title}>
                  <img
                    className="w-full h-auto"
                    src={article.thumbnailref}
                    alt="Article Header Image"
                  />

                  <h3 className="text-xl font-normal text-left">
                    {article.title}
                  </h3>
                  <p className="text-base text-gray-700 font-lite font-p">
                    {format(new Date(article.PublishDateTime), 'MMM dd, yyyy')}
                  </p>
                </div>
              );
            })}

          <a
            href="https://medium.com/veruscoin"
            target="_blank"
            className="justify-center text-center no-underline md:col-span-3"
          >
            <button className="px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
              Read all articles
            </button>
          </a>
        </div>
      </div>

      <div className="justify-center w-screen p-6 pb-20 text-center section-3">
        <div className="container max-w-5xl">
          <h4 className="mb-3 text-xl font-light font-p">
            Subscribe to our newsletter and stay up to date with developments
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col max-w-lg mx-auto mt-8 space-y-8 text-sm text-center md:mt-0 md:space-y-0 md:items-baseline md:flex-row"
          >
            <div className="flex-grow">
              <input
                name="email"
                className="w-full px-12 py-4 text-sm rounded-full text-field text-bluebutton focus:outline-none "
                type="email"
                placeholder="your@email.com"
                ref={register({ required: true })}
              />

              {errors.email && <span>Please enter a email</span>}
            </div>
            <div className="md:-ml-40">
              <input
                type="submit"
                value="Stay up to date"
                className="w-full px-12 py-4 text-sm text-white border border-solid rounded-full md:w-auto bg-bluebutton hover:bg-bluebutton-hover focus:outline-none "
              />
              <span></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
