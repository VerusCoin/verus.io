import { useState } from 'react';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Home = () => {
  const [viewTab, setViewTab] = useState(0);
  const [formSubmit, setFormSubmit] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (data) {
      setFormSubmit(true);
    }
  };
  return (
    <>
      <div className="max-w-2xl pt-6 m-12 mt-16 text-center md:ml-40 sm:pt-12 section-2 sm:text-left">
        <h1 className="w-full mb-0 text-5xl font-normal text-bluebutton">
          Empowering Individuals Around the World
        </h1>
        <p className="w-full mt-3 text-2xl font-light font-p">
          Verus supplies tools for individuals and organizations to build
          equitable frameworks for social and economic change.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start">
          <Link href="/mining-and-staking">
            <button className="px-6 py-4 m-2 ml-0 text-white border-0 rounded-full sm:m-8 sm:mr-2 bg-bluebutton hover:bg-bluebutton-hover">
              Secure the Network and Earn
            </button>
          </Link>
          <Link href="/technology">
            <button className="px-6 py-4 m-2 text-lg bg-transparent border rounded-full sm:m-8 hover:bg-gray-200">
              Technology Deep Dive
            </button>
          </Link>
        </div>
      </div>

      <div className="justify-center w-screen pt-6 pb-8 sm:pt-40 section-3 md:pb-24">
        <div className="container justify-center">
          <div className="flex flex-col justify-center sm:flex-row">
            <a
              onClick={() => setViewTab(0)}
              className={
                'mr-5 text-center cursor-pointer text-lg p-1  ' +
                (viewTab === 0
                  ? 'text-tablink-active border border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
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
                  ? 'text-tablink-active border border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
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
                  ? 'text-tablink-active border border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
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
                  ? 'text-tablink-active border border-solid border-t-0 border-r-0 border-l-0 border-tablink-active'
                  : 'text-tablink')
              }
            >
              ERC-20 Bridge
            </a>
          </div>
          <div className="justify-center pt-6 tab-content sm:pt-32 ">
            <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3 md:items-start">
              <div className="pt-2 mb-4 text-center md:text-right">
                <img src="images/VerusIDimg.png" width="181" alt="" />
              </div>
              <div className="pt-0 pl-20 text-left md:col-span-2">
                {viewTab === 0 && (
                  <>
                    <h3 className="mt-0 text-2xl font-normal lg:w-2/3">
                      Self-Sovereign & Decentralized Identities
                    </h3>
                    <p className="w-4/5 text-xl font-light lg:w-2/3 font-p">
                      Introducing VerusID; an identity protocol with advanced
                      capabilities, including friendly, human-readable names to
                      receive, send and secure all cryptocurrencies.
                    </p>
                    <button className="px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans-defualt hover:border-bluebutton text-bluebutton">
                      Learn More
                    </button>
                  </>
                )}
                {viewTab === 1 && (
                  <>
                    <h3 className="mt-0 text-2xl font-normal lg:w-2/3">
                      Redefining DeFi With Reserve Currencies
                    </h3>
                    <p className="w-4/5 text-xl font-light lg:w-2/3 font-p">
                      Simultaneous parallel processing of DeFi transactions
                      allows Verus to advance the technology underpinning
                      automated market makers and community liquidity.
                    </p>
                    <button className="px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans-defualt hover:border-bluebutton text-bluebutton">
                      Learn More
                    </button>
                  </>
                )}
                {viewTab === 2 && (
                  <>
                    <h3 className="mt-0 text-2xl font-normal lg:w-2/3">
                      A Blockchain Launch Is Just a Few Clicks Away
                    </h3>
                    <p className="w-4/5 text-xl font-light lg:w-2/3 font-p">
                      Launch your own blockchain with customizable
                      specifications, while using Verus infrastructure for
                      security and continuity. PBaaS provides a roadmap for
                      practically unlimited scalability.
                    </p>
                    <button className="px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans-defualt hover:border-bluebutton text-bluebutton">
                      Learn More
                    </button>
                  </>
                )}
                {viewTab === 3 && (
                  <>
                    <h3 className="mt-0 text-2xl font-normal lg:w-2/3">
                      Combine the Power of Solidity with Verus
                    </h3>
                    <p className="w-4/5 text-xl font-light lg:w-2/3 font-p">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque.
                    </p>
                    <button className="px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans-defualt hover:border-bluebutton text-bluebutton">
                      Learn More
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center pt-6 text-center sm:pt-24 section-4">
        <div className="grid grid-cols-1 text-center md:g-8 md:grid-cols-11 lg:grid-cols-12">
          <div className="justify-center p-6 text-center md:col-start-2 md:col-span-3 lg:col-span-2 lg:col-start-3">
            <img src="images/verusidlookupsmallicon.png" height="70" alt="" />
            <h1 className="mt-8 text-2xl font-normal">VerusID Lookup</h1>
            <p className="font-light font-p">
              Search for identities registered on the Verus blockchain
            </p>
            <Link href="/verusid-lookup">
              <button className="w-1/2 px-12 py-5 text-sm bg-transparent border border-solid rounded-full md:w-full border-bluetrans-defualt hover:border-bluebutton text-bluebutton">
                Search for identities
              </button>
            </Link>
          </div>
          <div className="justify-center p-6 text-center lg:col-span-2 lg:col-start-6 md:col-span-3">
            <img
              src="images/blockexplorericongreen.png"
              srcSet="
              images/blockexplorericongreen-p-500.png 500w,
              images/blockexplorericongreen.png       531w
            "
              sizes="108px"
              height="70"
              alt=""
            />
            <h1 className="mt-8 text-2xl font-normal">Block Explorer</h1>
            <p className="font-light font-p">
              Search through addresses and transactions
            </p>
            <Link href="/">
              <button className="w-1/2 px-12 py-5 bg-transparent border border-solid rounded-full md:w-full text-n border-bluetrans-defualt hover:border-bluebutton text-bluebutton">
                See explorer
              </button>
            </Link>
          </div>
          <div className="justify-center p-6 text-center lg:col-span-2 lg:col-start-9 md:col-span-3">
            <img src="images/dummy.png" height="70" alt="" />
            <h1 className="mt-8 text-2xl font-normal">Verus Signature</h1>
            <p className="font-light font-p">
              Sign and verify documents and files for free
            </p>
            <Link href="/">
              <button className="w-1/2 px-12 py-5 text-sm bg-transparent border border-solid rounded-full md:w-full border-bluetrans-defualt hover:border-bluebutton text-bluebutton">
                Verify documents
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 m-4 text-white rounded-lg md:grid-cols-3 lg:grid-cols-12 lg:justify-between md:pl-16 md:pr-20 md:m-32 md:mt-24 bg-theme-green">
          <h1 className="text-3xl font-normal lg:col-span-7 md:col-span-2">
            Want to start building on Verus?
          </h1>
          <button className="py-3 m-3 text-lg font-normal text-black bg-white border-transparent rounded-full sm:flex-shrink-0 hover:bg-gray-200 lg:col-span-4">
            See Developer Documentation
          </button>
        </div>
      </div>

      <hr />

      <div className="grid justify-center grid-cols-1 p-6 mb-16 md:gap-4 md:grid-cols-6 sm:pt-24 section-5">
        <div className="grid grid-cols-1 col-span-1 md:col-start-2 md:col-span-4 md:grid-cols-2">
          <div className="p-16 bg-gray-100 rounded-lg">
            <h4 className="p-0 mb-16 text-2xl font-light leading-relaxed text-center lg:text-left font-p">
              Verus is a decentralized network where anyone in the world can
              participate to earn its currency VRSC.
            </h4>
            <Link href="/mining-and-staking">
              <button className="flex-shrink-0 px-8 py-2 mx-2 text-base text-white border border-0 rounded-full md:py-4 bg-bluebutton hover:bg-bluebutton-hover">
                Start Earning Now
              </button>
            </Link>
          </div>
          <div className="p-6 pr-0 md:p-16">
            <h3 className="mb-1 text-2xl font-normal">Worldwide Network</h3>
            <p className="mt-2 mr-0 font-light font-p">
              Anyone with a modern CPU can start mining VRSC immediately,
              creating a naturally decentralized miner ecosystem.
            </p>
            <h3 className="mt-16 mb-1 text-2xl font-normal">
              Thriving Economy
            </h3>
            <p className="mt-2 mr-0 font-light font-p">
              Verus has a robust and thriving protocol economy with
              opportunities for everyone to earn through mining and staking.
            </p>
            <h3 className="mt-16 mb-1 text-2xl font-normal">
              Permissionless System
            </h3>
            <p className="mt-2 mr-0 font-light font-p">
              Verus is open-source, borderless and permissionless. It
              doesn&#x27;t matter who you are or where you live. Anyone can
              participate.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-center w-screen p-6 pb-20 text-center section-3">
        <h4 className="mb-3 text-xl font-light font-p">
          Subscribe to our newsletter and stay up to date with developments
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid justify-center grid-cols-1 gap-4 p-6 text-center sm:gap-0 sm:grid-cols-12"
        >
          <div className="sm:col-start-3 sm:col-span-5 md:col-start-4 md:col-span-5 lg:col-span-3 lg:col-start-5">
            <input
              name="email"
              className="w-full px-6 py-5 rounded-full text-field text-bluebutton focus:outline-none "
              type="email"
              placeholder="your@email.com"
              ref={register({ required: true })}
            />

            {errors.email && <span>Please enter a email</span>}
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <input
              type="submit"
              value="Stay up to date"
              className="w-full px-5 py-5 text-white rounded-full bg-bluebutton hover:bg-bluebutton-hover focus:outline-none "
            />
            <span></span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
